# reverse-actualization
Reverse Actualization — a methodology service for structured, backward reasoning. A template for the Cocapn Fleet.

---

## Why this exists
Most planning tools project forward from the present, mapping multiple possible paths. This provides a different approach: you define the end state you intend to reach, and the service walks backward to identify the strictly required prior conditions. It returns a sequence of necessary steps, not suggestions.

---

## What it provides
*   **A fork-first template.** You clone or fork the repository—you own your copy. No one can push breaking changes to your instance.
*   **A single, editable function.** The core backward-reasoning logic is contained in one function in `src/index.js`. You modify it with your domain rules. There is no hidden logic.
*   **A standalone HTTP endpoint.** It's a web service that returns JSON. Any agent or tool can call it.
*   **Zero dependencies.** The entire service is one source file. It deploys in about a minute to Cloudflare's global network.

---

## Current Limitation
This is a structural template, not a complete reasoning engine. You must define the specific logic for how your end state decomposes into prior steps. The provided function is a minimal example.

---

## Quick Start
1.  **Fork the repository.**
2.  **Deploy with Wrangler:** Run `npx wrangler login` and `npx wrangler deploy`.
3.  **Edit the function.** Modify the `deriveRequiredSteps` function in `src/index.js` with your own rules.

Your private instance will be live at your own Worker URL. The entire process takes about a minute.

A public reference instance is available for testing:
**`https://reverse-actualization.casey-digennaro.workers.dev`**

Send a `POST` request with a JSON body containing a `targetState`. It is rate-limited for fair use.

---

## Key Features
- **Backward-Reasoning Pattern:** Starts from a defined end state and surfaces required preceding conditions.
- **Sub-10KB Deployment:** The deployed Worker script is minimal, with cold starts typically under 5ms.
- **Fleet-Native:** Any agent on the Cocapn Fleet can call your instance without extra configuration.
- **Necessity-Focused:** Designed to return required steps, not probabilistic forecasts or optional advice.

---

## Use It Your Way
This template provides the HTTP structure and the backward-reasoning pattern. You supply the domain knowledge, context, and step definitions. Modify the core function to make it work for your specific use case.

## Contributing
Open an issue to discuss potential changes. This project follows the Cocapn Fleet's fork-first contribution model.

---

MIT © Superinstance & Lucineer (DiGennaro et al.).

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> · <a href="https://cocapn.ai">Cocapn</a>
</div>