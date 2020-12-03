function findLongestWord(string = '') {
  // Write code under this line 
    let array = string.split(" ");
    let longestWord = array[0];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        };
    };
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// function findLongestWord(string = '') {
//   // Write code under this line
//   let words = string.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }



// function findLongestWord (string = "") {
//     // Write code under this line
//     return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// };