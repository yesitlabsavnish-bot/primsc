// import { NextResponse } from "next/server";
// import {
//   createWriteClient,
//   createMigration,
// } from "@prismicio/client";
// import prismicConfig from "../../../../prismic.config.json";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const {
//       first_name,
//       last_name,
//       email,
//       message,
//     } = body;

//     // Validation
//     if (
//       !first_name?.trim() ||
//       !last_name?.trim() ||
//       !email?.trim() ||
//       !message?.trim()
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "All fields are required.",
//         },
//         { status: 400 }
//       );
//     }

//     // Check write token
//     const writeToken = process.env.PRISMIC_WRITE_TOKEN;

//     if (!writeToken) {
//       console.error("PRISMIC_WRITE_TOKEN is missing");

//       return NextResponse.json(
//         {
//           success: false,
//           error: "Prismic write token is not configured.",
//         },
//         { status: 500 }
//       );
//     }

//     // Prismic write client
//     const writeClient = createWriteClient(
//       prismicConfig.repositoryName,
//       {
//         writeToken,
//       }
//     );

//     // Create migration
//     const migration = createMigration();

//     // Unique UID
//     const uid = `contact-${Date.now()}`;

//     // Create document
//     migration.createDocument(
//       {
//         type: "contact_submission",
//         uid,
//         lang: "en-us",

//         data: {
//           first_name: first_name.trim(),
//           last_name: last_name.trim(),
//           email: email.trim(),
//           message: message.trim(),
//         },
//       },
//       `Contact Submission - ${first_name.trim()} ${last_name.trim()}`
//     );

//     // Send to Prismic
//     await writeClient.migrate(migration, {
//       reporter: (event) => {
//         console.log("Prismic Migration:", event);
//       },
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Contact form submitted successfully.",
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("❌ CONTACT API ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: "Something went wrong while submitting the form.",
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import {
  createWriteClient,
  createMigration,
} from "@prismicio/client";
import { Resend } from "resend";
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

    // =========================
    // VALIDATION
    // =========================

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

    // =========================
    // CHECK PRISMIC TOKEN
    // =========================

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

    // =========================
    // SAVE TO PRISMIC
    // =========================

    const writeClient = createWriteClient(
      prismicConfig.repositoryName,
      {
        writeToken,
      }
    );

    const migration = createMigration();

    const uid = `contact-${Date.now()}`;

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

    await writeClient.migrate(migration, {
      reporter: (event) => {
        console.log("Prismic Migration:", event);
      },
    });

    // =========================
    // CHECK RESEND CONFIG
    // =========================

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully to Prismic.",
          warning: "Email configuration is missing.",
        },
        { status: 200 }
      );
    }

    if (!contactEmail) {
      console.error("CONTACT_EMAIL is missing");

      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully to Prismic.",
          warning: "Contact email is not configured.",
        },
        { status: 200 }
      );
    }

    // =========================
    // INITIALIZE RESEND
    // =========================

    const resend = new Resend(resendApiKey);

    // =========================
    // SEND EMAIL
    // =========================

    const { error: emailError } = await resend.emails.send({
      from: "Phlex Carbon <onboarding@resend.dev>",
      to: [contactEmail],

      subject: `New Contact Form Submission - ${first_name.trim()} ${last_name.trim()}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>

          <p>
            <strong>First Name:</strong>
            ${first_name.trim()}
          </p>

          <p>
            <strong>Last Name:</strong>
            ${last_name.trim()}
          </p>

          <p>
            <strong>Email:</strong>
            ${email.trim()}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message.trim()}
          </p>
        </div>
      `,
    });

    // =========================
    // EMAIL FAILED
    // =========================

    if (emailError) {
      console.error("❌ Email sending failed:", emailError);

      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully.",
          warning:
            "Submission saved to Prismic, but email could not be sent.",
        },
        { status: 200 }
      );
    }

    // =========================
    // SUCCESS
    // =========================

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully.",
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