const USERNAME = "Malahat";
const PASSWORD = "mila2002";

function Login(name, password, callback) {
    setTimeout(() => {
        if (name != USERNAME || password != PASSWORD) {
            console.log("Invalid credentials!!!");
        }
        else {
            callback(name);
        }
    }, 4000);
}

function welcome(name, callback) {
    setTimeout(() => {
        console.log(`welcome back, ${name}`);
    }, 1000);
}

function getListOfFriends(callback) {
    const friends = ["Zakir", "Alxan", "Leyla", "Yusif"];
    setTimeout(() => {
        callback(friends);
    }, 1500);
}
function showFriend(friends) {
    console.log(friends[0]);
}

Login("Malahat", "mila2002", (name) => {
    welcome(name);
    getListOfFriends((friends) => {
        showFriend(friends);
    });
});