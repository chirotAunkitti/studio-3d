"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { contact } = siteConfig;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 rounded-3xl border border-border bg-surface p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-4 text-lg text-muted">{contact.subheading}</p>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="block text-foreground transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
              {contact.phone && (
                <p className="text-muted">{contact.phone}</p>
              )}
              {contact.location && (
                <p className="text-muted">{contact.location}</p>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <Field name="name" label="Name" placeholder="Jane Doe" required />
              <Field
                name="email"
                type="email"
                label="Email"
                placeholder="jane@company.com"
                required
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project…"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-accent-secondary">
                  Thanks! We&apos;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please email us directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
