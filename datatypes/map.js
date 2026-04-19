let mapList = new Map();

let obj = {
  firstname: "Eymen",
};
mapList.set(true, "Yavuz Selim KAHRAMAN");
mapList.set("abc", "yavuz");
mapList.set(obj, 3);

mapList.delete(obj);

console.log("mapList", mapList);

console.log(mapList.get(obj));

let setList = new Set();
setList.add("1");
setList.add("2");
setList.add("1");

console.log("setList", setList);

//For of

// for in

for (const element of setList) {
  console.log("element", element);
}
