/** promise 
 * : 비동기 작업을 처리하기 위한 객체입니다. 
 * 비동기 작업은 시간이 걸리는 작업(예: API 호출, 파일 읽기 등)이며, 
 * 그 작업이 끝났을 때 결과값이나 에러를 처리해야 합니다. 
 * Promise는 이러한 작업이 완료될 때, 결과를 다룰 수 있도록 해줍니다.
 */

const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
}
const b = () => {
    console.log(2)
}

a(() => {
    b()
})


const c = () => {
    /** callback을 대신해서 매개변수를 resolve를 callback이 실행되는 부분에서 대신해서 실행시켜준다. */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            resolve();
        }, 1000);
    });
};
const d = () => console.log(4);

/** then()은 Promise가 이행되었을 때 호출되는 메서드
 *  Promise에서 만들어진 인스턴스에서는 then이라는 메서드를 이어서 체이닝 형식으로 활용할 수 있다. */
c().then(() => {
    d();
});

const e = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(5);
            callback();
        }, 1000);
    })
}

const f = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(6);
            callback();
        }, 1000);
    })
}

const g = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(7);
            callback();
        }, 1000);
    })
}

const h = () => console.log(8)

e().then(() => {
    f().then(() => {
        g().then(() => [
            h()
        ])
    })
})

/** Promise에서 만들어진 인스턴스에서는 then이라는 메서드를 이어서 
 * 체이닝 형식으로 활용할 수 잇다.
 * 그리고 화살표 함수에서는 return 키워드가 바로 나오면 중괄호와 RETURN ㅣ오워드를 생각할 수 있으므로
 */

e()

    .then(() => {
        return r()
    })
    .then(() => {
        return g()
    })
    .then(() => {
        h()
    })

e()

    .then(() => f())
    .then(() => g())
    .then(() => (
        h()
    ))

/** resolve()는 Promise를 성공적으로 완료했을 때 호출하는 함수 
 * Promise에서 resolve는 하나의 함수 데이터만 받으면 된다. */

p().then(f).then(() => {
    h()
})