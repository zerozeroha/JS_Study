/** 원시형 데이터 타입 */

/** 문자열, String */
const str1 = "Hello, World!"; // 큰 따음표, 작은 따음표 둘 중 아무거나 사용해도 무관(그 프로젝트 규칙에 따라서 맞춤)
const str2 = "World!";
// 키워드 식별자 데이터
const str3 = `Hellosss, ${str2}`; // ₩${}₩ 백틱 - 문자열 데이터가 바인딩이 됨. 

console.log(str3);

/** 숫자, number */
/** 주의할 점
 * 숫자 데이터와 다른타입의 값을 연산할 경우 -> 2-1로 가기
 */

const num1 = 123;
const num2 = -123; // 음수
const num3 = -123.456;
const pi = 3.14; // 부동소수점

console.log(num3 + undefined); // 2-1: 출력 값이 NaN
console.log(typeof(num3 + undefined)); // number
console.log(typeof pi) // number

/** NaN이라는 Not a Number라는 데이터는 타입 자체는 숫자 데이터인데
 * 특정한 숫자 값으로 표현할 수 없기 때문에 NaN으ㅗ 표시하여 출력, 반환한다.
 * 그래서 NaN값이 나왔다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어있을 가능성이 있다는 것을 의미한다.
 * */ 

const a = 0.1;
const b = 0.2;

// toFixed : 숫자를 ()안의 지정된 숫자로 반올림. / 반환값을 문자열 형태로 제공하는 메서드
console.log(a + b); //0.3000....4
console.log(typeof(a+b).toFixed(1));//string
console.log(typeof Number((a+b).toFixed(1)));//number -> 타입 형변환
console.log(Number((a+b).toFixed(1)));//0.3

/** Boolean(불린, 불리엄) */
/** true false라는 두가지 값만 사용하는 논리 데이터
 * true : 긍정의 의미를 가지고 있습니다.
 * false : 부정의 의미를 가지고 있습니다.
 */

const truthy = true;
const falsy = false;

if(typeof truthy == "boolean"){
    console.log("조건식이 참입니다.")
}else {
    console.log("조건식이 거짓입니다.")
}


/** null과 undefined
 * null : 존재하지 않는다. 값이 비어있다. 값을 알 수 없다. " 명시적으로" 표현한 것이다.
 * "의도적으로" 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용된다.
 * 
 * undefined : 변수가 선언되었지만, 값이 할당되지 않았음을 의미합니다.
 * 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을때도 undefined를 반환합니다.
 */

let value1 = null; // 값을 비운 거 -> 개발자의 의도가 보인다/있다 라는 코드 : 굉장히 신중해야 함.
console.log(value1);//null
console.log(typeof value1);//object
/**null 이 원래 이곳에 객체 참조가 있어야 하는데 참조가 없음을 나타내는 값으로 만들어졌기 때문이다.
 *  Javascript를 보면 "없다"는 의미를 나타내는 값이 null 과 undefined 2가지가 있다. */

setTimeout(() => {
    value1 = 30;
    console.log(value1)//30
}, 1000);

let value2;
console.log(value2)//undefined : 값을 할당하지 않았기에

/**-------------------------------------/**-------------------------------------/**------------------------------------- */

const user = {
    name: "하영", //key-value
    age: 28,
};
console.log(user.age); //28
console.log(user.name); //하영
console.log(user.email); //undefined
console.log(user.password); //undefined
