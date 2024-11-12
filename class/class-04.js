/** getter / setter */

// class User(
//         constructor(firstName, lastName) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.fullName = 
//         }
//         getFullName() {
//             return `${this.firstName}${this.lastName}`;
//         }
//     )

const user1 = new User("하영", "김")
console.log(user1)

user1.firstName = "QlqL"
console.log(user1)

/**fullName은 수정되지 않은 걸 확인할 수 잇는데
 * 생성자 함수로 해당 클래슬 ㄹ추출할 때 최초로만 만들잊고,
 * 그다음부터는 firstName에 lastName이 바뀌더라도 전혀 변화가 없는 상태가 됩니다.
 * 
 * 이런 부분을 보완하기 위해서 메서드를 활용합니다.
 */

console.log(user1.getFullName); //QlQl 김

/**함구를 호출하는 것을 좀 더 간편하게 쓰기 위해서 getter라는 개념을 도입한다.
 * Getter는 갑을 조회하는 용도의 메서드

 */
// class newUser(
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName() {
//         return `${this.firstName}${this.lastName}`;
//     })

// const user2 = new NewUser