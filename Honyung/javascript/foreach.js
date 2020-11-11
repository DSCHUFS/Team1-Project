console.log('## for ##');
const colors = ['red', 'blue', 'green'];
for (let i = 0; i < colors.length; i++) {
	console.log( colors[i] );
}

console.log('## while ##');	
var i=0;
while (colors[i] != null) {
  console.log( colors[i] );
  i++;
}

console.log('## forEach ##');
colors.forEach(function(value) {
  console.log(value);
});

console.log('## forEach with Arrow ##');
colors.forEach( value => console.log(value));

const colors = ['red', 'blue', 'green'];

console.log('## for-in ##');
for (var index in colors) {
	console.log( colors[index] );
}

console.log('## for-of-for ##');
for (var value of colors) {
	console.log( value );
}