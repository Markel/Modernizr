/*!
{
  "name": "Page Visibility API",
  "property": "pagevisibility",
  "caniuse": "pagevisibility",
  "tags": ["performance"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API"
  }, {
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/2011/WD-page-visibility-20110602/"
  }, {
    "name": "HTML5 Rocks Tutorial",
    "href": "https://www.html5rocks.com/en/tutorials/pagevisibility/intro/"
  }],
  "polyfills": ["visibilityjs", "visiblyjs", "jquery-visibility"]
}
!*/
/* DOC
Detects support for the Page Visibility API, which can be used to disable unnecessary actions and otherwise improve user experience.
*/
import Modernizr from '../src/Modernizr.js';
import prefixed from '../src/prefixed.js';
import _globalThis from '../src/globalThis.js';

Modernizr.addTest('pagevisibility', !!prefixed('hidden', _globalThis.document, false));

export default Modernizr.pagevisibility
