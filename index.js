var es = require('event-stream');
var transform = require('./node_modules/dotdot/src/dotdot');

module.exports = function() {
  var dotdotTransform = function(file, callback) {
    var isStream = file.contents &&
      typeof file.contents.on === 'function' &&
      typeof file.contents.pipe === 'function';
    if (isStream) {
      throw new Error('dotdot: stream replacement is not supported');
    }

    if (file.contents instanceof Buffer) {
      file.contents = new Buffer(transform(String(file.contents)));
      return callback(null, file);
    }

    callback(null, file);
  };

  return es.map(dotdotTransform);
};