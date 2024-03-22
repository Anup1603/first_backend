require('dotenv').config()

const express = require("express")
const app = express();

const port = 4000;

app.get('/', (request, response) => {
    response.send("Hello World");
})

app.get('/twitter', (req, res) => {
    res.send("anupshawdotcom");
})

app.get('/login', (req, res) => {
    res.send('<h1>You are sucessfully login</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listen in port ${port}`);
})

const githubData = {
    "login": "anupshaw",
    "id": 110482287,
    "node_id": "U_kgDOBpXTbw",
    "avatar_url": "https://avatars.githubusercontent.com/u/110482287?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anupshaw",
    "html_url": "https://github.com/anupshaw",
    "followers_url": "https://api.github.com/users/anupshaw/followers",
    "following_url": "https://api.github.com/users/anupshaw/following{/other_user}",
    "gists_url": "https://api.github.com/users/anupshaw/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anupshaw/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anupshaw/subscriptions",
    "organizations_url": "https://api.github.com/users/anupshaw/orgs",
    "repos_url": "https://api.github.com/users/anupshaw/repos",
    "events_url": "https://api.github.com/users/anupshaw/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anupshaw/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-08-02T15:49:24Z",
    "updated_at": "2022-12-23T03:20:38Z"
}

app.get('/github', (req, res) => {
    res.json(githubData)
})