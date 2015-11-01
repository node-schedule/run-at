
# at.js

[![NPM](https://nodei.co/npm/run-at.png?downloads=true)](https://nodei.co/npm/run-at/)

execute function "at" a certain time.

uses [date] for human-friendly date parsing.

## Installation

```shell
npm install run-at
```

## Usage

```javascript
var at = require('run-at')
```

## Examples

```javascript
at('5:30 am', fn)
at('2 days from now', fn)
at('noon today', fn)
at('2 pm tuesday', fn)
```

## License

MIT

[date]: https://github.com/matthewmueller/date
