// var s1 = "Amit";
// var rev = s1.split("").reverse().join("");
// console.log(rev);

// const a = ["m","d","d","l","k"];
// const a2 = a.filter((value)=>{
//     return value == "d";
// });
// console.log(`${a2}`);

// const b =[5,8,3,9,10,2,52,35];
// let d = Math.min(...b);
// console.log(d);

// let c = b.sort((value1,value2)=>{
//    return value1 > value2 ? 1 : -1;
// });
// console.log(c);  

// console.log(n1);
// var n1 = "Sachin";
// //var n1;
// z( );   
// function z( ) { 
//     console.log ("This function is hoisted!")
//  };

//  const arraydup = [10,17,16,98,10,52,98];
//    let unique = arraydup.filter((value, index)=>{
//     return arraydup.indexOf(value) == index;
//     });
//  console.log(unique);
//  let dup = arraydup.filter((value, index)=>{
//      return arraydup.indexOf(value) != index;
//  });
//  console.log(dup);

// const arr = [12, 45, 78, 98, 65, 32];
// let count = 0;
// for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//         //count++;
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(count);
// console.log(arr);


// let arr = [
//     [1, 2],
//     [16, 4],
//     [5, 6], [7, 8, 9], [10, 11, 12, 13, 14, 15]
// ];

// let rki = arr.flat();
// console.log(rki);

//repeatead count
//  const obj = ["a", "b", "a", "c"];
//  let count = {};
// for(let ele of obj){
//     if(count[ele]){
//         count[ele]++;
//     }
//     else{
//         count[ele] = 1
//     }
// }
// console.log(count);

// var arr = [
//   { id: 1, name: "aaa" },
//   { id: 2, name: "bbb" },
//   { id: 3, name: "ccc" },
//   { id: 2, name: "ccc" }
// ];

// var arr2 = arr.find((ele) => {
//   return ele.id == 2;
// }); //return first maching value (but filter return all maching value )

// console.log(arr2);


// var a;
// console.log(a + 1); //NaN

// console.log(isNaN("designer")); //true

// // console.log(isNaN("123")); //false

// console.log(typeof typeof "1"); //string

// var a = "singapore";
// console.log(a.substring(2, 4)); // ng
// console.log(a.substr(2,4));

// function getAge(...args) {
//   console.log(typeof args);
//   console.log(args);
// }
// getAge(21); //object

// const originalArray = [1, 2, 3, 4, 5];
// const newArrayOne1 = originalArray.reverse();
// console.log(newArrayOne1); //[ 5, 4, 3, 2, 1 ]


// function outer(b) {
//    var a = 10;
//   function inner() {
//     return console.log(a, b);
//   }
//   //let a = 10;
//   return inner;
// }
// var arr = outer(20);
// arr();
// //It will show same result


// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i*1000);
//   }
// }
// x();



// const data = ["a", "b", "c"];
// var [x] = data;  //a
// console.log(x);
// var [, x] = data; // "b"
// console.log(x); // a array destrucring

 
//    let number = 0;
//         console.log(++number ,"1");//1
//         console.log(number++ ,"1");//1
//          console.log(++number ,"2");//3
//          console.log(number++ ,"3");//3
//          console.log(++number ,"4");//5

// function sayHi() {
//             var name = 'Ayush';
//             console.log(name);
//             //console.log(age);

//             //let age = 21;
//         }
//         sayHi();


//   function outer(){
//         function inner(){
//             var a=20;
//             console.log(a+b);
//         }
//       var b=10; // b can access because outer function variable (but not done in hoisting)
//       return inner();
//     }
//     outer() // 30

//   var A = "10" ;
//         var b = 2;
//         var c;
//         var d;
//         // A + b = c
//         // A - b = d
//         console.log("10" + 2)
//         console.log("10" - 2)


//   function longest(str){
//           str = str.split(" ")

//           console.log(str);
//              return str.sort((a, b) => b.length - a.length)[0]
//             }
//             console.log(longest("Hello guys this is geeksforgeeks"))


    //  let aray=['satish','gopane']
    //     let newaray=aray.map((items)=>{
    //         return items.length

    //     })
    //     console.log(newaray);

        
    // const arr1 = [
    //         { name: 'abc', sal: 2000 },
    //         { name: 'xyz', sal: 4000 },
    //         { name: 'opq', sal: 8500 },
    //     ];
    //     const resu = arr1.map((index) => {
    //         return index.name;
    //     });
    //     console.log(resu); // print all objects name


        //   function outer() {
        //     var b=40;
        //     function inner(){
        //         var a=10;
        //         console.log(a+b)
        //     }
        //     var b=20  // taking this value comparing top value
        //     return inner()
        // }
        // outer()


            //  const flatten = [1, 2, [3, 4, 2], [2, 5], [7, 8, 9]];
            // // let result1 = flatten.reduce((acc, reset) => {
            // //     return acc.concat(reset);
            // // }, []);
            // let result1 = flatten.flat();
            // console.log(result1);


