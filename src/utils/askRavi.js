/**
 * Lightweight portfolio Q&A — interactive demo visitors can actually use.
 * Answers are grounded in portfolio data (no external API required).
 */
export function answerAboutRavi(rawQuestion, portfolio) {
  const q = (rawQuestion || "").toLowerCase().trim();
  if (!q) {
    return "Ask me anything about Ravi’s work, stack, AI workflows, or how to get in touch.";
  }

  const {
    greeting = {},
    experience = [],
    skillGroups = [],
    awards = [],
    education = {},
    metrics = [],
    socials = {},
    tools = [],
  } = portfolio || {};

  if (/(hire|contact|email|reach|available|open to)/.test(q)) {
    return `Yes — reach Ravi at ${
      (socials.email || "").replace("mailto:", "") || "ravisaxena230599@gmail.com"
    }, LinkedIn (${socials.linkedin || "linkedin.com/in/ravisaxena23"}), or use the contact form below.`;
  }

  if (/(resume|cv|download)/.test(q)) {
    return `Grab the resume from the Download Resume button (PDF on this site)${
      greeting.resumeDriveUrl ? `, or via Drive: ${greeting.resumeDriveUrl}` : ""
    }.`;
  }

  if (/(ai|llm|claude|cursor|mcp|copilot|prompt|agent)/.test(q)) {
    return `Ravi ships AI into real engineering systems — not demos. At Simpplr he automated an AI-powered PR review workflow (Claude) in CI/CD to flag dependency vulnerabilities (~2 hrs/week saved). He works with Claude Code, Cursor, MCP, prompt engineering, and LLM integration on top of Node/React/AWS backends.`;
  }

  if (/(simpplr|current|now|present)/.test(q)) {
    const job = experience.find((e) => /simpplr/i.test(e.company)) || experience[0];
    if (!job) return "Ravi currently builds enterprise SaaS platforms.";
    return `At ${job.company} (${job.period}), Ravi is a ${job.role} on a ${job.context}. Highlights: ${job.bullets
      .slice(0, 2)
      .join(" ")} Tech: ${job.tech.join(", ")}.${
      job.highlight ? ` Recognition: ${job.highlight}.` : ""
    }`;
  }

  if (/(shl|previous|before|past)/.test(q)) {
    const job = experience.find((e) => /shl/i.test(e.company));
    if (!job) return "Previously Ravi worked on HR-tech platforms.";
    return `At ${job.company} (${job.period}), as ${job.role}, he ${job.bullets[0]} Also: ${job.bullets[1]}`;
  }

  if (/(experience|career|work|job|background)/.test(q)) {
    return experience
      .map(
        (e) =>
          `${e.company} — ${e.role} (${e.period})${
            e.highlight ? ` · ${e.highlight}` : ""
          }`
      )
      .join(" · ");
  }

  if (/(stack|tech|technologies|skills|languages)/.test(q)) {
    const groups = skillGroups
      .slice(0, 4)
      .map((g) => `${g.title}: ${g.items.slice(0, 5).join(", ")}`)
      .join(" | ");
    return `Core stack — ${groups}. Also ships with: ${tools
      .map((t) => t.name)
      .join(", ")}.`;
  }

  if (/(kafka|event|sqs|pipeline)/.test(q)) {
    return `Ravi engineered event-driven pipelines with Kafka and AWS SQS at Simpplr, cutting processing latency about 12%, and designs services around durable async workflows.`;
  }

  if (/(auth|abac|rbac|security)/.test(q)) {
    return `He migrated authorization from RBAC to ABAC at Simpplr, helping reduce security incidents about 11%, and works across OAuth, validation, and structured logging for reliability.`;
  }

  if (/(metric|impact|result|scale|tenant)/.test(q)) {
    return `Impact signals: ${metrics
      .map((m) => `${m.value} ${m.label}`)
      .join("; ")}.`;
  }

  if (/(award|cert|education|school|degree|gpa)/.test(q)) {
    return `Education: ${education.degree}, ${education.school} (${education.period}), ${education.detail}. Awards: ${awards.join(
      " · "
    )}.`;
  }

  if (/(who|about|yourself|ravi|intro)/.test(q)) {
    return `${greeting.name} — ${greeting.role}. ${greeting.tagline}`;
  }

  if (/(hello|hi|hey)/.test(q)) {
    return `Hey! I’m Ravi’s portfolio copilot. Try asking about Simpplr, AI workflows, Kafka, or how to hire him.`;
  }

  return `I can answer from Ravi’s portfolio — try “AI experience”, “Simpplr”, “tech stack”, “impact”, or “how do I contact him?” You asked: “${rawQuestion.trim()}”.`;
}

export const SUGGESTED_PROMPTS = [
  "What AI have you shipped?",
  "Tell me about Simpplr",
  "What's your stack?",
  "How do I hire you?",
];
