function perfectSquare(num) {
 
  const sqrt = Math.sqrt(num);
  

  if (Number.isInteger(sqrt)) {
   
    return Math.pow(sqrt + 1, 2);
  } else {
   
    return -1;
  }
}