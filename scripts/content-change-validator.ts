#!/usr/bin/env tsx

/**
 * CONTENT CHANGE VALIDATOR
 * 
 * Validates content changes across the portfolio to ensure consistency
 * and accuracy, particularly for employment data and professional information.
 * 
 * This script is triggered during builds and deployments to catch content
 * inconsistencies before they reach production.
 */

import * as fs from 'fs'
import * as path from 'path'

interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
  info: string[]
}

interface EmploymentEntry {
  file: string
  line: number
  year: string
  role: string
  company: string
}

class ContentChangeValidator {
  private result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    info: []
  }

  private componentsDir = path.join(process.cwd(), 'components')
  
  /**
   * Main validation method
   */
  async validate(): Promise<ValidationResult> {
    console.log('🔍 Running Content Change Validation...\n')

    // Validate employment data consistency
    await this.validateEmploymentConsistency()
    
    // Validate professional information accuracy
    await this.validateProfessionalInfo()
    
    // Validate content structure integrity
    await this.validateContentStructure()

    // Generate final report
    this.generateReport()
    
    return this.result
  }

  /**
   * Validates that employment data is consistent across all career timeline components
   */
  private async validateEmploymentConsistency(): Promise<void> {
    this.result.info.push('📋 Validating employment data consistency...')
    
    const careerComponents = [
      'sophisticated-career-journey.tsx',
      'experience-timeline-modern.tsx'
    ]

    const employmentData: EmploymentEntry[] = []

    for (const component of careerComponents) {
      const filePath = path.join(this.componentsDir, component)
      
      if (!fs.existsSync(filePath)) {
        this.result.warnings.push(`⚠️  Career component not found: ${component}`)
        continue
      }

      const content = fs.readFileSync(filePath, 'utf-8')
      const entries = this.extractEmploymentEntries(content, component)
      employmentData.push(...entries)
    }

    // Group by company and role to check for consistency
    const groupedData = this.groupEmploymentData(employmentData)
    
    // Validate consistency within each group
    for (const [key, entries] of Object.entries(groupedData)) {
      this.validateEmploymentGroup(key, entries)
    }

    this.result.info.push(`✅ Processed ${employmentData.length} employment entries across ${careerComponents.length} components`)
  }

  /**
   * Extracts employment entries from component content
   */
  private extractEmploymentEntries(content: string, fileName: string): EmploymentEntry[] {
    const entries: EmploymentEntry[] = []
    const lines = content.split('\n')

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      // Look for year patterns like "2023—2025" or "2023—Present"
      const yearMatch = line.match(/year:\s*["']([^"']+)["']/)
      if (yearMatch) {
        // Look for role and company in subsequent lines
        let role = ''
        let company = ''
        
        for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
          const nextLine = lines[j]
          
          const roleMatch = nextLine.match(/role:\s*["']([^"']+)["']/)
          if (roleMatch && !role) {
            role = roleMatch[1]
          }
          
          const companyMatch = nextLine.match(/company:\s*["']([^"']+)["']/)
          if (companyMatch && !company) {
            company = companyMatch[1]
          }
          
          if (role && company) break
        }

        if (role && company) {
          entries.push({
            file: fileName,
            line: i + 1,
            year: yearMatch[1],
            role,
            company
          })
        }
      }
    }

    return entries
  }

  /**
   * Groups employment data by company and role for consistency checking
   */
  private groupEmploymentData(entries: EmploymentEntry[]): Record<string, EmploymentEntry[]> {
    const grouped: Record<string, EmploymentEntry[]> = {}
    
    for (const entry of entries) {
      const key = `${entry.company}::${entry.role}`
      if (!grouped[key]) {
        grouped[key] = []
      }
      grouped[key].push(entry)
    }
    
    return grouped
  }

  /**
   * Validates consistency within an employment group
   */
  private validateEmploymentGroup(key: string, entries: EmploymentEntry[]): void {
    if (entries.length < 2) return

    const [company, role] = key.split('::')
    const years = entries.map(e => e.year)
    const uniqueYears = [...new Set(years)]

    if (uniqueYears.length > 1) {
      this.result.errors.push(
        `❌ Employment date inconsistency for ${role} at ${company}:\n` +
        entries.map(e => `   ${e.file}:${e.line} - "${e.year}"`).join('\n')
      )
      this.result.isValid = false
    } else {
      this.result.info.push(`✅ Employment dates consistent for ${role} at ${company}: "${uniqueYears[0]}"`)
    }
  }

  /**
   * Validates professional information accuracy
   */
  private async validateProfessionalInfo(): Promise<void> {
    this.result.info.push('👔 Validating professional information accuracy...')

    // Check for common employment date format issues
    const careerFiles = [
      'sophisticated-career-journey.tsx',
      'experience-timeline-modern.tsx'
    ]

    for (const file of careerFiles) {
      const filePath = path.join(this.componentsDir, file)
      
      if (!fs.existsSync(filePath)) continue

      const content = fs.readFileSync(filePath, 'utf-8')
      
      // Check for "Present" in employment dates (should be updated to actual end dates)
      const presentMatches = content.match(/year:\s*["'][^"']*Present[^"']*["']/g)
      if (presentMatches && presentMatches.length > 0) {
        this.result.warnings.push(
          `⚠️  Found "Present" in employment dates in ${file}. Consider updating to actual end dates if employment has ended.`
        )
      }

      // Check for inconsistent date formats
      const dateMatches = content.match(/year:\s*["']([^"']+)["']/g)
      if (dateMatches) {
        for (const match of dateMatches) {
          const year = match.match(/["']([^"']+)["']/)?.[1]
          if (year && !this.isValidDateFormat(year)) {
            this.result.warnings.push(`⚠️  Potentially invalid date format in ${file}: "${year}"`)
          }
        }
      }
    }
  }

  /**
   * Validates if a date string follows expected format
   */
  private isValidDateFormat(dateStr: string): boolean {
    // Expected formats: "2023—2025", "2023—Present", "2020—2023"
    const validPatterns = [
      /^\d{4}—\d{4}$/,           // 2023—2025
      /^\d{4}—Present$/,         // 2023—Present
      /^\d{4}$/                  // 2023 (single year)
    ]

    return validPatterns.some(pattern => pattern.test(dateStr))
  }

  /**
   * Validates content structure integrity
   */
  private async validateContentStructure(): Promise<void> {
    this.result.info.push('🏗️  Validating content structure integrity...')

    // Check that career components have the expected structure
    const requiredComponents = [
      'sophisticated-career-journey.tsx',
      'experience-timeline-modern.tsx'
    ]

    for (const component of requiredComponents) {
      const filePath = path.join(this.componentsDir, component)
      
      if (!fs.existsSync(filePath)) {
        this.result.errors.push(`❌ Required career component missing: ${component}`)
        this.result.isValid = false
        continue
      }

      const content = fs.readFileSync(filePath, 'utf-8')
      
      // Check for required fields in career data
      const requiredFields = ['year', 'role', 'company']
      for (const field of requiredFields) {
        if (!content.includes(`${field}:`)) {
          this.result.errors.push(`❌ Required field '${field}' not found in ${component}`)
          this.result.isValid = false
        }
      }
    }

    this.result.info.push('✅ Content structure validation completed')
  }

  /**
   * Generates final validation report
   */
  private generateReport(): void {
    console.log('\n📊 CONTENT CHANGE VALIDATION REPORT')
    console.log('=====================================\n')

    if (this.result.info.length > 0) {
      console.log('ℹ️  Information:')
      this.result.info.forEach(info => console.log(`   ${info}`))
      console.log('')
    }

    if (this.result.warnings.length > 0) {
      console.log('⚠️  Warnings:')
      this.result.warnings.forEach(warning => console.log(`   ${warning}`))
      console.log('')
    }

    if (this.result.errors.length > 0) {
      console.log('❌ Errors:')
      this.result.errors.forEach(error => console.log(`   ${error}`))
      console.log('')
    }

    console.log(`🎯 Validation Result: ${this.result.isValid ? '✅ PASSED' : '❌ FAILED'}`)
    console.log(`📈 Summary: ${this.result.errors.length} errors, ${this.result.warnings.length} warnings, ${this.result.info.length} info messages\n`)
  }
}

/**
 * Main execution
 */
async function main() {
  const validator = new ContentChangeValidator()
  const result = await validator.validate()

  // Exit with error code if validation failed
  if (!result.isValid) {
    console.log('💥 Content validation failed! Please fix the errors above before proceeding.\n')
    process.exit(1)
  }

  console.log('🎉 Content validation passed! All employment data is consistent and accurate.\n')
  process.exit(0)
}

// Run validation if this script is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Validation script failed:', error)
    process.exit(1)
  })
}

export { ContentChangeValidator }
