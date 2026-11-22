# Cloudflare Worker — Deployment Guide

This guide explains how to deploy the serverless ticket endpoint that securely forwards support tickets to your Discord server.

---

## Prerequisites

1. A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier is fine).
2. [Node.js](https://nodejs.org/) v18 or later installed.
3. A Discord webhook URL for the channel where you want tickets delivered.

---

## Step 1 — Install Wrangler

```bash
npm install -g wrangler
```

## Step 2 — Authenticate

```bash
wrangler login
```

This opens a browser window for Cloudflare authentication.

## Step 3 — Configure Your Origin

Open `wrangler.toml` and uncomment the `[vars]` section. Set `ALLOWED_ORIGIN` to your deployed website's origin:

```toml
[vars]
ALLOWED_ORIGIN = "https://zinjectra.dev"
```

> **Important:** Use only the origin (scheme + domain), not a full path.

## Step 4 — Set the Discord Webhook Secret

```bash
cd worker
wrangler secret put DISCORD_WEBHOOK_URL
```

Paste your Discord webhook URL when prompted. This is stored securely in Cloudflare and **never** appears in source code or logs.

> **Never** commit, paste, or share your webhook URL in any public file.

## Step 5 — Deploy

```bash
wrangler deploy
```

Wrangler will output the worker URL, for example:

```
https://zinjectra-ticket-worker.<your-subdomain>.workers.dev
```

## Step 6 — Connect the Frontend

Open `config.js` in the root of your website and set the `endpoint` value inside `contact`:

```js
contact: {
  endpoint: 'https://zinjectra-ticket-worker.<your-subdomain>.workers.dev',
  // ...
},
```

## Step 7 — Test

1. Open your website.
2. Navigate to the Contact section.
3. Fill out and submit a ticket.
4. Verify the embed appears in your Discord channel.

---

## How It Works

```
User fills form  →  Frontend sends POST to Worker
                     ↓
                 Worker validates fields
                 Worker strips @mentions
                 Worker builds Discord embed
                 Worker sends embed to webhook
                     ↓
                 Discord channel receives embed
```

- The webhook URL is stored as a Cloudflare secret — it is never sent to the browser.
- CORS is restricted to your configured origin.
- Spam protection: honeypot field + timing check on the frontend, field validation on the worker.
- Discord mentions (`@everyone`, `@here`, `<@id>`) are stripped to prevent abuse.

---

## Updating the Webhook

```bash
cd worker
wrangler secret put DISCORD_WEBHOOK_URL
```

Paste the new URL when prompted. The change takes effect immediately — no redeployment needed.

---

## Deleting the Worker

```bash
wrangler delete
```

---

## Troubleshooting

| Issue | Solution |
|---|---|
| "Server configuration error" | `DISCORD_WEBHOOK_URL` is not set. Run `wrangler secret put`. |
| CORS errors in browser | Ensure `ALLOWED_ORIGIN` in `wrangler.toml` matches your site's origin exactly. |
| "Failed to deliver ticket" | Your Discord webhook may be invalid or the channel may have been deleted. Create a new webhook and update the secret. |
| Form says "not configured" | The `endpoint` in `config.js` is empty. Add your worker URL. |
