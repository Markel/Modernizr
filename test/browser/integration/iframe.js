describe('iframe context', function() {

  this.timeout(20000);
  var iframeWindow;
  var $iframe;

  before(function(done) {
    var url = './iframe.html?id=modernizrIframeContext';
    $iframe = $('<iframe>');

    $(document.body).append($iframe);

    $iframe
      .css({
        'height': 10,
        'width': 10,
        'position': 'absolute',
        'top': 0,
        'left': 0
      })
      .attr({
        'src': url,
        'id': 'modernizrIframeContext'
      })
      .on('lockedAndLoaded', function() {
        iframeWindow = $(this)[0].contentWindow;
        done();
      });
  });

  it('is able to be loaded in an iframe', function(done) {
    iframeWindow.$.getScript('../test/test-build.js')
      .done(function(build, status) {
        expect(status).to.be.equal('success');
        expect(iframeWindow.Modernizr).to.not.be.equal(undefined);
        done();
      })
      .fail(function(ajaxResponse, errorType, err) {
        if (err && err.message) {
          expect(err.message).to.be.equal(undefined);
        } else {
          expect(errorType).to.be.equal(undefined);
        }
        done();
      });
  });

  after(function() {
    $iframe.remove();
    iframeWindow = $iframe = undefined;
  });
});
