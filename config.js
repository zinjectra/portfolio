/**
 * ═══════════════════════════════════════════════════════
 *  ZINJECTRA — Configuration
 * ═══════════════════════════════════════════════════════
 *  Edit this file to personalize the website.
 *  NEVER place webhook URLs or API keys here.
 * ═══════════════════════════════════════════════════════
 */
const CONFIG = {
  identity: {
    displayName: 'Zinjectra',
    username:    '@Zinjectra',
    biography:   'Building things at the intersection of code and design.',
    biographySub:'Interested in crafting digital experiences that feel intentional and refined.',
    characterImg:'assets/images/character.png',
    labels:      ['Developer', 'Designer'],
  },
  meta: {
    siteTitle:       'Zinjectra',
    siteDescription: 'Personal digital identity of Zinjectra — developer and designer.',
    siteUrl:         'https://zinjectra.dev',
    ogImage:         '',
    themeColor:      '#000000',
  },
  background: {
    image: '',  // e.g. 'assets/images/bg.jpg' — VHS/analog horror background
  },
  about: {
    heading: 'About Me',
    paragraphs: [
      "I'm Zinjectra — a self-driven developer and designer exploring the digital space. I enjoy building things from scratch, understanding how systems work, and making interfaces that feel polished and intentional.",
      "My interests span web development, UI/UX design, creative coding, and Discord ecosystem development. I care about the details — clean code, thoughtful design, and experiences that feel like someone actually considered every pixel.",
      "I'm always learning, always experimenting, and always looking for ways to push what I can create.",
    ],
  },
  skills: [
    { name: 'Web Development',     icon: 'code'       },
    { name: 'UI / UX Design',      icon: 'palette'    },
    { name: 'JavaScript',          icon: 'javascript' },
    { name: 'HTML & CSS',          icon: 'html'       },
    { name: 'Python',              icon: 'python'     },
    { name: 'Discord Development', icon: 'discord'    },
    { name: 'Creative Coding',     icon: 'sparkles'   },
    { name: 'Digital Design',      icon: 'palette'    },
  ],
  projects: [],
  socials: [
    { platform: 'Discord',  url: 'https://discord.com/users/1436818061616222238',                             icon: 'discord',  copyValue: '' },
    { platform: 'GitHub',   url: '',                             icon: 'github'   },
    { platform: 'guns.lol', url: 'https://guns.lol/zinjectra',  icon: 'link'     },
  ],
  contact: {
    // Cloudflare Worker endpoint — deploy worker/ and paste URL here
    endpoint: 'https://zinjectra-ticket-worker.zinjectra.workers.dev',
  },
  footer: {
    text: '© {year} Zinjectra. All rights reserved.',
  },
};
