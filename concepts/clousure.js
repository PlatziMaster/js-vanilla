const sum = (a) => {
    return (b) => {
        return (c) => {
            return (a * b) + c;
        };
    };
}
console.log(sum(2)(5)(2));

// const funcA = (a) => {
//     return funcB;
// }

// const funcB = (b) => {
//     return funcC;
// }

// const funcC = (c) => {
//     return (a * b) + c;
// }



// const multiple = (a, b) => {
//     return  a * b;
// }

// const funcA = sum(2);
// console.log(funcA);
// console.log(typeof(funcA));
 // 12