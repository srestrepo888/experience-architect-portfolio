#!/usr/bin/env ts-node

// 🛡️ DESIGN SYSTEM VALIDATOR - NEVER-FAIL SAFEGUARDS
// Prevents ALL critical design violations identified in the emergency audit

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'

interface ValidationResult {
  file: string
  violations: Violation[]
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
}

interface Violation {
  type: string
  line: number
  content: string
  suggestion: string
  rule: string
}

class DesignSystemValidator {
  private violations: ValidationResult[] = []
  private criticalCount = 0
  private highCount = 0

  // 🚫 FORBIDDEN PATTERNS - FROM EMERGENCY AUDIT
  private readonly FORBIDDEN_PATTERNS = {
    // CRITICAL: Spacing violations (8px grid system)
    SPACING_VIOLATIONS: [
      /py-[59](?!\d)/g,     // py-5, py-9 etc. (non-8px grid)
      /px-[59](?!\d)/g,     // px-5, px-9 etc.
      /gap-[59](?!\d)/g,    // gap-5, gap-9 etc.
      /m-[59](?!\d)/g,      // m-5, m-9 etc.
      /p-[59](?!\d)/g,      // p-5, p-9 etc.
      /space-y-[59](?!\d)/g, // space-y-5, space-y-9 etc.
      /space-x-[59](?!\d)/g, // space-x-5, space-x-9 etc.
      /w-\[\d+px\]/g,       // Hardcoded pixel widths
      /h-\[\d+px\]/g,       // Hardcoded pixel heights
      /leading-\[[\d.]+\]/g, // Custom line heights
    ],

    // CRITICAL: Color violations (CSS variables only)
    COLOR_VIOLATIONS: [
      /text-slate-\d+/g,     // text-slate-500 etc.
      /bg-slate-\d+/g,       // bg-slate-500 etc.
      /border-slate-\d+/g,   // border-slate-500 etc.
      /text-blue-\d+/g,      // text-blue-500 etc.
      /bg-blue-\d+/g,        // bg-blue-500 etc.
      /text-purple-\d+/g,    // text-purple-500 etc.
      /bg-purple-\d+/g,      // bg-purple-500 etc.
      /#[0-9A-Fa-f]{6}/g,    // Hex colors
      /rgb\(\s*\d+/g,        // RGB colors
      /hsl\(\s*\d+/g,        // HSL colors (unless CSS vars)
    ],

    // CRITICAL: Typography violations
    TYPOGRAPHY_VIOLATIONS: [
      /text-\[\d+px\]/g,     // text-[16px] etc.
      /tracking-\[[\d.-]+em\]/g, // Custom tracking values
      /font-\d+/g,           // Numeric font weights
    ],

    // CRITICAL: System violations
    SYSTEM_VIOLATIONS: [
      /DESIGN_SYSTEM(?!\.)/g,           // Old design system usage
      /PERFECT_SPACING/g,               // Old spacing system
      /MASTERPIECE_SPACING/g,           // Unauthorized spacing
      /masterpiece-[a-z-]+\.tsx/g,      // Unauthorized files
    ],

    // HIGH: Shadow and border violations
    SHADOW_VIOLATIONS: [
      /shadow-\[.*?\]/g,     // Custom shadows
      /rounded-\[\d+px\]/g,  // Custom border radius
    ]
  }

  // ✅ APPROVED PATTERNS - ONLY THESE ARE ALLOWED
  private readonly APPROVED_PATTERNS = {
    SPACING: [
      'py-0', 'py-px', 'py-0.5', 'py-1', 'py-2', 'py-3', 'py-4', 'py-6', 'py-8', 'py-12', 'py-16', 'py-24', 'py-32', 'py-40', 'py-48',
      'px-0', 'px-px', 'px-0.5', 'px-1', 'px-2', 'px-3', 'px-4', 'px-6', 'px-8', 'px-12', 'px-16', 'px-24', 'px-32', 'px-40', 'px-48',
      'gap-0', 'gap-px', 'gap-0.5', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-6', 'gap-8', 'gap-12', 'gap-16', 'gap-24', 'gap-32',
      'm-0', 'm-px', 'm-0.5', 'm-1', 'm-2', 'm-3', 'm-4', 'm-6', 'm-8', 'm-12', 'm-16', 'm-24', 'm-32',
      'p-0', 'p-px', 'p-0.5', 'p-1', 'p-2', 'p-3', 'p-4', 'p-6', 'p-8', 'p-12', 'p-16', 'p-24', 'p-32',
    ],
    COLORS: [
      'text-foreground', 'text-muted-foreground', 'text-primary', 'text-secondary', 'text-accent',
      'bg-background', 'bg-card', 'bg-primary', 'bg-secondary', 'bg-muted', 'bg-accent',
      'border-border', 'border-input', 'border-ring',
      'hsl(var(--foreground))', 'hsl(var(--background))', 'hsl(var(--primary))', 'hsl(var(--secondary))',
    ],
    SHADOWS: [
      'shadow-subtle', 'shadow-soft', 'shadow-medium', 'shadow-strong', 'shadow-dramatic',
      'var(--shadow-subtle)', 'var(--shadow-soft)', 'var(--shadow-medium)', 'var(--shadow-strong)', 'var(--shadow-dramatic)',
    ]
  }

  async validateProject(): Promise<boolean> {
    console.log('🛡️  DESIGN SYSTEM VALIDATOR - EMERGENCY SAFEGUARDS')
    console.log('================================================')
    
    const componentsDir = path.join(process.cwd(), 'components')
    const appDir = path.join(process.cwd(), 'app')
    const libDir = path.join(process.cwd(), 'lib')

    // Validate all TypeScript/TSX files
    await this.validateDirectory(componentsDir, ['.tsx', '.ts'])
    await this.validateDirectory(appDir, ['.tsx', '.ts'])
    await this.validateDirectory(libDir, ['.ts'])

    // Special validation for critical files
    await this.validateCriticalFiles()

    this.generateReport()
    
    return this.criticalCount === 0 && this.highCount === 0
  }

  private async validateDirectory(directory: string, extensions: string[]): Promise<void> {
    if (!fs.existsSync(directory)) return

    const files = this.getAllFiles(directory, extensions)
    
    for (const file of files) {
      await this.validateFile(file)
    }
  }

  private getAllFiles(directory: string, extensions: string[]): string[] {
    const files: string[] = []
    
    const items = fs.readdirSync(directory)
    
    for (const item of items) {
      const fullPath = path.join(directory, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'backup') {
        files.push(...this.getAllFiles(fullPath, extensions))
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }
    
    return files
  }

  private async validateFile(filePath: string): Promise<void> {
    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')
    const violations: Violation[] = []

    lines.forEach((line, index) => {
      // Check for spacing violations
      Object.entries(this.FORBIDDEN_PATTERNS.SPACING_VIOLATIONS).forEach(([_, pattern]) => {
        const matches = line.match(pattern)
        if (matches) {
          violations.push({
            type: 'SPACING_VIOLATION',
            line: index + 1,
            content: line.trim(),
            suggestion: 'Use 8px grid system values: py-2, py-4, py-6, py-8, py-12, py-16, py-24, py-32',
            rule: 'UNIFIED_DESIGN_SYSTEM.spacing - 8px grid compliance'
          })
        }
      })

      // Check for color violations
      Object.entries(this.FORBIDDEN_PATTERNS.COLOR_VIOLATIONS).forEach(([_, pattern]) => {
        const matches = line.match(pattern)
        if (matches) {
          violations.push({
            type: 'COLOR_VIOLATION',
            line: index + 1,
            content: line.trim(),
            suggestion: 'Use CSS variables: text-foreground, bg-background, border-border, or hsl(var(--foreground))',
            rule: 'UNIFIED_DESIGN_SYSTEM.colors - CSS variables only'
          })
        }
      })

      // Check for typography violations
      Object.entries(this.FORBIDDEN_PATTERNS.TYPOGRAPHY_VIOLATIONS).forEach(([_, pattern]) => {
        const matches = line.match(pattern)
        if (matches) {
          violations.push({
            type: 'TYPOGRAPHY_VIOLATION',
            line: index + 1,
            content: line.trim(),
            suggestion: 'Use TYPOGRAPHY_UTILITIES from unified-design-system.ts',
            rule: 'UNIFIED_DESIGN_SYSTEM.typography - Modular scale compliance'
          })
        }
      })

      // Check for system violations
      Object.entries(this.FORBIDDEN_PATTERNS.SYSTEM_VIOLATIONS).forEach(([_, pattern]) => {
        const matches = line.match(pattern)
        if (matches) {
          violations.push({
            type: 'SYSTEM_VIOLATION',
            line: index + 1,
            content: line.trim(),
            suggestion: 'Use UNIFIED_DESIGN_SYSTEM as single source of truth',
            rule: 'Single source of truth principle'
          })
        }
      })
    })

    if (violations.length > 0) {
      const severity = this.determineSeverity(violations)
      this.violations.push({
        file: path.relative(process.cwd(), filePath),
        violations,
        severity
      })

      if (severity === 'CRITICAL') this.criticalCount++
      if (severity === 'HIGH') this.highCount++
    }
  }

  private async validateCriticalFiles(): Promise<void> {
    const criticalFiles = [
      'lib/unified-design-system.ts',
      'components/ui/enhanced-layout-system.tsx',
      'app/globals.css',
      'tailwind.config.ts'
    ]

    for (const file of criticalFiles) {
      const fullPath = path.join(process.cwd(), file)
      if (fs.existsSync(fullPath)) {
        console.log(`🔍 Validating critical file: ${file}`)
        await this.validateFile(fullPath)
      } else {
        console.error(`❌ CRITICAL FILE MISSING: ${file}`)
        this.criticalCount++
      }
    }
  }

  private determineSeverity(violations: Violation[]): 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' {
    const criticalTypes = ['SPACING_VIOLATION', 'COLOR_VIOLATION', 'SYSTEM_VIOLATION']
    const highTypes = ['TYPOGRAPHY_VIOLATION', 'SHADOW_VIOLATION']
    
    if (violations.some(v => criticalTypes.includes(v.type))) return 'CRITICAL'
    if (violations.some(v => highTypes.includes(v.type))) return 'HIGH'
    if (violations.length > 5) return 'MEDIUM'
    return 'LOW'
  }

  private generateReport(): void {
    console.log('\n📊 VALIDATION REPORT')
    console.log('===================')
    console.log(`🚨 Critical Violations: ${this.criticalCount}`)
    console.log(`⚠️  High Violations: ${this.highCount}`)
    console.log(`📝 Total Files with Issues: ${this.violations.length}`)

    if (this.violations.length > 0) {
      console.log('\n🔍 DETAILED VIOLATIONS:')
      console.log('======================')
      
      this.violations.forEach(result => {
        console.log(`\n📁 ${result.file} (${result.severity})`)
        result.violations.forEach(violation => {
          console.log(`   Line ${violation.line}: ${violation.type}`)
          console.log(`   Content: ${violation.content}`)
          console.log(`   Rule: ${violation.rule}`)
          console.log(`   Fix: ${violation.suggestion}`)
          console.log('')
        })
      })
    }

    if (this.criticalCount === 0 && this.highCount === 0) {
      console.log('\n✅ DESIGN SYSTEM VALIDATION PASSED')
      console.log('All components comply with UNIFIED_DESIGN_SYSTEM')
    } else {
      console.log('\n❌ DESIGN SYSTEM VALIDATION FAILED')
      console.log('CRITICAL and HIGH violations must be fixed before deployment')
      process.exit(1)
    }
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new DesignSystemValidator()
  validator.validateProject().catch(console.error)
}

export default DesignSystemValidator
