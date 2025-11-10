# UX Flows

## Emergency Flow (Chat → Call Bridge)
\`\`\`mermaid
flowchart TD
  A[Landing on any page] --> B{Emergency?}
  B -- Yes --> C[Sticky CTA: Call Now / Call Me Now]
  C -->|Call Now| D[Dial tel: link]
  C -->|Call Me Now| E[Collect name/phone/ZIP via chat]
  E --> F[Twilio: call customer]
  F --> G[Twilio dials on-call tech]
  G --> H[Bridge both calls]
  H --> I[SMS confirmation + ETA + tech name]
  B -- No --> J[Read service info / FAQ]
  J --> K[Request estimate or schedule window]
\`\`\`

## Non‑Emergency Lead Flow
\`\`\`mermaid
flowchart TD
  L[Service Page] --> M[Process & Trust blocks]
  M --> N[FAQ / Guides]
  N --> O[Form submit]
  O --> P[CRM + Email + Slack alert]
  P --> Q[Follow-up call within time window]
\`\`\`

## Spanish Parity Flow
- Language toggle persists locale across routes.
- Chat triage and IVR available in Spanish.
- Hreflang links between EN/ES pages.
