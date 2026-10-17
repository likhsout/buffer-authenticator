import { describe, it, expect } from 'vitest';
import { getBrandInfo } from '../../src/utils/brand-icons';

describe('getBrandInfo', () => {
  it('returns official brand info for popular tech services', () => {
    const google = getBrandInfo('Google');
    expect(google.svg).toBeDefined();
    expect(google.label).toBe('G');

    const github = getBrandInfo('GitHub');
    expect(github.svg).toContain('M12 2C6.477');

    const discord = getBrandInfo('Discord');
    expect(discord.color).toBe('#5865F2');

    const steam = getBrandInfo('Steam');
    expect(steam.svg).toBeDefined();

    const binance = getBrandInfo('Binance');
    expect(binance.color).toBe('#F0B90B');

    const instagram = getBrandInfo('Instagram');
    expect(instagram.label).toBe('IG');
    expect(instagram.svg).toContain('rx="5.5"');

    const snapchat = getBrandInfo('Snapchat');
    expect(snapchat.label).toBe('SC');
    expect(snapchat.color).toBe('#FFFC00');

    const teamviewer = getBrandInfo('TeamViewer');
    expect(teamviewer.label).toBe('TV');
    expect(teamviewer.color).toBe('#0E70EB');
    expect(teamviewer.svg).toContain('circle');

    // Crucial bugfix check: TeamViewer with Gmail login must NOT resolve to Google
    const teamviewerGmail = getBrandInfo('TeamViewer', 'myaccount@gmail.com');
    expect(teamviewerGmail.label).toBe('TV');
    expect(teamviewerGmail.color).toBe('#0E70EB');

    // Other services with Gmail logins must resolve to their own brand
    const githubGmail = getBrandInfo('GitHub', 'developer@gmail.com');
    expect(githubGmail.label).toBe('GH');

    const discordGmail = getBrandInfo('Discord', 'gamer@gmail.com');
    expect(discordGmail.label).toBe('DC');

    const steamGmail = getBrandInfo('Steam', 'player@gmail.com');
    expect(steamGmail.label).toBe('STM');

    // Dual parameter resolution: issuer empty, account contains service
    const instaAccount = getBrandInfo('', 'user@instagram.com');
    expect(instaAccount.label).toBe('IG');
    expect(instaAccount.svg).toBeDefined();

    // Single parameter email detection:
    const gmailAccount = getBrandInfo('', 'user@gmail.com');
    expect(gmailAccount.label).toBe('G');

    // Colon formatted account resolution:
    const prefixedAccount = getBrandInfo(undefined, 'TeamViewer:alice@gmail.com');
    expect(prefixedAccount.label).toBe('TV');

    // New brand checks:
    const yahoo = getBrandInfo('Yahoo');
    expect(yahoo.label).toBe('Y!');

    const slack = getBrandInfo('Slack');
    expect(slack.label).toBe('SL');

    const docker = getBrandInfo('Docker');
    expect(docker.label).toBe('DK');

    const digitalOcean = getBrandInfo('DigitalOcean');
    expect(digitalOcean.label).toBe('DO');
  });

  it('prevents substring collisions on word boundaries', () => {
    // Lawson should NOT match AWS
    const lawson = getBrandInfo('Lawson Logistics');
    expect(lawson.label).toBe('LA');
    expect(lawson.svg).toBeUndefined();

    // Mainstream should NOT match Steam
    const mainstream = getBrandInfo('Mainstream Media');
    expect(mainstream.label).toBe('MA');
    expect(mainstream.svg).toBeUndefined();

    // Schubert should NOT match Uber
    const schubert = getBrandInfo('Schubert Systems');
    expect(schubert.label).toBe('SC');
    expect(schubert.svg).toBeUndefined();

    // Airbnb has its own official brand icon, not Binance (bnb)
    const airbnb = getBrandInfo('Airbnb');
    expect(airbnb.label).toBe('AB');
    expect(airbnb.color).toBe('#FF385C');
  });

  it('handles fallback for unknown issuers gracefully without leaking account email', () => {
    const fallback = getBrandInfo('Custom Corporate VPN');
    expect(fallback.label).toBe('CU');
    expect(fallback.bg).toContain('hsl(');
    expect(fallback.color).toContain('hsl(');

    // Custom issuer with gmail account must NOT turn into Google
    const customWithGmail = getBrandInfo('Custom Corporate VPN', 'employee@gmail.com');
    expect(customWithGmail.label).toBe('CU');
    expect(customWithGmail.svg).toBeUndefined();
  });

  it('handles empty or whitespace strings without error', () => {
    const fallback = getBrandInfo('');
    expect(fallback.label).toBe('2F');
    expect(fallback.bg).toBeDefined();
  });
});
