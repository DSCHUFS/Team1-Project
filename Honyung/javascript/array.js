const colors = ['red', 'blue', 'green'];
console.log("Original Array: ",colors);

colors.push('yellow');
console.log("push('yellow'):", colors);

colors.pop();
console.log('pop(): ', colors);

colors.reverse();
console.log('reverse(): ', colors);

colors.sort();
console.log('sort(): ', colors);

const splicedcolors = colors.splice(0, 2);
console.log('splice():', splicedcolors);

const newColors = colors.join("-");
console.log('join():', newColors);

// splice() : 시작 인덱스, 제거할 인덱스 수를 파라미터로 지정한다
// 예제에서 0 인덱스에서 2개의 값을 잘라 리턴하므로 blue, green 이 새로운 배열로 저장된다
// join() 은 지정한 구분자를 이용해 새로운 배열을 리턴한다