[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]

# utf8array2str

> Uint8Array convert to string.


## Install


### Local

npm:

```sh
$ npm install --save utf8array2str
```

yarn:

```sh
$ yarn add utf8array2str
```

### Global

npm:

```sh
$ npm install -g utf8array2str
```

yarn:

```sh
$ yarn add global utf8array2str
```


### Browser

```html
<script src="utf8Array2Str.js"></script>
```


## Usage

#### Using commonjs

```js
const utf8Array2Str = require('utf8array2str');

utf8Array2Str(new Uint8Array([104, 101, 108, 108, 111]));
// => hello
```

#### Using es6 or typescript

```js
import utf8Array2Str from 'utf8array2str';

utf8Array2Str(new Uint8Array([104, 101, 108, 108, 111]));
// => hello
```

#### Using global

```html
<script>
	utf8Array2Str(new Uint8Array([104, 101, 108, 108, 111]));
    // => hello
</script>
```

## License

[MIT © PorkyKe](./LICENSE)

[npm]: https://img.shields.io/npm/v/utf8array2str.svg
[npm-url]: https://npmjs.com/package/utf8array2str
[node]: https://img.shields.io/node/v/utf8array2str.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=utf8array2str
[size-url]: https://packagephobia.now.sh/result?p=utf8array2str
