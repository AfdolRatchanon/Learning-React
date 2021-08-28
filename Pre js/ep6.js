//Rest Parameter
/*
summation = (x, y, z) => {
   return x + y + z;
};
*/

summation = (...numberArr) => {
   let total = 0;
   for (let num of numberArr) total += num;
   return total;
};

console.log(summation(50, 100, 50));
console.log(summation(50, 100, 50, 100, 50));
