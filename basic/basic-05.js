/** 데이터 타입 확인 */

const numv = 100;
console.log(typeof (numv)); // number
console.log(typeof "hello"); //string
console.log(typeof "hello" == "string") //true
console.log(typeof false === "boolean") //true
console.log(typeof undefined == "undefined") //true
console.log(typeof null === " null") // false

console.log(typeof null) //object
console.log(typeof []); //object
console.log(typeof {}); //object

console.log([].constructor === Array); //true(배열인지 확인)
console.log({}.constructor == Object); //true(객체인지 확인)

/** null 데이터 어떻게 타입을 확인할 수 있을까 */
console.log(Object.prototype.toString.call(null)) // object Null
console.log(Object.prototype.toString.call(null).slice(8, -1)); // Null

/** 코드 재사용 */
function checkType(data) {
    return Object.prototype.toString.call(null).slice(8, -1);
}

// checkType 함수는 자바스크립트에서 변수의 데이터 타입을 정확하게 확인하기 위해 만든 사용자 정의 함수입니다. 
// 특히 null, 배열, 객체와 같은 값의 타입을 보다 명확하게 구분할 수 있도록 돕습니다.
console.log(checkType(null)); // "Null"
console.log(checkType([])); // "Array"
console.log(checkType({})); // "Object"
console.log(checkType("hello")); // "String"
console.log(checkType(123)); // "Number"
console.log(checkType(function () {})); // "function"
console.log(checkType(undefined)); // "Undefined"
console.log(checkType(true)); // "Boolean"