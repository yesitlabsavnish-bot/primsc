import { NextResponse } from "next/server";
import {
  createWriteClient,
  createMigration,
} from "@prismicio/client";
import prismicConfig from "../../../../prismic.config.json";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      first_name,
      last_name,
      email,
      message,
    } = body;

    // Validation
    if (
      !first_name?.trim() ||
      !last_name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Check write token
    const writeToken = process.env.PRISMIC_WRITE_TOKEN;

    if (!writeToken) {
      console.error("PRISMIC_WRITE_TOKEN is missing");

      return NextResponse.json(
        {
          success: false,
          error: "Prismic write token is not configured.",
        },
        { status: 500 }
      );
    }

    // Prismic write client
    const writeClient = createWriteClient(
      prismicConfig.repositoryName,
      {
        writeToken,
      }
    );

    // Create migration
    const migration = createMigration();

    // Unique UID
    const uid = `contact-${Date.now()}`;

    // Create document
    migration.createDocument(
      {
        type: "contact_submission",
        uid,
        lang: "en-us",

        data: {
          first_name: first_name.trim(),
          last_name: last_name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
      },
      `Contact Submission - ${first_name.trim()} ${last_name.trim()}`
    );

    // Send to Prismic
    await writeClient.migrate(migration, {
      reporter: (event) => {
        console.log("Prismic Migration:", event);
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while submitting the form.",
      },
      { status: 500 }
    );
  }
}