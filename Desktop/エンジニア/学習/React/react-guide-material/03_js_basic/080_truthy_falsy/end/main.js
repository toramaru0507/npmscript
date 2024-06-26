// POINT truthyとfalsyについて
// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* POINT falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
// console.log(result);

const falsy = 0;
const truthy = 1;
// console.log(Boolean(truthy));
// console.log(Boolean(falsy));

// 論理積 (&&) について　falsyの値を左から返す、なければ一番右の値を返す
const resultA = "" && "foo";
const resultB = 2 && 1 && 0 && 3;
const resultC = "foo" && 4;

console.log(resultA);
console.log(resultB);
console.log(resultC);

// 理論和 (||) について truthyの値を左から返す、なければ一番右の値を返す
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

console.log(resultD);
console.log(resultE);
console.log(resultF);
