"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";

import { getWhatsAppLink, siteConfig } from "@/data/site";

const projectTypes = [
  "Landing page",
  "Business website",
  "Website redesign",
  "Personal brand site",
  "Restaurant or local business site",
];

const timelines = ["As soon as possible", "This week", "This month", "Flexible"];

export function QuickQuoteForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [timeline, setTimeline] = useState(timelines[0]);
  const [details, setDetails] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      `Hi ${siteConfig.personName}, I would like a website quote.`,
      `Name: ${name || "Not provided"}`,
      `Business: ${business || "Not provided"}`,
      `Project type: ${projectType}`,
      `Timeline: ${timeline}`,
      `Project details: ${details || "Not provided"}`,
    ].join("\n");

    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="panel space-y-5 p-6 sm:p-7">
      <div className="space-y-2">
        <span className="eyebrow">Quick quote</span>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
          Start with WhatsApp and get a fast reply.
        </h3>
        <p className="text-sm leading-6 text-slate-600 sm:text-base">
          Share a few details and the form will open your WhatsApp chat. Prefer
          email instead? Use{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Your name"
            className="input-field"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Business
          <input
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            type="text"
            placeholder="Your business or brand"
            className="input-field"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Project type
          <select
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className="input-field"
          >
            {projectTypes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Timeline
          <select
            value={timeline}
            onChange={(event) => setTimeline(event.target.value)}
            className="input-field"
          >
            {timelines.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-700">
        What do you need?
        <textarea
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          rows={5}
          placeholder="Tell me about your service, offer, style, or goal."
          className="input-field min-h-32 resize-y"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="button-primary justify-center">
          <MessageCircle className="size-4" />
          Send on WhatsApp
        </button>
        <a
          href={`mailto:${siteConfig.email}`}
          className="button-secondary justify-center"
        >
          Email instead
          <ArrowRight className="size-4" />
        </a>
      </div>
    </form>
  );
}
