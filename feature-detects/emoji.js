/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
/* DOC
Detects support for emoji character sets.
*/
import Modernizr from '../src/Modernizr.js';
import createElement from '../src/createElement.js';
import canvastext from './canvastext.js';

Modernizr.addTest('emoji', function() {
  if (!canvastext) {
    return false;
  }
  var node = createElement('canvas');
  var ctx = node.getContext('2d');
  var backingStoreRatio =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;
  var offset = 12 * backingStoreRatio;
  ctx.fillStyle = '#f00';
  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText('\ud83d\udc28', 0, 0); // U+1F428 KOALA
  return ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
});

export default Modernizr.emoji
