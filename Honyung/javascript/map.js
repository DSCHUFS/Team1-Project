const map = new Map();
map.set("2019101","HongGilDong");
map.set("2019102","KimSaRang");
map.set("2019103","KandDongSu");
// map : value와 key로 구성된다
// python에서의 dictionary?

console.log("### Original data: forEach with Arrow")
map.forEach((value, key) => console.log(key, value));

console.log("### Original data: for-of")
for(let item of map ) {
  console.log(item[0],item[1]);
}

console.log("### Original data: for-of with key, map")
for(let [key, value] of map ) {
  console.log(key,value);
}

console.log("### Original data: map.keys()")
const keys = map.keys();
for(let key of keys) {
  console.log(map.get(key));
}

console.log("### Map functions")
console.log("get 201901: "+map.get("2019101"));
map.delete("2019103")
console.log("after delete 201903, has : ", map.has("2019103"));