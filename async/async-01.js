/** 동기(Synchromous) 비동기(Asynchromous) 
 * 동기 : 코드가 순차적으로 실행되는 것
 * 비동기 : 코드가 순차적으로 실행되지 않는 것
 */

// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 1000);
// console.log(4);

/**--------------------------------------------------------- */

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
    console.log("버튼이 클릭되었습니다.")
});
console.log("hello world")

/**--------------------------------------------------------- */

/**콜백 패턴
 * 콜백 지옥]
콜백 함수가 중첩되면 코드의 가독성이 급격하게 떨어지고, 코드 흐름을 파악하기 어려워집니다. 여러 비동기 작업을 순차적으로 처리해야 할 때, 콜백이 계속 중첩되면서 코드가 깊어지기 때문입니다.
 */

const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
}

const b = (callback) => {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 1000);
}

const c = (callback) => {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 1000);
}

const d = () => console.log(4)

a(() => {
    b(() => {
        c(() => {
            d()
        })
    })
})