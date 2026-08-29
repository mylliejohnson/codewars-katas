function multiples(a, b, limit) {
  let result = []

  for (i = 1; i <= limit; i++){
    if (i % a == 0 && i % b == 0){
      result.push(i)
    }
  }
  
  return result

}
