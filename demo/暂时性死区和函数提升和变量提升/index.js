// var a = 1
// {
//     a = 3
//     let a
// }

// for (var index = 0; index < 6; index++) {
//     console.log(index);
// }
// console.log(index);

// let a = 1
// function add(){
// 	console.log(a)
// 	if(false){
// 		let a = 2
// 		console.log(a)
// 	}
// }

// add()


// function f(){
//     console.log('I am outside');
// }

// (function (){
//     if(false){
//         function f(){
//             console.log('I am inside');
//         } 
//     }
//     f()
// }())

// function foo(){
//     baa()
//     function baa(){
//         console.log('baa');
//     }
// }
// foo()



// function hoistFunction() {

//     foo(); // 2

//     var foo = function() {
//         console.log(1);
//     };

//     foo(); // 1

//     function foo() {
//         console.log(2);
//     }

//     foo(); // 1
// }

// hoistFunction();

xxx = 1
console.log(window.xxx);

let abc = 33
console.log(window.abc);