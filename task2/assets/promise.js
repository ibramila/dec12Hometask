const USERNAME = "Malahat";
const PASSWORD = "mila2002";

function Login(name, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (name != USERNAME || password != PASSWORD) {
                reject("Invalid credentials!!!");
            }
            else {
                resolve(name);
            }
        }, 4000);
    })

}

function welcome(name) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(`welcome back, ${name}`);
        }, 1000);
    })
}

function getListOfFriends() {
    return new Promise(function (resolve) {
        const friends = ["Zakir", "Alxan", "Leyla", "Yusif"];
        setTimeout(() => {
            resolve(friends);
        }, 1500);
    })
}
function showFriend(friends) {
    return new Promise(function (resolve) {
        resolve(friends[0]);
    })
}

Login("Malahat", "mila2002")
    .then((res) => {
        return welcome(res);
    })
    .then((res) => {
        console.log(res);
        return getListOfFriends(res);
    })

    .then((res) => {
        return showFriend(res);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));