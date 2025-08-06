# AI Tooling Docs Hub

**AI Tooling Docs Hub** is a centralized documentation portal designed to explore, explain, and demonstrate advanced usage of AI tools such as ChatGPT, LangChain, GitHub Copilot, Postman, and ReDoc. Built with [Docusaurus](https://docusaurus.io/), it serves as a living knowledge base for AI-driven content workflows, automation patterns, and prompt engineering techniques.

This site is intended for technical writers, developers, researchers, and educators seeking to integrate large language models and automation tooling into their daily work.

---

## 🚀 Features

- Modular static site built with Docusaurus v2
- Live-editing development server for rapid iteration
- Markdown-based content authoring with versioning and sidebar navigation
- CI/CD-ready deployment setup (supports GitHub Pages)
- Future extensibility for OpenAPI docs, prompt galleries, and tool integrations

---

## 📦 Installation

To install dependencies:

```
yarn
```

Ensure Node.js (>=16) and Yarn are installed in your environment.

---

## 🧪 Local Development

To start a local dev server:

```
yarn start
```

This launches a hot-reloading server at `http://localhost:3000`. Edits to `.md` or `.mdx` files are reflected live without requiring restarts.

---

## 🏗️ Build

To generate the static site:

```
yarn build
```

The output is generated in the `/build` directory and can be hosted via any static hosting service (e.g., GitHub Pages, Netlify, Vercel).

---

## 🚀 Deployment

### Using SSH:

```
USE_SSH=true yarn deploy
```

### Without SSH (HTTPS):

```
GIT_USER=<your-github-username> yarn deploy
```

This command builds the site and pushes it to the `gh-pages` branch. Ideal for GitHub Pages hosting.

> 💡 Ensure the GitHub repo is configured to serve from the `gh-pages` branch under repository settings.

---

## 📚 Content Scope (Coming Soon)

- AI Prompting Patterns
- LLM Workflow Architectures
- API Documentation with ReDoc & Postman
- LangChain Pipelines
- GitHub Copilot Recipes
- AI-Augmented DocOps Practices

---

## 🧠 Author

**Athar Kharal, PhD** — Technical Documentation Specialist | AI Workflow Strategist  
[LinkedIn](https://www.linkedin.com/in/atharkharal) | [GitHub](https://github.com/<your-username>) | [Portfolio](https://<your-portfolio-site>)

---

## 📝 License

MIT — use freely, attribute respectfully.

