function highAndLow(numbers){
  let arr = numbers.split(" ").sort((a,b) => a - b)
  return String(arr[arr.length - 1] + " " + arr[0])
}
