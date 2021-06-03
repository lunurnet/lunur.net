/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

jest.dontMock('fs');

const hashElements = [
  { id: 'anchorAbout', hash: '#about' },
  { id: 'anchorWorks', hash: '#works' },
  { id: 'anchorContact', hash: '#contact' },
  { id: 'anchorAboutMobile', hash: '#about' },
  { id: 'anchorWorksMobile', hash: '#works' },
  { id: 'anchorContactMobile', hash: '#contact' },
  { id: 'anchorWorksHero', hash: '#works' },
  { id: 'anchorContactHero', hash: '#contact' },
  { id: 'anchorTellUs', hash: '#contact' },
  { id: 'anchorAstronaut', hash: '#top' },
];

const hrefElements = [
  { id: 'anchorLogo', href: 'http://localhost/' },
  { id: 'anchorGithubNaek', href: 'https://github.com/naek2k' },
  { id: 'anchorLinkedinNaek', href: 'https://linkedin.com/in/naek' },
  { id: 'anchorWebsiteNaek', href: 'https://naek.ca/' },
  { id: 'anchorGithubVinh', href: 'https://github.com/vinhvn' },
  { id: 'anchorLinkedinVinh', href: 'https://linkedin.com/in/vinhvn' },
  { id: 'anchorWebsiteVinh', href: 'https://vincentnguyen.ca/' },
  { id: 'anchorGithubAdrian', href: 'https://github.com/adrian-alexander' },
  { id: 'anchorLinkedinAdrian', href: 'https://linkedin.com/in/adrian-alexander' },
  { id: 'anchorWebsiteAdrian', href: 'https://adrian-alexander.ca/' },
  { id: 'anchorGithubKyle', href: 'https://github.com/kylepoirier' },
  { id: 'anchorLinkedinKyle', href: 'https://linkedin.com/in/kylepoirierszekely/' },
  { id: 'anchorMail', href: 'mailto:naek@lunur.net' },
]

// Mock window location
const oldWindowLocation = window.location

/**
* Anchor tests (a tags, href)
*/
describe('links', () => {
  beforeEach(() => {
    // Load the html locally
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // Reset modules for next test
    jest.resetModules();
  });

  beforeAll(() => {
    delete window.location
  
    window.location = Object.defineProperties(
      {},
      {
        ...Object.getOwnPropertyDescriptors(oldWindowLocation),
        assign: {
          configurable: true,
          value: jest.fn(),
        },
      },
    )
  });

  afterAll(() => {
    // restore window.location to the original jsdom location object
    window.location = oldWindowLocation
  });

  describe('element/style', () => {
    test('a tags should all exist', () => {
      for (const elem of hashElements) {
        expect(document.getElementById(elem.id)).toBeTruthy();
      }
      for (const elem of hrefElements) {
        expect(document.getElementById(elem.id)).toBeTruthy();
      }
    });
  });
  
  describe('behavior', () => {
    test('hash anchor tags should have correct hashes', async () => {
      for (const elem of hashElements) {
        expect(document.getElementById(elem.id).hash).toBe(elem.hash);
      }
    });

    test('href anchor tags should have correct hrefs', async () => {
      for (const elem of hrefElements) {
        expect(document.getElementById(elem.id).href).toBe(elem.href);
      }
    });
  });
});
 