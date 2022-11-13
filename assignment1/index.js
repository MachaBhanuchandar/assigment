function getUsers() {
    console.log("calling getuser")
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("got the users now")
            resolve({
                id: 1,
                name: "sameer",
                age: 20
            })
        }, 8000)
    })

}

function getUsersRolesAndPrintUsingPromise() {
    getUsers().then(function (res) {
        console.log("result from users", res)
        getRoles().then(function (res) {
            console.log("result from roles ==", res)
            printRole(res.role);
        })
    })
}
12. Write program to call the getUsers then print users using callback, promise.
13. What is call apply bind explain this with the help of example.
17. write a progroam to delete employee whose age is 18
[
    {
        id: 1,
        age: 40
    },
    {
        id: 2,
        age: 50
    },
    {
        id: 3,
        age: 40
    },
    {
        id: 4,
        age: 20
    }
]


19.Write a program to remove duplicate from array
[30, 45, 60, 20, 30, 55]


20. Write a piece of code to center a div vertically and horizontally.
