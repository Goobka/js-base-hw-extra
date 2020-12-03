const findBestEmployee = function (employees) {
    'use strict';
    Write code under this line
    let result = '';
    const entries = Object.entries(employees);
    let bestResult = entries[0][1];
    for (const entry of entries) {
        if (entry[1] >= bestResult) {
            bestResult = entry[1]; 
            result = entry[0];   
        }
    }
    return result;

}


    const developers = {
        ann: 990,
        david: 35,
        helen: 81,
        lorence: 99,
        greet: 10,
    };
    console.log(developers)
    console.log(findBestEmployee(developers));

