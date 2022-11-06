30.
let elems = document.querySelectorAll('p');
console.log(elems[1], elems[0]) 
console.log(elems.join('')) 

31.1
let elems = document.querySelectorAll('p');
let arr1 = [];

for (let elem of elems) {
	arr1.push(elem);
}

let arr2 = [...elems];

let arr3 = Array.from(elems);
console.log(arr1.join('-'), arr2.join(''), arr3.join(''));

31.2
let elems = document.querySelectorAll('p');

let arr = [...elems];
console.log(arr.slice(1, arr.length-1));

32
et elems = document.querySelector('div');

console.log(elems.childNodes);
console.log(elems.children);

33.1
let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));

33.2
let map = new Map;

let obj1 = {'1': 'a'}
let obj2 = {'2': 'b'}
let obj3 = {'3': 'c'}

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

map.set(obj1, arr1);
map.set(obj2, arr2);
map.set(obj3, arr3);

console.log(map.get(obj1));
console.log(map.get(obj2));
console.log(map.get(obj3));

36.1
let map = new Map;

let obj1 = {'1': 'a'}
let obj2 = {'2': 'b'}

for(const keys of map.keys()){
    console.log(keys)

36.2
let map = new Map;

let obj1 = {'1': 'a'}
let obj2 = {'2': 'b'}

for(const keys of map.values()){
    console.log(keys)
}

37.1
let elems = document.querySelectorAll('input');

let map = new Map;

let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
}

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.value = this.value + map.get(this);
	});
}

37.2
let elems = document.querySelectorAll('input');

let map = new Map;
let inputValue = [];


let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
}

for (let elem of elems) {
	elem.addEventListener('keyup', function() {
		if (event.keyCode == 13) {
			inputValue.push(this.value);
		}
	});
	elem.onblur = function() {
		console.log(inputValue);
	}
}


















