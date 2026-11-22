/**
 * ═══════════════════════════════════════════════════════
 *  ZINJECTRA — Cloudflare Worker
 *  Ticket & Application Endpoint → Discord Webhook
 * ═══════════════════════════════════════════════════════
 *
 *  Environment variables required (set via Cloudflare / .dev.vars):
 *    DISCORD_WEBHOOK_URL  — Your private Discord webhook URL
 *    ALLOWED_ORIGIN       — Your website origin, e.g. https://zinjectra.dev
 *
 *  Endpoint: POST /api/submit
 * ═══════════════════════════════════════════════════════
 */

export default {
  async fetch(request, env) {
    const ALLOWED_ORIGIN = env.ALLOWED_ORIGIN || '*';

    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (request.method !== 'POST') {
      return jsonResponse(405, { error: 'Method not allowed.' }, corsHeaders);
    }

    // Accept root or /api/submit
    if (url.pathname !== '/' && url.pathname !== '/api/submit') {
      return jsonResponse(404, { error: 'Not found.' }, corsHeaders);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse(400, { error: 'Invalid JSON body.' }, corsHeaders);
    }

    const { type } = body;
    const webhookUrl = env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL is not configured.');
      return jsonResponse(500, { error: 'Server configuration error.' }, corsHeaders);
    }

    // Helper to sanitize code fences and mentions
    const sanitize = (str) => {
      if (!str || typeof str !== 'string') return '';
      return str
        .trim()
        .replace(/```/g, "'''")
        .replace(/@everyone/gi, '[@everyone]')
        .replace(/@here/gi, '[@here]')
        .replace(/<@[!&]?\d+>/g, '[mention]')
        .replace(/<@&\d+>/g, '[role]');
    };

    const timestamp = new Date().toISOString();
    let discordPayload = null;

    /* ───────────────────────────────────────────────────
       TYPE: TICKET
       ─────────────────────────────────────────────────── */
    if (type === 'ticket') {
      const { name, discord, subject, category, message } = body;
      const errors = [];

      if (!name || typeof name !== 'string' || !name.trim()) errors.push('Name is required.');
      else if (name.trim().length > 100) errors.push('Name must be under 100 chars.');

      if (!discord || typeof discord !== 'string' || !discord.trim()) errors.push('Discord username is required.');
      else if (discord.trim().length > 100) errors.push('Discord username must be under 100 chars.');

      if (!subject || typeof subject !== 'string' || !subject.trim()) errors.push('Subject is required.');
      else if (subject.trim().length > 200) errors.push('Subject must be under 200 chars.');

      if (!category || typeof category !== 'string' || !category.trim()) errors.push('Category is required.');

      if (!message || typeof message !== 'string' || message.trim().length < 10) errors.push('Message must be at least 10 chars.');
      else if (message.trim().length > 2000) errors.push('Message must be under 2000 chars.');

      if (errors.length) {
        return jsonResponse(400, { error: errors.join(' ') }, corsHeaders);
      }

      const safeName = sanitize(name);
      const safeDiscord = sanitize(discord);
      const safeSubject = sanitize(subject);
      const safeCategory = sanitize(category);
      let safeMessage = sanitize(message);
      if (safeMessage.length > 1000) {
        safeMessage = safeMessage.slice(0, 997) + '...';
      }

      discordPayload = {
        content: null,
        embeds: [
          {
            title: safeSubject,
            description: "A new support ticket has been submitted through the official website.",
            color: 9109504,
            fields: [
              {
                name: "SUBMITTED BY",
                value: `\`\`\`${safeName}\`\`\``,
                inline: true
              },
              {
                name: "DISCORD USERNAME",
                value: `\`\`\`${safeDiscord}\`\`\``,
                inline: true
              },
              {
                name: "CATEGORY",
                value: `\`\`\`${safeCategory}\`\`\``
              },
              {
                name: "MESSAGE",
                value: `\`\`\`${safeMessage}\`\`\``
              }
            ],
            author: {
              name: "ZINJECTRA / SUPPORT SYSTEM"
            },
            footer: {
              text: "ZINJECTRA SUPPORT • AUTOMATED TICKET SYSTEM"
            },
            timestamp: timestamp
          }
        ],
        username: "Zinjectra Support",
        attachments: [],
        allowed_mentions: {
          parse: []
        }
      };

    /* ───────────────────────────────────────────────────
       TYPE: APPLICATION
       ─────────────────────────────────────────────────── */
    } else if (type === 'application') {
      const { name, discord, category, experience, reason, portfolio } = body;
      const errors = [];

      if (!name || typeof name !== 'string' || !name.trim()) errors.push('Name is required.');
      else if (name.trim().length > 100) errors.push('Name must be under 100 chars.');

      if (!discord || typeof discord !== 'string' || !discord.trim()) errors.push('Discord username is required.');
      else if (discord.trim().length > 100) errors.push('Discord username must be under 100 chars.');

      if (!category || typeof category !== 'string' || !category.trim()) errors.push('Application category is required.');

      if (!experience || typeof experience !== 'string' || experience.trim().length < 10) errors.push('Experience/intro must be at least 10 chars.');
      else if (experience.trim().length > 2000) errors.push('Experience must be under 2000 chars.');

      if (!reason || typeof reason !== 'string' || reason.trim().length < 10) errors.push('Reason must be at least 10 chars.');
      else if (reason.trim().length > 1500) errors.push('Reason must be under 1500 chars.');

      if (errors.length) {
        return jsonResponse(400, { error: errors.join(' ') }, corsHeaders);
      }

      const safeName = sanitize(name);
      const safeDiscord = sanitize(discord);
      const safeCategory = sanitize(category);
      let safeExperience = sanitize(experience);
      if (safeExperience.length > 1000) safeExperience = safeExperience.slice(0, 997) + '...';

      let safeReason = sanitize(reason);
      if (safeReason.length > 1000) safeReason = safeReason.slice(0, 997) + '...';

      const safePortfolio = portfolio && typeof portfolio === 'string' && portfolio.trim()
        ? sanitize(portfolio)
        : 'Not provided';

      discordPayload = {
        content: null,
        embeds: [
          {
            title: `NEW APPLICATION — ${safeCategory}`,
            description: "A new application has been submitted through the official Zinjectra website.",
            color: 9109504,
            fields: [
              {
                name: "APPLICANT",
                value: `\`\`\`${safeName}\`\`\``,
                inline: true
              },
              {
                name: "DISCORD USERNAME",
                value: `\`\`\`${safeDiscord}\`\`\``,
                inline: true
              },
              {
                name: "APPLICATION CATEGORY",
                value: `\`\`\`${safeCategory}\`\`\``
              },
              {
                name: "EXPERIENCE / INTRODUCTION",
                value: safeExperience
              },
              {
                name: "REASON FOR APPLYING",
                value: safeReason
              },
              {
                name: "PORTFOLIO",
                value: safePortfolio
              }
            ],
            author: {
              name: "ZINJECTRA / APPLICATION SYSTEM"
            },
            footer: {
              text: "ZINJECTRA APPLICATIONS • AUTOMATED SYSTEM"
            },
            timestamp: timestamp
          }
        ],
        username: "Zinjectra Applications",
        attachments: [],
        allowed_mentions: {
          parse: []
        }
      };

    } else {
      return jsonResponse(400, { error: "Invalid submission type. Expected 'ticket' or 'application'." }, corsHeaders);
    }

    // Send payload to Discord
    try {
      const discordRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload),
      });

      if (!discordRes.ok) {
        const errText = await discordRes.text().catch(() => 'Unknown error');
        console.error(`Discord API error (${discordRes.status}): ${errText}`);
        return jsonResponse(502, { error: 'Failed to deliver to Discord. Please check webhook configuration.' }, corsHeaders);
      }
    } catch (err) {
      console.error('Discord fetch error:', err.message);
      return jsonResponse(502, { error: 'Connection error while contacting Discord.' }, corsHeaders);
    }

    return jsonResponse(200, {
      success: true,
      message: type === 'ticket'
        ? 'Your support ticket has been transmitted successfully.'
        : 'Your application has been transmitted successfully.'
    }, corsHeaders);
  }
};

function jsonResponse(status, body, corsHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}
