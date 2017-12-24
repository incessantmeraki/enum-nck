var test =require('tape')
var nck = require('./index.js')

test('first test', function (t) {
  var elements = [1,2,3,4,5]
  var output = nck(elements, 3)
  t.equal(output.length, nckVal(elements.length, 3))
  t.end()
})

test('second test', function (t) {
  var elements = ['rock', 'paper', 'scissors']
  var output = nck(elements,2)
  t.equal(output.length, nckVal(elements.length, 2))
  t.end()
})

function nckVal(n, k) {
  return factorial(n) / (factorial(k) * factorial(n-k))

  function factorial (n) {
    var result = 1
    for (let i = 1 ; i <= n; i++) {
      result = result * i
    }
    return result
  }
}
