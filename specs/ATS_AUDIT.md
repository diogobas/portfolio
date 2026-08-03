# ATS audit

Audit date: 2026-08-03

## Purpose

The downloadable PDF is the application artifact for an applicant tracking system. The `/resume/` page is a separate semantic, indexable representation for recruiters, search engines, and sourcing tools. Neither is treated as a guarantee of passing a proprietary ATS.

`src/data/resume.ts` is the canonical source for the home experience list, full career page, HTML résumé, generated PDF, and automated checks. Job-specific variants are kept local and are not published to the portfolio.

## Baseline findings

The previous two-page Canva PDF was searchable and tagged, but local PDF extraction exposed structural risks:

- the first line interleaved the name and title as `D I O G O Senior Full-Stack B A S T O S Software Engineer`;
- the name and section headings were letter-spaced;
- there was no explicit `Core Skills` section;
- earlier companies, titles, and dates were grouped into one entry;
- the PDF, HTML pages, `resume.ts`, `profile.ts`, the Markdown résumé, and the public text copy had diverged;
- the public site had no `/resume/` route.

## Implemented result

- Static, JavaScript-independent HTML at `/resume/` with conventional headings and linear document order.
- A single-column, US Letter PDF generated from the HTML by `pnpm resume:generate`.
- A tagged, searchable two-page PDF at the existing `/resume/diogo-bastos-resume.pdf` URL.
- `pnpm resume:check` validates page count, tagging, searchable text, identity, contact links, section order, every experience entry, skill coverage, and the absence of letter-spaced headings.
- The final automated extraction contains 4,396 searchable characters in the expected order.
- Public contact is limited to Canada, email, portfolio, LinkedIn, and GitHub; no phone number is published.

## OpenResume parser check

OpenResume was cloned to a temporary directory and run locally at commit `4f8255a2c763479837f69f1dccf2a3338730cd79`. Browser requests to non-local origins were blocked during the successful parser run.

The parser correctly extracted:

- name: `Diogo Bastos`;
- email: `diogovvb@gmail.com`;
- LinkedIn URL;
- the complete professional summary;
- all five skill categories and their keywords;
- searchable work-experience and education content.

Phone was blank by design. Location was also blank because this OpenResume version only recognizes the US-style `City, ST` pattern; the résumé intentionally says `Canada` rather than inventing or exposing a city. The run also revealed that this parser relies heavily on vertical gaps and separate degree/school lines, which informed the final print spacing and education markup.

OpenResume's structured field mapping is a diagnostic, not an acceptance gate. Its parser is intentionally simple and can group entries differently from commercial systems even when the underlying text is complete and linear.

## Representative job-description review

The base résumé was reviewed against two role profiles current on the audit date. Full third-party job descriptions are not committed.

### React, TypeScript, and Node.js profile

Source: [Basedash — Senior Full Stack Engineer](https://www.basedash.com/careers/senior-full-stack-engineer)

Documented matches include React, TypeScript, Node.js, PostgreSQL, end-to-end delivery, user-facing products, technical direction, and cross-functional product work. AI agents, retrieval systems, and early-stage founder experience are not documented and must not be added without evidence.

### Java/Spring and cloud profile

Source: [Cognizant — Senior Full Stack Engineer](https://careers.cognizant.com/ca-en/jobs/00069441594/senior-full-stack-engineer-javaangularnodejs/)

Documented matches include Java, Spring Boot, Node.js, microservices, REST APIs, AWS, Docker, Kubernetes, CI/CD, automated testing, and architecture work. Current Angular, Azure, OpenShift, and Copilot experience are not documented and must not be added merely to improve a match score.

## Local Resume Matcher check and workflow

Resume Matcher release `1.2.0` was cloned at commit `830bafd0cd2bbb4f105b58127d0a86e112b1de0f` and run from a temporary directory with local Ollama and `gemma3:4b`. The official registry references for `ghcr.io/srbhr/resume-matcher:1.2` and `:1.2.0` returned `not found` on the audit date, so no mutable `latest` image was substituted.

The release's PDF parser successfully extracted the regenerated résumé: 4,434 characters and all 12 checked markers, including the identity, email, four major headings, Pearson, Fairstone, HMH, React, TypeScript, and Spring Boot. The full LLM structuring pass was started locally but exceeded the practical wait window on CPU and was stopped before it produced a tailored output. It therefore provides no score or recommendation to act on.

For a future local run:

1. Regenerate and validate the base résumé with `pnpm resume:generate`.
2. Clone the `1.2.0` release commit (or use a verified immutable container digest if the publisher provides one).
3. Configure only `LLM_PROVIDER=ollama`, `LLM_MODEL=gemma3:4b`, and `LLM_API_BASE=http://localhost:11434`.
4. Upload the generated PDF and paste one real job description at a time.
5. Record matched requirements, missing requirements, and proposed wording; do not use the numerical score as a release gate.
6. Accept a suggestion only when it is supported by `resume.ts` or other verifiable work evidence. Save the tailored copy outside the public portfolio unless it is intentionally replacing the base résumé.

For each future application, retain the company, role, source URL, access date, accepted suggestions, rejected suggestions, and reason for each rejection.
