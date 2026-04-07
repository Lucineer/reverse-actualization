# reverse-actualization

You don't build the future by guessing forward. You build it by reasoning backwards from the version that is already waiting.

---

## Why this exists
Most planning starts from your current position, carrying forward existing assumptions. This service provides a structured alternative: begin from a defined future state and work backwards to identify the necessary preceding steps.

---

## Quick Start
1.  **Fork & Clone:** `gh repo fork Lucineer/reverse-actualization --clone`
2.  **Navigate:** `cd reverse-actualization`
3.  **Deploy:** `npx wrangler login && npx wrangler deploy`

Your private instance will be live in about 90 seconds.

## What this is
A methodology service for the Cocapn Fleet, implemented as a zero-dependency Cloudflare Worker. It provides a programmable pattern for reverse-actualization logic that agents can call.

### Implementation
*   **Single Function:** The core logic is a standalone function that processes a defined end state and returns a sequence of required prior steps.
*   **Fleet-Compatible:** Designed to be called by agents on the Cocapn runtime. It also functions as a standalone HTTP endpoint.
*   **No Dependencies:** One source file. Total deployed size is under 10KB.
*   **Template, Not Library:** This is a codebase to fork and modify, not a package to install.
*   **MIT Licensed:** Use it for any purpose.

## What makes this different
*   Output is a sequence of necessary prior conditions, not a probability-weighted forecast.
*   The logic focuses on necessity, not optimization.
*   It requires you to define a clear end state; it will not generate one for you.

## Limitation
The quality of the output path depends entirely on the clarity and specificity of the future state you provide. Vague goals produce vague steps.

---

## Try it
Call the public reference instance:
`https://the-fleet.casey-digennaro.workers.dev/actualize`

Send a POST request with a JSON body describing a future state. It will return a backwards path.

## Extend It
The service provides the structural pattern. You supply the context, domain knowledge, and integration with your data sources or agent workflows by modifying the core function.

## Contributing
Open an issue to discuss changes first. This project follows the Fleet's fork-first model.

---

MIT © Superinstance & Lucineer (DiGennaro et al.).

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> · <a href="https://cocapn.ai">Cocapn</a>
</div>