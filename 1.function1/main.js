function reverseString(message){
  let splitArr = message.split('');
  return splitArr.reverse().join('');
}
reverseString('hello'); // should return 'olleh'
