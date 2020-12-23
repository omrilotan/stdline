# stdline [![](https://img.shields.io/npm/v/stdline.svg)](https://www.npmjs.com/package/stdline) [![](https://img.shields.io/badge/source--000000.svg?logo=github&style=social)](https://github.com/omrilotan/stdline)

## 💬 Update current STDOUT stream

![](https://user-images.githubusercontent.com/516342/96769099-576bfc80-13e7-11eb-92f6-75988a5bbde2.gif)


Work on current line
```js
const {
	update,
	end,
} = require('stdline');

console.log('processing:');
...

update('Got an update for you');
...
end('Finished!');
```

Clear screen
```js
const { clear } = require('stdline');

clear();
```

Wipe screen
```js
const { wipe } = require('stdline');

wipe();
```