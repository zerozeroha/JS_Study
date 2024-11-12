/** 재귀
 * 재귀 호출은 개념적으로 함수 내부에서 자기 자신을 다시 호출한다는 것
 * 주의사항은 재귀 호출은 무한으로 반복 실행되기 때문에 반드시 멈출 수 있는 조건식을 반드시 작성해주어야 한다.
 */

let i = 0;
const a = () => {
    console.log("A");
    i += 1;

    if (i < 4) { //조건을 넣어줘서 브레이크 걸어주기
        a(); //재귀 호출
    }
};
a();

/** ---------------------------------------------------------------------------------------------------- */

const userA = {
    name: "A",
    parent: null,
};
const userB = {
    name: "B",
    parent: userA,
};
const userC = {
    name: "C",
    parent: userB,
};
const userD = {
    name: "D",
    parent: userC,
};

const getRootUser = (user) => {
    if (user.parent) {
        return getRootUser(user.parent);
    }
    ㄴ
    return user;
};
console.log(getRootUser(userC)); // { name: "A", parent: null }
// console.log(getRootUser(userC)); 여기 user A B C D 넣어도 다 똑같은 결과 나옴