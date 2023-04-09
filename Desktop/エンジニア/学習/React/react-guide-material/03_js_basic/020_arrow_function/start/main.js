//通常関数
// function fn(number) {
//   return number * 2;
// }

// 無名関数
const fn = function(number) {
  return number * 2;
}
console.log(fn(2));
// アロー関数
const fnArrow = (number) => {
  return number * 2;
}
console.log(fnArrow(3));

// 引数一つ()を省略できる
const fnArrow2 = number => {
  return number * 2;
}
console.log(fnArrow2(4));

// 本文が1行の場合、{}とreturnを省略できる。
const fnArrow3 = number => number * 2;
console.log(fnArrow3(5));
// 上記のように記述を簡略化できる。
