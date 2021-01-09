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


const getSortedUniqueSkills = array =>
  array
    .reduce((usersSkills, item) => [...usersSkills, ...item.skills], [])
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .sort();


// const getSortedUniqueSkills = array =>
//   array
//     .reduce((usersSkills, item) => {
//       user.skills.forEach(skill => {
//         if (!usersSkills.includes(skill)) {
//           usersSkills.push(skill);
//        }
//      })
//       return usersSkills;
//     }, []).sort();
