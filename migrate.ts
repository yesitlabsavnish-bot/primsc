import "dotenv/config";
import * as prismic from "@prismicio/client";
import prismicConfig from "./prismic.config.json";

const writeToken = process.env.PRISMIC_WRITE_TOKEN;

if (!writeToken) {
  throw new Error("PRISMIC_WRITE_TOKEN is missing");
}

const writeClient = prismic.createWriteClient(
  prismicConfig.repositoryName,
  {
    writeToken,
  }
);

async function main() {
  console.log("Repository:", prismicConfig.repositoryName);
  console.log(
    "Write token exists:",
    !!process.env.PRISMIC_WRITE_TOKEN
  );

  const migration = prismic.createMigration();

  migration.createDocument(
    {
      type: "contact_submission",
      uid: `test-${Date.now()}`,
      lang: "en-us",

      data: {
        first_name: "Test",
        last_name: "User",
        email: "test@example.com",
        message: "Migration API test submission",
      },
    },
    "Contact Submission Test"
  );

  console.log("Sending migration to Prismic...");

  await writeClient.migrate(migration, {
    reporter: (event) => {
      console.log(event);
    },
  });

  console.log("✅ Migration completed successfully");
}

main().catch((error) => {
  console.error("❌ MIGRATION ERROR");
  console.error(error);
  process.exit(1);
});