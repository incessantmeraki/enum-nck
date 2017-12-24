# enum-nck
generates all possible subsets with size k from given array

[![Build Status](https://travis-ci.org/incessantmeraki/enum-nck.svg?branch=master)](https://travis-ci.org/incessantmeraki/enum-nck)

## Usage

### Example

```js
  //generate all 2 members team from 3 players 

  var nck = require('enum-nck')
  
  var arr = ['alice', 'bob', 'eve']

  var result = nck(arr, 2) 
  console.log(result)
```

### API

#### ` require('enum-nck')(arr, choose)`
returns an array containing all possible selections of size choose from elements in array arr

## License

MIT
