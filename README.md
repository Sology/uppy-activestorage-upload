# uppy-activestorage-upload

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

The ActiveStorage Upload plugin handles Ruby on Rails ActiveStorage direct uploads with Uppy.

## Example

```js
const Uppy = require('@uppy/core')
const ActiveStorageUpload = require('uppy-activestorage-upload')

const uppy = Uppy()
uppy.use(ActiveStorageUpload, {
  directUploadUrl: ... // Rails' active storage direct upload path obtained i.e. via `Rails.app.routes.url_helpers.rails_direct_uploads_path`
})
```

## Installation

```bash
$ npm install uppy-activestorage-upload --save
```

We recommend installing from npm and then using a module bundler such as [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/) or [Rollup.js](http://rollupjs.org/).

## License

[The MIT License](./LICENSE).
