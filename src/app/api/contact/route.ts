import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * Out of the box this validates the payload and returns success so the demo
 * works with zero configuration. To actually receive messages, plug in your
 * provider of choice below (Resend, Formspree, a webhook, a database, …).
 * See README → "Connecting the contact form".
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 422 },
    );
  }

  // --- Optional: send via Resend if an API key is configured ----------------
  // const apiKey = process.env.RESEND_API_KEY;
  // if (apiKey) {
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from: "Website <onboarding@resend.dev>",
  //       to: process.env.CONTACT_TO_EMAIL,
  //       subject: `New enquiry from ${name}`,
  //       text: `${name} (${email})\n\n${message}`,
  //     }),
  //   });
  // }

  console.info("[contact] new message", { name, email });

  return NextResponse.json({ ok: true });
}
