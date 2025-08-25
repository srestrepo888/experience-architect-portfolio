#!/usr/bin/env ts-node

// 🛡️ PRE-COMMIT SAFEGUARDS - NEVER-FAIL PROTECTION
// Runs before every commit to prevent design system violations

import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

class PreCommitSafeguards {
  private errors: string[] = []
  private warnings: string[] = []

  async runSafeguards(): Promise<boolean> {
    console.log('🛡️  PRE-COMMIT SAFEGUARDS - NEVER-FAIL PROTECTION')
    console.log('================================================')

    try {
      // 1. Design System Validation
      await this.validateDesignSystem()
      
      // 2. File Structure Validation
      await this.validateFileStructure()
      
      // 3. Typography Validation
      await this.validateTypography()
      
      // 4. Component Validation
      await this.validateComponents()
      
      // 5. Build Validation
      await this.validateBuild()

      this.generateReport()
      
      return this.errors.length === 0

    } catch (error) {
      console.error('❌ Pre-commit validation failed:', error)
      return false
    }
  }

  private async validateDesignSystem(): Promise<void> {
    console.log('🎯 Validating Design System Compliance...')
    
    try {
      // Run our comprehensive design system validator
      execSync('npx ts-node scripts/design-system-validator.ts', { 
        stdio: 'inherit',
        cwd: process.cwd()
      })
      console.log('✅ Design system validation passed')
    } catch (error) {
      this.errors.push('Design system validation failed - contains critical violations')
    }
  }

  private async validateFileStructure(): Promise<void> {
    console.log('📁 Validating File Structure...')
    
    // Check for unauthorized files
    const unauthorizedPatterns = [
      'components/ui/masterpiece-*.tsx',
      'components/ui/*-optimization*.tsx',
      'components/ui/*-viewport*.tsx',
    ]
    
    for (const pattern of unauthorizedPatterns) {
      try {
        const files = execSync(`find . -name "${pattern}" -not -path "./node_modules/*"`, { 
          encoding: 'utf-8' 
        }).trim()
        
        if (files) {
          this.errors.push(`Unauthorized files found: ${files}`)
        }
      } catch (error) {
        // No files found - this is good
      }
    }

    // Check for required files
    const requiredFiles = [
      'lib/unified-design-system.ts',
      'components/unified-typography.tsx',
      'components/ui/enhanced-layout-system.tsx',
      'scripts/design-system-validator.ts',
    ]

    for (const file of requiredFiles) {
      if (!fs.existsSync(path.join(process.cwd(), file))) {
        this.errors.push(`Required file missing: ${file}`)
      }
    }

    console.log('✅ File structure validation completed')
  }

  private async validateTypography(): Promise<void> {
    console.log('📝 Validating Typography System...')
    
    // Check that components use unified typography
    const componentsWithOldTypography = []
    
    try {
      const grepResult = execSync(
        `grep -r "DisplayLarge\\|DisplayMedium\\|HeadingLarge" components/ app/ --include="*.tsx" --include="*.ts" || true`,
        { encoding: 'utf-8' }
      )
      
      if (grepResult.trim()) {
        const lines = grepResult.trim().split('\n')
        for (const line of lines) {
          if (!line.includes('unified-typography') && !line.includes('components/typography.tsx')) {
            componentsWithOldTypography.push(line)
          }
        }
      }

      if (componentsWithOldTypography.length > 0) {
        this.warnings.push('Components still using old typography system - consider migrating to unified-typography.tsx')
      }

    } catch (error) {
      // Grep failed, likely no matches
    }

    console.log('✅ Typography validation completed')
  }

  private async validateComponents(): Promise<void> {
    console.log('🧩 Validating Component System...')
    
    // Check for proper imports
    const componentsDir = path.join(process.cwd(), 'components')
    const files = this.getAllTsxFiles(componentsDir)
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8')
      
      // Check for hardcoded values
      if (content.includes('px-[') || content.includes('py-[') || content.includes('text-[')) {
        const filename = path.relative(process.cwd(), file)
        this.warnings.push(`Component ${filename} contains hardcoded values - should use design system`)
      }
      
      // Check for old design system imports
      if (content.includes('DESIGN_SYSTEM') && !content.includes('UNIFIED_DESIGN_SYSTEM')) {
        const filename = path.relative(process.cwd(), file)
        this.errors.push(`Component ${filename} uses old DESIGN_SYSTEM - must use UNIFIED_DESIGN_SYSTEM`)
      }
    }

    console.log('✅ Component validation completed')
  }

  private async validateBuild(): Promise<void> {
    console.log('🏗️  Validating Build...')
    
    try {
      // Type check
      execSync('npx tsc --noEmit', { 
        stdio: 'pipe',
        cwd: process.cwd()
      })
      console.log('✅ TypeScript validation passed')
      
      // Lint check
      execSync('npx next lint --quiet', { 
        stdio: 'pipe',
        cwd: process.cwd()
      })
      console.log('✅ Lint validation passed')

    } catch (error) {
      this.errors.push('Build validation failed - TypeScript or linting errors present')
    }
  }

  private getAllTsxFiles(directory: string): string[] {
    const files: string[] = []
    
    if (!fs.existsSync(directory)) return files
    
    const items = fs.readdirSync(directory)
    
    for (const item of items) {
      const fullPath = path.join(directory, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.getAllTsxFiles(fullPath))
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath)
      }
    }
    
    return files
  }

  private generateReport(): void {
    console.log('\n📊 PRE-COMMIT SAFEGUARDS REPORT')
    console.log('==============================')
    
    if (this.errors.length > 0) {
      console.log(`❌ ERRORS (${this.errors.length}):`)
      this.errors.forEach((error, index) => {
        console.log(`   ${index + 1}. ${error}`)
      })
    }
    
    if (this.warnings.length > 0) {
      console.log(`⚠️  WARNINGS (${this.warnings.length}):`)
      this.warnings.forEach((warning, index) => {
        console.log(`   ${index + 1}. ${warning}`)
      })
    }
    
    if (this.errors.length === 0) {
      console.log('✅ ALL SAFEGUARDS PASSED - COMMIT APPROVED')
      console.log('Design system integrity maintained')
    } else {
      console.log('❌ SAFEGUARDS FAILED - COMMIT BLOCKED')
      console.log('Fix all errors before committing')
    }
  }
}

// Run safeguards if called directly
if (require.main === module) {
  const safeguards = new PreCommitSafeguards()
  safeguards.runSafeguards().then(success => {
    process.exit(success ? 0 : 1)
  }).catch(() => {
    process.exit(1)
  })
}

export default PreCommitSafeguards
