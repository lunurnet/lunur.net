/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

jest.dontMock('fs');

/**
 * Navbar tests
 */
describe('button', () => {
  beforeEach(() => {
    // Load the html locally
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // Reset modules for next test
    jest.resetModules();
  });

  describe('element/style', () => {
    test('buttons should all exist', () => {
      expect(document.getElementById('navbarBtnToggleMobile')).toBeTruthy();
    });
    test('navbar should be closed by default', () => {
      expect(document.getElementById('mobileMenu').classList.contains('hidden')).toBe(true);
    });
  });
  
  describe('behavior', () => {
    test('navbar should display/hide after button is clicked', async () => {
      const { toggleNavbar } = require('../src/scripts.js'); // allows button to function properly
      const toggleBtn = document.getElementById('navbarBtnToggleMobile');
      const mobileMenu = document.getElementById('mobileMenu');
      // open and close mobile menu
      toggleBtn.click();
      expect(mobileMenu.classList.contains('hidden')).toBe(false);
      toggleBtn.click();
      expect(mobileMenu.classList.contains('hidden')).toBe(true);
    });
  });
});
