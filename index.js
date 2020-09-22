console.log("Before");
getUser(1, (user) => {
    getRepo(user.gitHubUsername, (repos) => {
        console.log("Repos", repos);
    });
});

console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("reading a user from database...");
        callback({ id: id, gitHubUsername: "Keem" });
    }, 2000);
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log("getting repos...");
        callback(["repo1", "repo2", "repo3"]);
    }, 2000);
}
