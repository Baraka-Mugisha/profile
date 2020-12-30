console.log("Before");
getUser(1, getRepos);

console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("reading a user from database...");
        callback({ id: id, gitHubUsername: "Keem" });
    }, 2000);
}

function getRepos(user) {
    getRepo(user.gitHubUsername, displayRepo);
}

function displayRepo(repos) {
    console.log("Repos", repos);
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log("getting repos from", username, " ...");
        callback(["repo1", "repo2", "repo3"]);
    }, 2000);
}
