function calc(a, b) {
  let sum1 = a + b;
  sum2 = a + b;
  return sum1;
}

console.log(calc(20, 30)); // 50


var calc1 = function(a, b) {
  return a+b;
}

function calc2(func) {
  console.log(func(20,30));
}

console.log(calc1(20,30));
calc2(calc1);

// 배열원소로 함수 선언.
let funcArr = [function() {console.log("v1")},"v2"];

// 맵원소로 함수 선언.
let mapArr = new Map();
mapArr.set("calcFunc",function(n1,n2) {return n1*n2});

console.log(funcArr[0]());
console.log(mapArr.get("calcFunc")(20,10));