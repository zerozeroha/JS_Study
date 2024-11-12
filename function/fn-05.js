/** 콜백(Callback) */
/**
 * 함수는 하나의 데이터로써, 소괄호를 열고 닫지 않으면 하나의 함수 데이터이고
 * 소괄호를 열고 닫아야지만, 함수를 실행한다고 배웠습니다.
 */

const a = () => {
    console.log("A");
};
const b = () => {
    console.log("B");
};
a(b);
// b: 콜백, 콜백 함수라고 부릅니다. 
// 함수가 실행될 때, 인수/인자로 들어가는 또 다른 함수를 콜백이라 부릅니다.

const c = (callback) => {
    // callback은 함수 데이터이므로 소괄호를 열고, 닫아서 실행시킬 수 있다.
    console.log("C"); // C
    callback(); // D
};

const d = () => {
    console.log("D");
};
c(d);

/** ---------------------------------------------------------------------------------------------------- */

const sum = (a, b) => {
    setTimeout(() => {
        return a + b; // callback 함수의 return(setTimeout 내의 return은 sum 함수와 무관)
    }, 1000);
};
console.log(sum(1, 2)); // undefined : sum 함수 자체에 리턴이 없어서
// undefined : 식별자에 어떤 값도 할당x . 객체 데이터 안에 없는 값 창조 . 함수에 리턴이 없을 때
console.log(sum(3, 7)); // undefined : 함수에 리턴이 없어서

const sum2 = (a, b, c) => {
    setTimeout(() => {
        c(a + b);
    }, 1000);
};
sum2(1, 2, (value) => {
    console.log(value);
});
sum2(3, 7, (value) => console.log(value));