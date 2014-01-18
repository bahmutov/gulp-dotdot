# gulp-dotdot

> Gulp plugin for transforming foo..bar(...) notation to foo.bar.bind(foo, ...)

[![NPM][gulp-dotdot-icon] ][gulp-dotdot-url]

[![Build status][gulp-dotdot-ci-image] ][gulp-dotdot-ci-url]
[![dependencies][gulp-dotdot-dependencies-image] ][gulp-dotdot-dependencies-url]
[![devdependencies][gulp-dotdot-devdependencies-image] ][gulp-dotdot-devdependencies-url]

[gulp-dotdot-icon]: https://nodei.co/npm/gulp-dotdot.png?downloads=true
[gulp-dotdot-url]: https://npmjs.org/package/gulp-dotdot
[gulp-dotdot-ci-image]: https://travis-ci.org/bahmutov/gulp-dotdot.png?branch=master
[gulp-dotdot-ci-url]: https://travis-ci.org/bahmutov/gulp-dotdot
[gulp-dotdot-dependencies-image]: https://david-dm.org/bahmutov/gulp-dotdot.png
[gulp-dotdot-dependencies-url]: https://david-dm.org/bahmutov/gulp-dotdot
[gulp-dotdot-devdependencies-image]: https://david-dm.org/bahmutov/gulp-dotdot/dev-status.png
[gulp-dotdot-devdependencies-url]: https://david-dm.org/bahmutov/gulp-dotdot#info=devDependencies

Transforms `..` syntax to standard JavaScript using [dotdot](https://github.com/bahmutov/dotdot)
so it can be inspected / processed by other plugins, mainly
[gulp-jshint](https://github.com/wearefractal/gulp-jshint).

## install

```
npm install --save-dev gulp-dotdot
```

## use

### example.js

```js
var foo = {
    n: 101,
    print: function () {
        console.log(n);
    }
};
var printN = foo..print();
```

### gulpfile.js

```js
var gulp = require('gulp')
var jshint = require('gulp-jshint')
var dotdot = require('../..');

gulp.task('lint', function() {
  gulp.src('example.js')
    .pipe(dotdot())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
```

`gulp` now works fine, jshint parses valid ES5 syntax

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/gulp-dotdot/issues) on Github


## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.



