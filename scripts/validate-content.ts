#!/usr/bin/env node

/**
 * Content Validation Script
 * 
 * This script scans the codebase to ensure no unauthorized content appears.
 * It focuses specifically on preventing the unauthorized phrases that have
 * been identified as problematic.
 * 
 * Usage: npm run validate-content
 */

import fs from 'fs'
import path from 'path'

// Unauthorized content that should NEVER appear
const UNAUTHORIZED_CONTENT = [
  "crafting digital experiences where strategy meets soul",
  "Crafting Digital Experiences Where Strategy Meets Soul",
  "Crafting Digital Masterpieces",
  "Accurate selection of projects that demonstrate a commitment to design excellence, strategic thinking, and impactful user experiences",
  "Design Excellence meticulously architected solution addressing demanding market realities and evolving client needs",
  "meticulously architected solutions addressing demanding market realities and evolving client's needs"
]

// File extensions to scan
const SCAN_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']

// Directories to exclude
const EXCLUDE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', 'scripts']

interface ContentIssue {
  file: string
  line: number
  content: string
}

class ContentValidator {
  private issues: ContentIssue[] = []
  private scannedFiles = 0

  /**
   * Scan a file for unauthorized content
   */
  private scanFile(filePath: string): void {
    try {
      const content = fs.readFileSync(filePath, 'utf-8')
      const lines = content.split('\n')
      
      lines.forEach((line, index) => {
        const lineNumber = index + 1
        
        // Check for unauthorized content
        UNAUTHORIZED_CONTENT.forEach(unauthorized => {
          if (line.toLowerCase().includes(unauthorized.toLowerCase())) {
            this.issues.push({
              file: filePath,
              line: lineNumber,
              content: line.trim()
            })
          }
        })
      })
      
      this.scannedFiles++
    } catch (error) {
      console.error('Error scanning file ' + filePath + ':', error)
    }
  }

  /**
   * Recursively scan directory for files
   */
  private scanDirectory(dirPath: string): void {
    try {
      const items = fs.readdirSync(dirPath)
      
      items.forEach(item => {
        const fullPath = path.join(dirPath, item)
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
          if (!EXCLUDE_DIRS.includes(item)) {
            this.scanDirectory(fullPath)
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item)
          if (SCAN_EXTENSIONS.includes(ext)) {
            this.scanFile(fullPath)
          }
        }
      })
    } catch (error) {
      console.error('Error scanning directory ' + dirPath + ':', error)
    }
  }

  /**
   * Run the content validation
   */
  public validate(): void {
    console.log('Starting content validation...')
    console.log('Scanning codebase for unauthorized content...\n')
    
    // Start scanning from project root
    const projectRoot = path.resolve(__dirname, '..')
    this.scanDirectory(projectRoot)
    
    // Report results
    this.reportResults()
  }

  /**
   * Report validation results
   */
  private reportResults(): void {
    console.log('\nValidation Complete!')
    console.log('Scanned ' + this.scannedFiles + ' files')
    console.log('Found ' + this.issues.length + ' unauthorized content issues\n')
    
    if (this.issues.length === 0) {
      console.log('All content is authorized and properly configured!')
      return
    }
    
    console.log('UNAUTHORIZED CONTENT FOUND:')
    console.log('These phrases should NEVER appear in the codebase:\n')
    this.issues.forEach(issue => {
      console.log('   ' + issue.file + ':' + issue.line)
      console.log('   "' + issue.content + '"\n')
    })
    
    console.log('RECOMMENDATIONS:')
    console.log('1. Remove all unauthorized content immediately')
    console.log('2. Replace with authorized content from lib/content-config.ts')
    console.log('3. Run validation again to confirm fixes')
    
    // Exit with error code if issues found
    if (this.issues.length > 0) {
      process.exit(1)
    }
  }
}

// Run validation if script is executed directly
if (require.main === module) {
  const validator = new ContentValidator()
  validator.validate()
}

export default ContentValidator
