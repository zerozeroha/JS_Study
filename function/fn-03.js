function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(7)); // 7이 a에 들어가고 b에는 아무것도 들어가있지 않음 : NaN

/** 매개변수 패턴(Parameter Pattern) */
/** 기본값(Default Value) */
function sum1(a, b = 1) {}
console.log(sum(1, 2)); // 3
console.log(sum(7)); // b가 1이라고 지정해줬기 때문에 그대로 더해서 나옴 (NaN 안나옴) : 8

/** 구조 분해 할당 (destructuring assignment) 문법
 * const { name } = user;에서 {}는 디스트럭처링(Destructuring) 문법
 */
const user = {
    name: "하영",
    age: 28,
};

// 백엔드에서 데이터 받을 때 : 객체를 구조분해할 때
function getName(user) {
    const {
        name
    } = user;
    return name;
    // = return user.name; (간단하게 쓸 때)
}

function getName2({
    name
}) {
    return name;
}

function getEmail({
    email = "이메일이 없습니다."
}) {
    return email;
}
console.log(getName(user)); // 하영
console.log(getName2(user)); // 하영
console.log(getEmail(user)); // undefined



const fruits = ["Apple", "Banana", "Cherry"];
// const numbers = [1, 2, 3, 4, 5];

function getSecondItem([a, b, c]) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
}
console.log(getSecondItem(fruits));

/** 나머지 매개변수 */
function add(...rest) {
    console.log(rest);
    console.log(arguments);
    // 유사 배열(Array-Like) 배열 데이터는 아니기 때문에 활용도가 많이 떨어진다.
    /**
     * acc: 누적 값
     * cur: 현재 값
     */
    // reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
    return rest.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4)); // 10
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45