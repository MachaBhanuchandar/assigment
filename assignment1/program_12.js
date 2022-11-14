// 12. Write program to call the getUsers then print users using callback, promise.

//call back using getuser function
function getUsers(fn) {
    console.log("user data");
    setTimeout(() => {
        console.log("fetching data")
        fn(
            {
                name: "sameer",
                age: "20",
                id: "101"
            }
        );
    }, 400);
}

function showUser() {
    console.log("user done");
}
getUsers(showUser);// call back


//promise using getuser function
function getUsers() {
    return new Promise(function (resolve, reject) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (res) {
                console.log("api called successfully got the data")
                fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(function (res) {
                        console.log("2nd api calling")
                        resolve("2nd api data got ")
                    })
            })
    })
}

function pay() {
    console.log("payment done")
}

getUsers().then(function (res) {
    console.log(res)
    pay();
}).catch(function (error) {
    console.log("some error while placing order", error)
})
