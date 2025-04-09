// TODO: Create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "orange cats",
  "black cats",
  "white cats",
  "big cats",
  "tigers",
  "domestic cats",
  "dogs",
  "mouses",
  "domestic rats",
  "elephants",
  "rabbits",
  "sharks",
  "parrots",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded successfully!");
  } catch (error) {
    console.log("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
