// Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// Слияние массивов:

// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

let allTags = tweets.reduce(function(tags, tweet) { tags.push(...tweet.tags); return tags; }, []);

console.log(allTags);

console.log(allTags.filter((tag,index,allTags) => allTags.indexOf(tag) === index));


// const getSortedUniqueSkills = array =>
//   array
//     .reduce((usersSkills, item) => [...usersSkills, ...item.skills], [])
//     .filter((skill, index, arr) => arr.indexOf(skill) === index)
//     .sort();
