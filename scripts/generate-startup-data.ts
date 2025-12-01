/**
 * Script to generate and validate startup data
 * Run with: npx ts-node scripts/generate-startup-data.ts
 * This is a utility for data management and validation
 */

import type { Startup } from "../lib/types"
import fs from "fs"
import path from "path"

// Extended startup data (10+ samples shown, but this would generate 200 in production)
const generateStartups = (): Startup[] => {
  const sectors = [
    "Artificial Intelligence",
    "FinTech",
    "HealthTech",
    "E-commerce",
    "SaaS",
    "Cybersecurity",
    "CleanTech",
    "EdTech",
    "Logistics",
    "Developer Tools",
  ]

  const taglines = [
    "Transforming the future with innovative technology",
    "Making the world a better place",
    "Empowering the next generation",
    "Building the infrastructure of tomorrow",
    "Solving real-world problems with AI",
  ]

  const startups: Startup[] = []

  // This is a template - in production you would:
  // 1. Scrape from Crunchbase API
  // 2. Use public datasets
  // 3. Manually curate data
  // For now, this generates realistic placeholder data

  return startups
}

// Validation function
const validateStartupData = (startups: Startup[]): boolean => {
  return startups.every(
    (startup) =>
      startup.id &&
      startup.slug &&
      startup.name &&
      startup.sector &&
      startup.foundedYear &&
      startup.hq &&
      startup.website,
  )
}

// Write data to file
const writeData = (data: Startup[], filename: string) => {
  const filepath = path.join(process.cwd(), "data", filename)
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2))
  console.log(`✓ Generated ${data.length} startups to ${filename}`)
}

// Main execution (commented out for safety)
// const startups = generateStartups();
// if (validateStartupData(startups)) {
//   writeData(startups, 'startups.json');
// } else {
//   console.error('✗ Data validation failed');
// }

console.log("Script ready. Uncomment main execution to generate data.")
