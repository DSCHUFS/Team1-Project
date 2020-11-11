var txt1 = 'text1';
console.log(txt1);

if (true) {
  var txt2 = 'text2';
  console.log(txt2);
}

console.log(txt1);
console.log(txt2);

let txt1_1 = 'text1_1';
const txt3 = 'hello';
console.log(txt1_1);

if (true) {
  let txt2_2 = 'text2_2';
  console.log(txt2_2);
}

console.log(txt1_1);
//console.log(txt2_2);  //error
//txt3 = 'world'; //error
console.log(txt3);

/*
일반적인 언어에서는 if 블럭안에 쓰인 txt2는 블럭 밖에서 사용할 수 없으나 자바스크립트는 가능.
let으로 선언된 txt2_2 는 블럭 밖에서 참조 불가능.
const로 선언된 txt3는 값 변경 불가능.
실행결과는 콘솔로 출력(브라우저 f12 -> console 에서 확인)
*/