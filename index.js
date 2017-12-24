module.exports = function (arr, choose) {
  var output = []
  var result = []
  nck(0, choose)
  return output 

  function nck(index, nleft) {
    if (nleft === 0){
      output.push([].concat(result))
      return
    }

    if (nleft > arr.length - index) 
      return

    result.push(arr[index])
    nck(index+1, nleft -1)
    result.pop()

    nck(index+1, nleft)
  }
}

