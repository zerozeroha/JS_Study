/**참조형 데이터 타입 */

/**배열 */

const fruits = new Array("사과", "바나나", "체리", "멜론", "수박", "딸기"); //새로운 배열을 만든다.
console.log(fruits); // ["사과", "바나나", "체리", "멜론", "수박", "딸기"]

/**배열 리터럴
 * 배열을 만드는 방식으로 대괄호([])라는 기호를 통해 만들었는데
 * 이것을 리터럴 방식으로 만들었다고 한다.
 */
const animals = ["호랑이", "원숭이", "사자", "코끼리", "악어", "뱀"];
console.log(animals); //["호랑이", "원숭이", "사자", "코끼리", "악어","뱀"]
console.log(animals[1]) // 원숭이
// 배열데이터를 인덱싱한다라고 합니다. 
// 그리고 각각의 데이터 하나하나를 배열의 아이템, 요소, element라고 부릅니다.
console.log(animals.length) //6
console.log(animals[animals.length - 1]) //해당 배열의 마지막 요소 조회 -> "뱀"
console.log(animals[0]) //호랑이


/**객체 */
const user = new Object(); //생성자 함수를 통해 객체를 생성한다.
user.name = "하영 ";
user.age = 28;
user.job = "programmer";

console.log(user); // key-value형태로 조회가 된다. key는 속성 혹은 프로퍼티(Property)라고도 하며, 
// value는 값이라고 불리기도 한다. 

/** 객체 리터럴
 * 객체를 만드는 방식으러 중괄호({})라는 기호를 통해 만들었는데,
 * 이것을 리터럴 방식으로 만들었다고 한다.
 * 
 * 객체 데이터에서의 key는 고유하며, 순서는 중요하지 않아요.
 * 단, 동일한 키 값일 경우, 나중에 작성된 값으로 덮어써집니다.
 */

const number = {
    name: "gkdud",
    age: 11,
    job: "gg"
}
console.log(number)
console.log(number.name) // 객체에서는 .점 표기법으로 접근한다.
console.log(number["job"]) // 대괄호 표기법이라고 한다.

const userA = {
    name: "ㅇㅇ",
    age: 100,
    job: "dfdf"
}

const userB = {
    name: "ss",
    age: 1040,
    brother: userA //객체 안에 또다른 객체
}

console.log(userB.brother)
console.log(userB.brother.name)
console.log(userB.brother["job"])

const family = [userA, userB]
console.log(family)
console.log(family[0].name)
console.log(family[1]["name"])