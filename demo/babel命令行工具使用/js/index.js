let plus = (a,b) => a+b
function caculate() {
	console.log(document.getElementById('a').value)
	console.log(document.getElementById('b').value)
	let a = parseInt(document.getElementById('a').value)
	let b = parseInt(document.getElementById('b').value)
	document.getElementById('res').innerText = plus(a,b)
}

console.log(a)
var a = 333

console.log(b)
let b = 444
