/**prototype */

// const fruits = ["사과","바나나","체리"];
const fruits = new Array("사과", "바나나", "체리");
console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes("바나나")) //바나나 있으니까
console.log(fruits.includes("오렌지")) //오렌지 없으니까

/**프로토타입 
 * 아래 코드는 goName이라는 함수를 새롭게 만든 것
 */
Array.prototype.getName = function () {
    console.log(this)
};
fruits.getName();

const newArr = [];
newArr.getName();

/** 정리하면, 프로토타입이라는 것은 new 키워드를 통해서 만든 생성자 함수에서 변환된 결과
 * 여기서는 fruits라는 배열 데이터 혹은 인스턴스라고 일컫는다.
 * 이렇게 인스턴스에서 볼 수 있는 별도의 속성이나 메서드를 등록하는 객체
 * 
 * 우리가 원시 타입, 창조 타입들도 마찬가지로 다양하나 데이터들은 생성자 함수를 통해서 변환된 결과이다.
 * 우리가 그동안 생성자 함수를 사용하지 않고, 
 * 각각의 데이터를 만든 것은 더 쉽게 만들 수 있게 각각의 데이커방식들을 만들었을 뿐
 */

const user = {
    firstName: "하영",
    lastName: "김",
    getFullName: function () {
        /**객체 데이터 내부에서 일반 함수를 통해메서드를 만들게 되면 this라는 키워드를 통해 접근 할 수 있겠죠 */
        return `${this.firstName}${this.lastName}`
    }
    /**또한,~ */
}

const user2 = {
    firstName: "삐삐",
    lastName: "김",
    getFullName: function () {
        /**객체 데이터의 메서드를 일반 함수로 만들면, 일반 함수에서의 THis는 함수가 호출되는 곳에서 정의된다고배웠음
         * 즉, user가 this가 됩니다.
         */
        console.log(user.getFullName)
    }
    /**만약, user2 객체 데이터에서도 fullName을 반환하는 메서드를 만들어야 한다면 어떻게 할 수 있을까요
     * 1. getFullName을 복사해서 user2 내부에 똑같이 만드는 방법
     * 
     * 정확하게 같은 로직을 가지고 있는 함수가 2번 만들어졌어요. "굉장히 비효율적이다.""
     * 
     * 2. getFullName.call(user2)*/
}

console.log(user.getFullName.call(user))
//-> 재활용하는 코드의 가족성도 떨어지고, 메서드를 빌려쓰는 구조에서 본래의 객체도 참조해야하고, 여러 어려움이 있음.

/**이러한 단점을 보완하기 위해 우리가 쓸 수 있는 게 프로토타입이다. */