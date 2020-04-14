/*!
{
  "name": "ES6 Array",
  "property": "es6array",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
    "href": "https://web.archive.org/web/20180825202128/https://tc39.github.io/ecma262/"
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
/* DOC
Check if browser implements ECMAScript 6 Array per specification.
*/
import Modernizr from '../../src/Modernizr.js';

Modernizr.addTest('es6array', !!(Array.prototype &&
  Array.prototype.copyWithin &&
  Array.prototype.fill &&
  Array.prototype.find &&
  Array.prototype.findIndex &&
  Array.prototype.keys &&
  Array.prototype.entries &&
  Array.prototype.values &&
  Array.from &&
  Array.of));

export default Modernizr.es6array
