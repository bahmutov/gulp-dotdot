var es = require('event-stream');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var transform = require('./node_modules/dotdot/src/dotdot');

module.exports = function() {
  var dotdotTransform = function(file, callback) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginError('gulp-dotdot', 'Streaming not supported'));

    if (file.contents instanceof Buffer) {
      file.contents = new Buffer(transform(String(file.contents)));
      return callback(null, file);
    }

    callback(null, file);
  };

  return es.map(dotdotTransform);
};