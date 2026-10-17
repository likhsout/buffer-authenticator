/**
 * Brand SVG Icon Resolver for Buffer Authenticator
 * Bundles lightweight, optimized offline SVGs for popular online services
 */

export interface BrandInfo {
  bg: string;
  color: string;
  label: string;
  svg?: string;
}

interface BrandDefinition {
  id: string;
  info: BrandInfo;
  matchName: (norm: string) => boolean;
  domains?: string[];
}

const BRANDS: BrandDefinition[] = [
  // 1. Google / Gmail
  {
    id: 'google',
    info: {
      bg: '#1a2332',
      color: '#4285F4',
      label: 'G',
      svg: `<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,
    },
    matchName: (n) => /\b(google|gmail|gsuite|googlemail)\b/.test(n),
    domains: ['google.com', 'gmail.com', 'googlemail.com'],
  },

  // 2. GitHub
  {
    id: 'github',
    info: {
      bg: '#24292e',
      color: '#ffffff',
      label: 'GH',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    },
    matchName: (n) => /\bgithub\b/.test(n),
    domains: ['github.com'],
  },

  // 3. Instagram
  {
    id: 'instagram',
    info: {
      bg: '#331326',
      color: '#E1306C',
      label: 'IG',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="#E1306C" stroke="none"/></svg>`,
    },
    matchName: (n) => /\b(instagram|insta)\b/.test(n),
    domains: ['instagram.com'],
  },

  // 4. Snapchat
  {
    id: 'snapchat',
    info: {
      bg: '#333008',
      color: '#FFFC00',
      label: 'SC',
      svg: `<svg viewBox="0 0 24 24" fill="#FFFC00"><path d="M12.001 2.5c-3.3 0-5.5 2.45-5.5 5.73 0 1.08.22 2.37.52 3.13-.57.22-1.32.55-1.67 1.1-.37.6-.25 1.38.29 1.66.47.24 1.23.08 1.82-.12.2.96.85 2.2 1.99 2.9-.57.24-1.28.46-1.75.92-.51.51-.38 1.35.08 1.57 1.15.56 3.18.28 4.2-.3 1 .58 3.04.86 4.19.3.46-.22.59-1.06.08-1.57-.46-.46-1.17-.68-1.74-.92 1.13-.7 1.78-1.94 1.99-2.9.59.2 1.35.36 1.82.12.54-.28.66-1.06.29-1.65-.36-.56-1.11-.88-1.68-1.11.3-.75.53-2.05.53-3.13 0-3.28-2.16-5.73-5.48-5.73z"/></svg>`,
    },
    matchName: (n) => /\b(snapchat|snap chat)\b/.test(n),
    domains: ['snapchat.com'],
  },

  // 5. TeamViewer
  {
    id: 'teamviewer',
    info: {
      bg: '#0a2444',
      color: '#0E70EB',
      label: 'TV',
      svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.5" fill="#0E70EB"/><path d="M7 12h10 M14 9l3 3-3 3 M10 9l-3 3 3 3" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    matchName: (n) => /\b(teamviewer|team viewer)\b/.test(n),
    domains: ['teamviewer.com'],
  },

  // 6. TikTok
  {
    id: 'tiktok',
    info: {
      bg: '#161920',
      color: '#25F4EE',
      label: 'TT',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.895c.386 0 .753.076 1.09.213V9.453A6.335 6.335 0 0 0 9.07 9.17 6.34 6.34 0 1 0 15.41 15.51V8.65a8.21 8.21 0 0 0 4.179 1.135V6.686z"/></svg>`,
    },
    matchName: (n) => /\b(tiktok|tik tok)\b/.test(n),
    domains: ['tiktok.com'],
  },

  // 7. WhatsApp
  {
    id: 'whatsapp',
    info: {
      bg: '#102d1e',
      color: '#25D366',
      label: 'WA',
      svg: `<svg viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.61.26 1.08.42 1.45.54.61.19 1.16.17 1.6-.08.49-.28 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/></svg>`,
    },
    matchName: (n) => /\b(whatsapp|whats app)\b/.test(n),
    domains: ['whatsapp.com'],
  },

  // 8. Discord
  {
    id: 'discord',
    info: {
      bg: '#2c2f48',
      color: '#5865F2',
      label: 'DC',
      svg: `<svg viewBox="0 0 24 24" fill="#5865F2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    },
    matchName: (n) => /\bdiscord\b/.test(n),
    domains: ['discord.com', 'discordapp.com'],
  },

  // 9. Microsoft / Outlook / Office365 / Azure
  {
    id: 'microsoft',
    info: {
      bg: '#182538',
      color: '#00a4ef',
      label: 'MS',
      svg: `<svg viewBox="0 0 24 24"><path fill="#f25022" d="M2 2h9v9H2z"/><path fill="#7fba00" d="M13 2h9v9h-9z"/><path fill="#00a4ef" d="M2 13h9v9H2z"/><path fill="#ffb900" d="M13 13h9v9h-9z"/></svg>`,
    },
    matchName: (n) => /\b(microsoft|outlook|office365|office 365|azure|hotmail|msft)\b/.test(n),
    domains: ['microsoft.com', 'outlook.com', 'hotmail.com', 'live.com', 'office.com', 'azure.com'],
  },

  // 10. Amazon / AWS
  {
    id: 'amazon',
    info: {
      bg: '#2d2218',
      color: '#FF9900',
      label: 'AWS',
      svg: `<svg viewBox="0 0 24 24" fill="#FF9900"><path d="M13.91 10.94c0-.98-.67-1.46-1.78-1.46-.86 0-1.57.34-2.14.93l-1.07-1.3c.88-.91 2.01-1.38 3.39-1.38 2.21 0 3.53 1.15 3.53 3.16v4.61h-1.83v-.93c-.66.7-1.55 1.08-2.58 1.08-1.78 0-2.93-1.08-2.93-2.61 0-1.71 1.33-2.58 3.56-2.73l1.85-.12v-.25zm0 1.48l-1.55.1c-1.37.09-2.09.52-2.09 1.38 0 .76.62 1.25 1.57 1.25.99 0 1.76-.51 2.07-1.32v-1.41zM21.57 18.25c-5.74 3.73-13.68 3.73-19.14 0-.44-.3-.08-.75.38-.46 4.96 3.16 12.02 3.16 18.38 0 .5-.25.82.16.38.46zm-2.03-1.72c-.41-.53-1.36-.26-1.99-.12-.22.05-.28-.15-.1-.28 1.17-.83 2.5-1.08 2.81-.68.32.41-.12 1.83-1.12 2.82-.16.16-.32.07-.25-.13.2-.62.83-1.45.65-1.61z"/></svg>`,
    },
    matchName: (n) => /\b(amazon|aws)\b/.test(n),
    domains: ['amazon.com', 'aws.amazon.com'],
  },

  // 11. Steam / Valve
  {
    id: 'steam',
    info: {
      bg: '#1b2838',
      color: '#66c0f4',
      label: 'STM',
      svg: `<svg viewBox="0 0 24 24" fill="#66c0f4"><path d="M12 2a10 10 0 0 0-9.98 9.25l5.65 2.33a3.5 3.5 0 0 1 2.33-.93c.27 0 .53.03.78.1l2.58-3.75a4.5 4.5 0 1 1 4.64 6.88l-3.75 2.58a3.5 3.5 0 0 1-5.69 1.78l-5.32-2.2A10 10 0 1 0 12 2zm6 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-9.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`,
    },
    matchName: (n) => /\b(steam|valve|steampowered)\b/.test(n),
    domains: ['steampowered.com', 'valvesoftware.com', 'steamcommunity.com'],
  },

  // 12. Apple / iCloud
  {
    id: 'apple',
    info: {
      bg: '#252528',
      color: '#ffffff',
      label: 'APL',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.88-.93.04-2.03.62-2.67 1.38-.56.65-1.06 1.71-.93 2.76 1.03.08 2.07-.53 2.59-1.26z"/></svg>`,
    },
    matchName: (n) => /\b(apple|icloud)\b/.test(n),
    domains: ['apple.com', 'icloud.com'],
  },

  // 13. Reddit
  {
    id: 'reddit',
    info: {
      bg: '#331a14',
      color: '#FF4500',
      label: 'RD',
      svg: `<svg viewBox="0 0 24 24" fill="#FF4500"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm5.9 11.8c.1.2.1.4.1.6 0 2.5-3.1 4.5-6.9 4.5s-6.9-2-6.9-4.5c0-.2 0-.4.1-.6-.5-.4-.8-1-.8-1.6 0-1.3 1.1-2.4 2.4-2.4.6 0 1.2.3 1.6.7 1.1-.7 2.5-1.2 4.1-1.3l.8-3.7 2.6.6c.1-.5.6-.9 1.2-.9.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3c-.6 0-1.1-.4-1.3-.9l-2.1-.5-.6 3c1.6.1 3 .6 4.1 1.3.4-.4 1-.7 1.6-.7 1.3 0 2.4 1.1 2.4 2.4-.1.7-.4 1.2-.9 1.6zm-8.4-1.3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm5 0c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm-4.9 3.9c-.1-.1-.1-.3 0-.4.1-.1.3-.1.4 0 .8.8 2.2.8 3 0 .1-.1.3-.1.4 0 .1.1.1.3 0 .4-1 1-2.8 1-3.8 0z"/></svg>`,
    },
    matchName: (n) => /\breddit\b/.test(n),
    domains: ['reddit.com'],
  },

  // 14. Twitter / X
  {
    id: 'twitter',
    info: {
      bg: '#1b222d',
      color: '#ffffff',
      label: 'X',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    },
    matchName: (n) => n === 'x' || /\b(twitter|x\.com)\b/.test(n) || /^x\s|\sx\s|\sx$/.test(n),
    domains: ['twitter.com', 'x.com'],
  },

  // 15. Facebook / Meta
  {
    id: 'facebook',
    info: {
      bg: '#0c2e59',
      color: '#1877f2',
      label: 'FB',
      svg: `<svg viewBox="0 0 24 24" fill="#1877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    },
    matchName: (n) => /\b(facebook|meta)\b/.test(n),
    domains: ['facebook.com', 'meta.com'],
  },

  // 16. Binance
  {
    id: 'binance',
    info: {
      bg: '#2b2308',
      color: '#F0B90B',
      label: 'BNB',
      svg: `<svg viewBox="0 0 24 24" fill="#F0B90B"><path d="M16.624 13.92l2.715 2.715-7.34 7.34-7.339-7.34 2.715-2.715 4.624 4.624 4.626-4.624zm-4.625-10.92l7.34 7.34-2.715 2.715-4.625-4.624-4.625 4.624-2.715-2.715 7.34-7.34zm8.965 8.965l2.716 2.715-2.716 2.715-2.715-2.715 2.715-2.715zm-17.93 0l2.715 2.715-2.715 2.715-2.715-2.715 2.715-2.715zm8.965.986l1.729 1.729-1.729 1.729-1.729-1.729 1.729-1.729z"/></svg>`,
    },
    matchName: (n) => /\b(binance|bnb)\b/.test(n),
    domains: ['binance.com'],
  },

  // 17. Coinbase
  {
    id: 'coinbase',
    info: {
      bg: '#0b2247',
      color: '#0052FF',
      label: 'CB',
      svg: `<svg viewBox="0 0 24 24" fill="#0052FF"><circle cx="12" cy="12" r="10"/><rect x="8.5" y="8.5" width="7" height="7" rx="1.5" fill="#FFFFFF"/></svg>`,
    },
    matchName: (n) => /\bcoinbase\b/.test(n),
    domains: ['coinbase.com'],
  },

  // 18. Cloudflare
  {
    id: 'cloudflare',
    info: {
      bg: '#332014',
      color: '#F38020',
      label: 'CF',
      svg: `<svg viewBox="0 0 24 24" fill="#F38020"><path d="M18.3 12.2c-.3-1.8-1.7-3.1-3.5-3.3-.5-.1-1 0-1.4.2C12.7 7.7 11.1 7 9.4 7.3c-2 .3-3.6 1.9-3.9 3.9-.7.2-1.3.6-1.7 1.2-.6.8-.7 1.9-.3 2.8.4.9 1.2 1.5 2.2 1.6h12.5c1.4-.1 2.5-1.2 2.6-2.6 0-1-.5-2-1.4-2.5-.3.2-.8.4-1.1.5zm-5.7 4.2H5.7c-.6 0-1.1-.3-1.4-.7-.2-.5-.2-1.1.1-1.5.3-.4.8-.7 1.3-.7h.6v-.6c0-1.8 1.4-3.2 3.2-3.2 1.1 0 2.1.6 2.7 1.5l.3.5.6-.2c.4-.1.8-.2 1.2-.2 1.5 0 2.8 1.1 3 2.6l.1.6h.6c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3h-6.2z"/></svg>`,
    },
    matchName: (n) => /\bcloudflare\b/.test(n),
    domains: ['cloudflare.com'],
  },

  // 19. Twitch
  {
    id: 'twitch',
    info: {
      bg: '#271b38',
      color: '#9146FF',
      label: 'TW',
      svg: `<svg viewBox="0 0 24 24" fill="#9146FF"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0h1.714v5.143h-1.714zM2.5 2L1 6.286v13.714h5.143V22l3.428-2h3.429L22 11V2H2.5zm16.714 8.143l-2.571 2.571h-3.429l-2.143 2.143v-2.143H6.786V4.571h12.428v5.572z"/></svg>`,
    },
    matchName: (n) => /\btwitch\b/.test(n),
    domains: ['twitch.tv'],
  },

  // 20. OpenAI / ChatGPT
  {
    id: 'openai',
    info: {
      bg: '#123028',
      color: '#10A37F',
      label: 'AI',
      svg: `<svg viewBox="0 0 24 24" fill="#10A37F"><path d="M22.28 10.57a5.57 5.57 0 0 0-.47-4.48 5.67 5.67 0 0 0-4.73-2.82 5.56 5.56 0 0 0-4.08-1.83 5.65 5.65 0 0 0-5.37 3.86 5.58 5.58 0 0 0-3.62 2.63 5.67 5.67 0 0 0 .69 6.28 5.57 5.57 0 0 0 .47 4.48 5.67 5.67 0 0 0 4.73 2.82 5.56 5.56 0 0 0 4.08 1.83 5.65 5.65 0 0 0 5.37-3.86 5.58 5.58 0 0 0 3.62-2.63 5.67 5.67 0 0 0-.69-6.28zm-8.8 9.94a4.13 4.13 0 0 1-2.55-.89l.13-.07 4.22-2.44a.79.79 0 0 0 .39-.68v-5.94l1.78 1.03v5.44a4.16 4.16 0 0 1-4.01 3.55zM4.68 17.5a4.13 4.13 0 0 1-.5-2.65l.13.08 4.22 2.44a.77.77 0 0 0 .78 0l5.14-2.97v2.06l-4.71 2.72a4.16 4.16 0 0 1-5.06-1.68zm-1.1-7.94a4.15 4.15 0 0 1 2.05-1.76v5.03a.78.78 0 0 0 .39.68l5.14 2.97-1.78 1.03-4.71-2.72a4.16 4.16 0 0 1-1.09-5.23zm13.9 1.4l-5.14-2.97 1.78-1.03 4.71 2.72a4.16 4.16 0 0 1 1.09 5.23 4.15 4.15 0 0 1-2.05 1.76v-5.03a.78.78 0 0 0-.39-.68zm2.4 4.54l-.13-.08-4.22-2.44a.77.77 0 0 0-.78 0l-5.14 2.97v-2.06l4.71-2.72a4.16 4.16 0 0 1 5.06 1.68 4.13 4.13 0 0 1 .5 2.65zM10.5 12l2.36-1.36 2.36 1.36v2.73L12.86 16.1 10.5 14.73V12z"/></svg>`,
    },
    matchName: (n) => /\b(openai|chatgpt|chat gpt)\b/.test(n),
    domains: ['openai.com'],
  },

  // 21. Spotify
  {
    id: 'spotify',
    info: {
      bg: '#12301c',
      color: '#1DB954',
      label: 'SPF',
      svg: `<svg viewBox="0 0 24 24" fill="#1DB954"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 0 1-.277-1.215c3.807-.87 7.076-.496 9.712 1.115a.624.624 0 0 1 .207.856zm1.224-2.722a.78.78 0 0 1-1.073.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.458-1.491c3.633-1.103 8.147-.568 11.239 1.328a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.936.936 0 1 1-.55-1.791c3.535-1.073 9.404-.866 13.115 1.338a.936.936 0 0 1-.947 1.61z"/></svg>`,
    },
    matchName: (n) => /\bspotify\b/.test(n),
    domains: ['spotify.com'],
  },

  // 22. PayPal
  {
    id: 'paypal',
    info: {
      bg: '#0e2340',
      color: '#0079C1',
      label: 'PP',
      svg: `<svg viewBox="0 0 24 24" fill="#0079C1"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.894a.96.96 0 0 1 .947-.8h7.026c2.81 0 4.887.697 5.86 1.965.94 1.225.967 2.875.08 4.908-.946 2.167-2.686 3.7-5.176 4.557-1.173.404-2.528.608-4.032.608H7.95a.96.96 0 0 0-.948.803l-1.115 7.06a.64.64 0 0 0 .633.74l.556-.398z"/></svg>`,
    },
    matchName: (n) => /\b(paypal|pay pal)\b/.test(n),
    domains: ['paypal.com'],
  },

  // 23. GitLab
  {
    id: 'gitlab',
    info: {
      bg: '#331c12',
      color: '#FC6D26',
      label: 'GL',
      svg: `<svg viewBox="0 0 24 24"><path fill="#E24329" d="m12 21.42-3.87-11.9H15.87L12 21.42z"/><path fill="#FC6D26" d="M12 21.42 8.13 9.52H1.72L12 21.42z"/><path fill="#FCA326" d="M1.72 9.52l-.95 2.93c-.2.62.02 1.3.54 1.68L12 21.42 1.72 9.52z"/><path fill="#E24329" d="M1.72 9.52h6.41L5.68 1.96c-.24-.73-1.27-.73-1.5 0L1.72 9.52z"/><path fill="#FC6D26" d="M12 21.42l3.87-11.9h6.41L12 21.42z"/><path fill="#FCA326" d="m22.28 9.52.95 2.93c.2.62-.02 1.3-.54 1.68L12 21.42l10.28-11.9z"/><path fill="#E24329" d="M22.28 9.52h-6.41l2.45-7.56c.24-.73 1.27-.73 1.5 0l2.46 7.56z"/></svg>`,
    },
    matchName: (n) => /\bgitlab\b/.test(n),
    domains: ['gitlab.com'],
  },

  // 24. Dropbox
  {
    id: 'dropbox',
    info: {
      bg: '#10243d',
      color: '#0061FF',
      label: 'DBX',
      svg: `<svg viewBox="0 0 24 24" fill="#0061FF"><path d="M6.035 2L0 6.023l6.035 4.024 6.036-4.024L6.035 2zm11.93 0l-6.036 4.023 6.036 4.024 6.035-4.024L17.965 2zM0 14.07l6.035 4.024 6.036-4.024-6.036-4.023L0 14.07zm17.965-4.023l-6.036 4.023 6.036 4.024 6.035-4.024-6.035-4.023zM6.035 19.467L12 15.49l5.965 3.977L12 23.444l-5.965-3.977z"/></svg>`,
    },
    matchName: (n) => /\bdropbox\b/.test(n),
    domains: ['dropbox.com'],
  },

  // 25. Proton (Mail / VPN)
  {
    id: 'proton',
    info: {
      bg: '#211833',
      color: '#6D4AFF',
      label: 'PR',
      svg: `<svg viewBox="0 0 24 24" fill="#6D4AFF"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2V9.5z"/></svg>`,
    },
    matchName: (n) => /\b(proton|protonmail|protonvpn)\b/.test(n),
    domains: ['proton.me', 'protonmail.com'],
  },

  // 26. Notion
  {
    id: 'notion',
    info: {
      bg: '#252525',
      color: '#ffffff',
      label: 'N',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.093-.373L17.818 1.97c-.56-.42-1.307-.7-2.053-.653L2.733 2.296c-.466.047-.56.327-.373.513l2.099 1.399zm-.793 4.293v12.316c0 .793.42 1.073 1.26 1.026l14.288-.84c.84-.046.933-.56.933-1.12V7.754c0-.606-.233-.933-.793-.886l-14.894.886c-.56.046-.794.373-.794.747zm13.122.933c.093.42 0 .84-.42.886l-.793.14c-.373.047-.56-.14-.653-.513l-1.447-4.293h-1.54l-1.726 4.386c-.093.28-.28.42-.653.373l-.793-.14c-.42-.046-.513-.42-.373-.84l2.193-5.226c.14-.373.466-.606.886-.606h.98c.42 0 .746.233.886.606l2.453 5.227z"/></svg>`,
    },
    matchName: (n) => /\bnotion\b/.test(n),
    domains: ['notion.so'],
  },

  // 27. LinkedIn
  {
    id: 'linkedin',
    info: {
      bg: '#0a2540',
      color: '#0A66C2',
      label: 'IN',
      svg: `<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63z"/></svg>`,
    },
    matchName: (n) => /\blinkedin\b/.test(n),
    domains: ['linkedin.com'],
  },

  // 28. Telegram
  {
    id: 'telegram',
    info: {
      bg: '#142c40',
      color: '#24A1DE',
      label: 'TG',
      svg: `<svg viewBox="0 0 24 24" fill="#24A1DE"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`,
    },
    matchName: (n) => /\btelegram\b/.test(n),
    domains: ['telegram.org', 't.me'],
  },

  // 29. Bitwarden
  {
    id: 'bitwarden',
    info: {
      bg: '#0f2240',
      color: '#175DDC',
      label: 'BW',
      svg: `<svg viewBox="0 0 24 24" fill="#175DDC"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 3.3c2.6 0 4.7 2.1 4.7 4.7 0 2.2-1.5 4.1-3.6 4.6v3.2h-2.2v-3.2c-2.1-.5-3.6-2.4-3.6-4.6 0-2.6 2.1-4.7 4.7-4.7z"/></svg>`,
    },
    matchName: (n) => /\bbitwarden\b/.test(n),
    domains: ['bitwarden.com'],
  },

  // 30. 1Password
  {
    id: '1password',
    info: {
      bg: '#0b243d',
      color: '#0A85EA',
      label: '1P',
      svg: `<svg viewBox="0 0 24 24" fill="#0A85EA"><circle cx="12" cy="12" r="10"/><path d="M12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 3a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-5 0v-1a2.5 2.5 0 0 1 2.5-2.5z" fill="#FFFFFF"/></svg>`,
    },
    matchName: (n) => /\b(1password|onepassword)\b/.test(n),
    domains: ['1password.com'],
  },

  // 31. Epic Games
  {
    id: 'epic',
    info: {
      bg: '#1e1e24',
      color: '#FFFFFF',
      label: 'EPIC',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 2.5v19l8.5 2.5 8.5-2.5v-19l-8.5 2.5zm3.5 5.5h10v2.2h-7v2.4h6v2.2h-6v2.4h7v2.2H7z"/></svg>`,
    },
    matchName: (n) => /\b(epic|epicgames|epic games)\b/.test(n),
    domains: ['epicgames.com'],
  },

  // 32. Adobe
  {
    id: 'adobe',
    info: {
      bg: '#361214',
      color: '#FF0000',
      label: 'AD',
      svg: `<svg viewBox="0 0 24 24" fill="#FF0000"><path d="M13.96 2H24v20l-5.63-14.07zM10.04 2H0v20l5.63-14.07zM12 7.74l3.18 7.95h-2.67l-1.28-3.2h-2.1l2.87 7.51H9.41z"/></svg>`,
    },
    matchName: (n) => /\badobe\b/.test(n),
    domains: ['adobe.com'],
  },

  // 33. Zoom
  {
    id: 'zoom',
    info: {
      bg: '#102340',
      color: '#2D8CFF',
      label: 'ZM',
      svg: `<svg viewBox="0 0 24 24" fill="#2D8CFF"><path d="M4 6.5h11c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2zm14 2.5l4-3v12l-4-3V9z"/></svg>`,
    },
    matchName: (n) => /\bzoom\b/.test(n),
    domains: ['zoom.us', 'zoom.com'],
  },

  // 34. Salesforce
  {
    id: 'salesforce',
    info: {
      bg: '#0e2640',
      color: '#00A1E0',
      label: 'SF',
      svg: `<svg viewBox="0 0 24 24" fill="#00A1E0"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`,
    },
    matchName: (n) => /\bsalesforce\b/.test(n),
    domains: ['salesforce.com'],
  },

  // 35. Uber
  {
    id: 'uber',
    info: {
      bg: '#1e1e1e',
      color: '#FFFFFF',
      label: 'UB',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><rect x="8.5" y="8.5" width="7" height="7" rx="1" fill="#1e1e1e"/><rect x="9.5" y="11" width="5" height="2" fill="currentColor"/></svg>`,
    },
    matchName: (n) => /\buber\b/.test(n),
    domains: ['uber.com'],
  },

  // 36. Stripe
  {
    id: 'stripe',
    info: {
      bg: '#1c1e38',
      color: '#635BFF',
      label: 'ST',
      svg: `<svg viewBox="0 0 24 24" fill="#635BFF"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 16.14.4 13.976.4 8.796.4 5.3 3.12 5.3 7.424c0 4.304 3.496 5.86 6.848 6.993 2.122.718 2.87 1.353 2.87 2.302 0 .976-.879 1.488-2.316 1.488-2.164 0-4.99-.988-6.942-2.074l-.94 5.58c1.942.87 4.542 1.387 7.02 1.387 5.485 0 9.16-2.613 9.16-7.142 0-4.084-3.136-5.882-7.024-6.808z"/></svg>`,
    },
    matchName: (n) => /\bstripe\b/.test(n),
    domains: ['stripe.com'],
  },

  // 37. Yahoo
  {
    id: 'yahoo',
    info: {
      bg: '#24103a',
      color: '#6001d2',
      label: 'Y!',
      svg: `<svg viewBox="0 0 24 24" fill="#6001d2"><path d="M12 14.5l-4.5-9.5h2.6l2.9 6.7 2.9-6.7h2.6L14 14.5V20h-2v-5.5z"/><circle cx="18" cy="18" r="1.5" fill="#6001d2"/></svg>`,
    },
    matchName: (n) => /\b(yahoo|ymail)\b/.test(n),
    domains: ['yahoo.com', 'ymail.com', 'myyahoo.com'],
  },

  // 38. Slack
  {
    id: 'slack',
    info: {
      bg: '#261427',
      color: '#ECB22E',
      label: 'SL',
      svg: `<svg viewBox="0 0 24 24"><path fill="#E01E5A" d="M5.04 14.77a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 1 1 5.04 0v6.3a2.52 2.52 0 1 1-5.04 0v-6.3z"/><path fill="#36C5F0" d="M9.23 5.04a2.52 2.52 0 1 1-2.52-2.52v2.52h2.52zm0 1.26a2.52 2.52 0 1 1 0 5.04H2.93a2.52 2.52 0 1 1 0-5.04h6.3z"/><path fill="#2EB67D" d="M18.96 9.23a2.52 2.52 0 1 1 2.52 2.52h-2.52V9.23zm-1.26 0a2.52 2.52 0 1 1-5.04 0V2.93a2.52 2.52 0 1 1 5.04 0v6.3z"/><path fill="#ECB22E" d="M14.77 18.96a2.52 2.52 0 1 1 2.52 2.52v-2.52h-2.52zm0-1.26a2.52 2.52 0 1 1 0-5.04h6.3a2.52 2.52 0 1 1 0 5.04h-6.3z"/></svg>`,
    },
    matchName: (n) => /\bslack\b/.test(n),
    domains: ['slack.com'],
  },

  // 39. DigitalOcean
  {
    id: 'digitalocean',
    info: {
      bg: '#0b2447',
      color: '#0080FF',
      label: 'DO',
      svg: `<svg viewBox="0 0 24 24" fill="#0080FF"><path d="M12.04 0C5.41 0 .04 5.37.04 12c0 4.72 2.73 8.81 6.69 10.74l-.04-3.13c-2.45-1.57-4.08-4.32-4.08-7.46 0-4.88 3.96-8.84 8.84-8.84 4.88 0 8.84 3.96 8.84 8.84 0 4.88-3.96 8.84-8.84 8.84v2.79c6.43 0 11.64-5.21 11.64-11.63C23.09 5.37 18.12 0 12.04 0zM12.04 17.5v-4.66h-4.66v4.66h4.66zm-4.66 4.66H4.25v-3.13h3.13v3.13zm6.2-1.53h-1.54v1.53h1.54v-1.53z"/></svg>`,
    },
    matchName: (n) => /\bdigitalocean\b/.test(n),
    domains: ['digitalocean.com'],
  },

  // 40. Docker
  {
    id: 'docker',
    info: {
      bg: '#0b2447',
      color: '#1D63ED',
      label: 'DK',
      svg: `<svg viewBox="0 0 24 24" fill="#1D63ED"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185m21.758.983c-.31-.205-.88-.34-1.428-.352-.164-.004-.326 0-.482.016-.252-.403-.633-.717-1.107-.9-.81-.31-1.74-.24-2.45.17-.41.24-.76.57-1.02.97-.23.36-.37.76-.41 1.18-.73-.08-1.5-.08-2.26 0-.25-.42-.64-.75-1.12-.96-.81-.36-1.75-.3-2.48.14-.38.23-.7.54-.93.92H.317c-.175 0-.317.14-.317.317v.342c0 2.22.84 4.35 2.34 5.92 1.63 1.7 3.86 2.66 6.18 2.66 6.35 0 11.53-4.57 12.39-10.74.8-.08 1.5-.47 1.95-1.09.28-.39.43-.86.43-1.34 0-.4-.11-.79-.31-1.12z"/></svg>`,
    },
    matchName: (n) => /\bdocker\b/.test(n),
    domains: ['docker.com', 'docker.io'],
  },

  // 41. Battle.net / Blizzard
  {
    id: 'battlenet',
    info: {
      bg: '#0d2238',
      color: '#00AEFF',
      label: 'BN',
      svg: `<svg viewBox="0 0 24 24" fill="#00AEFF"><path d="M12 2L1 21h22L12 2zm0 4.2L19.2 19H4.8L12 6.2zm-1.5 5.3v4h3v-4h-3z"/></svg>`,
    },
    matchName: (n) => /\b(battle\.net|battlenet|blizzard)\b/.test(n),
    domains: ['battle.net', 'blizzard.com'],
  },

  // 42. Riot Games
  {
    id: 'riot',
    info: {
      bg: '#2d1416',
      color: '#EB0029',
      label: 'RG',
      svg: `<svg viewBox="0 0 24 24" fill="#EB0029"><path d="M13.447 2L2 9.07l2.843 8.358L7.88 16.27l-.986-2.88 4.743-1.603.987 2.895 3.037-1.157L22 7.82 13.447 2zm.895 15.654l-5.61 2.128 1.47 4.218 5.61-2.128-1.47-4.218z"/></svg>`,
    },
    matchName: (n) => /\b(riot games|riotgames|riot)\b/.test(n),
    domains: ['riotgames.com'],
  },

  // 43. Nintendo
  {
    id: 'nintendo',
    info: {
      bg: '#351114',
      color: '#E60012',
      label: 'NIN',
      svg: `<svg viewBox="0 0 24 24" fill="#E60012"><rect x="2" y="5" width="20" height="14" rx="7" fill="none" stroke="#E60012" stroke-width="2.2"/><circle cx="7.5" cy="12" r="2.5" fill="#E60012"/><circle cx="16.5" cy="12" r="2.5" fill="#E60012"/></svg>`,
    },
    matchName: (n) => /\bnintendo\b/.test(n),
    domains: ['nintendo.com', 'nintendo.net'],
  },

  // 44. PlayStation / Sony
  {
    id: 'playstation',
    info: {
      bg: '#0b1e38',
      color: '#003791',
      label: 'PS',
      svg: `<svg viewBox="0 0 24 24" fill="#003791"><path d="M8.568 2.378c-.628-.235-1.278.01-1.45.548L4.62 10.457c-.172.538.196 1.09.824 1.233l2.494.57 1.625-5.08 2.05.467c.758.173 1.223.79 1.037 1.373-.186.582-.888.894-1.646.721l-1.464-.334-.73 2.28 2.193.5c1.942.443 3.738-.344 4.216-1.84.478-1.494-.658-3.076-2.6-3.52l-4.045-.922zM1.05 17.653c-.01.077 0 .153.03.226.113.272.484.467 1.048.552l6.23 1.42 1.343-2.07-4.285-.976c-.958-.218-1.488-.135-1.782.164-.294.3-.46.568-.584.684zm11.39-2.597l-1.343 2.07 6.23 1.42c.564.085.935-.11 1.048-.382.03-.073.04-.149.03-.226-.124-.116-.29-.384-.584-.684-.294-.299-.824-.382-1.782-.164l-3.599.82zM12 12.3c-.63 0-1.14.51-1.14 1.14v3.42l2.28-.52v-2.9c0-.63-.51-1.14-1.14-1.14z"/></svg>`,
    },
    matchName: (n) => /\b(playstation|psn|sony)\b/.test(n),
    domains: ['playstation.com', 'sony.com'],
  },

  // 45. Atlassian / Bitbucket / Jira
  {
    id: 'atlassian',
    info: {
      bg: '#0c2244',
      color: '#0052CC',
      label: 'AT',
      svg: `<svg viewBox="0 0 24 24" fill="#0052CC"><path d="M11.66 12.37a8.7 8.7 0 0 0-4.14-4.85c-1.8-1-3.6-1.1-4.84-.73a.85.85 0 0 0-.58.85v7.65a.86.86 0 0 0 .86.86h7.65a.85.85 0 0 0 .85-.85c.2-1.03 0-2.05.2-2.93zm.68-1.28c.19.88.01 1.9.21 2.93a.85.85 0 0 0 .85.85h7.65a.86.86 0 0 0 .86-.86V6.36a.85.85 0 0 0-.58-.85c-1.24-.37-3.04-.27-4.84.73a8.7 8.7 0 0 0-4.15 4.85z"/></svg>`,
    },
    matchName: (n) => /\b(atlassian|bitbucket|jira|trello)\b/.test(n),
    domains: ['atlassian.com', 'bitbucket.org', 'jira.com', 'trello.com'],
  },

  // 46. Airbnb
  {
    id: 'airbnb',
    info: {
      bg: '#33121b',
      color: '#FF385C',
      label: 'AB',
      svg: `<svg viewBox="0 0 24 24" fill="#FF385C"><path d="M12 0C5.37 0 0 5.37 0 12c0 2.92 1.05 5.6 2.8 7.68l.24.28C5.3 22.42 8.44 24 12 24s6.7-1.58 8.96-4.04l.24-.28C22.95 17.6 24 14.92 24 12c0-6.63-5.37-12-12-12zm0 4c2.2 0 4 1.8 4 4 0 2.4-1.6 4.7-3.2 6.5-.4.5-.8.9-1.2 1.3-.1.1-.3.2-.4.3l-.4-.3c-.4-.4-.8-.8-1.2-1.3C8 12.7 6.4 10.4 6.4 8c0-2.2 1.8-4 4-4zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>`,
    },
    matchName: (n) => /\bairbnb\b/.test(n),
    domains: ['airbnb.com'],
  },
];

/**
 * Checks if an issuer string is generic/empty
 */
function isGenericIssuer(name: string): boolean {
  const n = name.trim().toLowerCase();
  return (
    !n ||
    n === 'account' ||
    n === '2fa' ||
    n === 'totp' ||
    n === 'hotp' ||
    n === 'otp' ||
    n === 'authenticator' ||
    n === 'default' ||
    n === 'none' ||
    n === 'unknown'
  );
}

/**
 * Creates a deterministic, harmonious fallback avatar
 */
function createFallback(primaryName: string): BrandInfo {
  let hash = 0;
  for (let i = 0; i < primaryName.length; i++) {
    hash = primaryName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  const initials = (primaryName.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2) || '2F').toUpperCase();

  return {
    bg: `hsl(${hue}, 40%, 18%)`,
    color: `hsl(${hue}, 85%, 75%)`,
    label: initials,
  };
}

/**
 * Main brand resolver function:
 * Priority:
 * 1. Explicit, non-generic Issuer (e.g. "TeamViewer", "GitHub", "Google", "Custom VPN")
 *    - If issuer matches a known brand, return brand immediately.
 *    - If issuer is a specific custom service, return fallback for that service.
 *      Never leak the user's personal email domain (e.g. @gmail.com) onto a custom issuer!
 * 2. If Issuer is empty or generic:
 *    - If Account is an email, check against known brand domains (e.g. @gmail.com -> Google, @instagram.com -> Instagram).
 *    - Check Account text against brand matchers (e.g. "Discord - user").
 * 3. Fallback initials.
 */
export function getBrandInfo(issuerOrAccount?: string, account?: string): BrandInfo {
  let rawIssuer = (issuerOrAccount || '').trim();
  let rawAccount = (account || '').trim();

  // If issuer is empty and account has "Issuer: Account" or "Issuer - Account"
  if (!rawIssuer && rawAccount) {
    if (rawAccount.includes(':')) {
      const parts = rawAccount.split(':');
      rawIssuer = parts[0].trim();
      rawAccount = parts.slice(1).join(':').trim();
    } else if (rawAccount.includes(' - ')) {
      const parts = rawAccount.split(' - ');
      rawIssuer = parts[0].trim();
      rawAccount = parts.slice(1).join(' - ').trim();
    }
  }

  // If account is empty and issuer has "Issuer: Account" or "Issuer - Account"
  if (rawIssuer && !rawAccount) {
    if (rawIssuer.includes(':')) {
      const parts = rawIssuer.split(':');
      rawIssuer = parts[0].trim();
      rawAccount = parts.slice(1).join(':').trim();
    } else if (rawIssuer.includes(' - ')) {
      const parts = rawIssuer.split(' - ');
      rawIssuer = parts[0].trim();
      rawAccount = parts.slice(1).join(' - ').trim();
    }
  }

  // If only one param was passed and it is an email address, treat it as the account
  if (rawIssuer.includes('@') && !rawAccount) {
    rawAccount = rawIssuer;
    rawIssuer = '';
  }

  // Determine fallback primary label name
  const primaryName = (!isGenericIssuer(rawIssuer) ? rawIssuer : rawAccount) || '2F';

  // 1. Check Issuer First:
  if (!isGenericIssuer(rawIssuer)) {
    const normIssuer = rawIssuer.toLowerCase().replace(/[-_.]/g, ' ');
    for (const brand of BRANDS) {
      if (brand.matchName(normIssuer)) {
        return brand.info;
      }
    }

    // Specific issuer provided, but not in our catalog:
    // Retain its own distinct initials & color rather than falsely matching account email domain!
    return createFallback(primaryName);
  }

  // 2. Issuer is empty or generic; inspect account:
  // Check email domain first:
  if (rawAccount.includes('@')) {
    const domain = rawAccount.split('@')[1]?.toLowerCase().trim();
    if (domain) {
      for (const brand of BRANDS) {
        if (brand.domains && brand.domains.some((d) => domain === d || domain.endsWith('.' + d))) {
          return brand.info;
        }
      }
    }
  }

  // Check account name:
  if (rawAccount) {
    const normAccount = rawAccount.toLowerCase().replace(/[-_.]/g, ' ');
    for (const brand of BRANDS) {
      if (brand.matchName(normAccount)) {
        return brand.info;
      }
    }
  }

  // 3. Fallback
  return createFallback(primaryName);
}
