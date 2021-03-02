let input = 'Hi, Humans'


const vowels = ['a','e','i','o','u']

let resultArray = []

for (i = 0; i < input.length; i++){
  // console.log(input[i]);
  for (j = 0; j < vowels.length; j++){
   if (input[i] === input[j])
   resultArray.push(vowels[j])
}
  if ((input[i] === 'e') || (input[i] === 'u')) {
    resultArray.push(input[i])
} 
}


console.log(resultArray.join('').toUpperCase());