const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        console.log('promise one');
        // reject(new Error("message"));
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(2);
        console.log('promise two');
        reject(new Error("message two"));
    }, 1999);
});

// p1.then((res) => console.log(res)).catch((err) => console.log(err.message));

// p2.then((res) => console.log(res)).catch((err) => console.log(err.message));

Promise.race([p1, p2])
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
