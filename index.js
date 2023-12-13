var request = require('request');

const repoUrl = require('get-repository-url');

const findRepo = async (repoName, callback) => {
    var options = {
        url: `https://api.github.com/search/repositories?q=${repoName}`,
        headers: {
            "Accept": "application/vnd.github+json",
            'User-Agent': 'request',
        }
    }
    //convert request to async await
    return new Promise((resolve, reject) => {
        request.get(options, function(error, response, body) {
            console.log(response.statusCode)
            if (!error && response.statusCode === 200) {
                resolve(JSON.parse(body))
            } else {
                reject(error)
            }
        });
    })
}


console.log([
    "lodash",
    "md5",
    "moment",
    "notistack",
    "nprogress",
    "qs",
    "query-string",
    "react",
    "react-chartjs-2",
    "react-dom",
    "react-hook-form",
    "react-redux",
    "react-router",
    "react-router-dom",
    "react-scripts",
    "react-select",
    "react-syntax-highlighter",
    "react-test-render",
    "redux",
    "redux-devtools-extension",
    "redux-thunk",
    "reselect",
    "styled-components",
    "typeface-roboto",
    "typescript",
    "xlsx",
    "yup",
    "bcrypt",
    "cli-highlight",
    "compression",
    "cors",
    "dotenv",
    "express",
    "express-rate-limit",
    "formidable-serverless",
    "helmet",
    "https",
    "jsonwebtoken",
    "lodash",
    "moment",
    "morgan"
].map(async (repo) => {
    return repoUrl(repo)
}).then((res) => {
    return res;
})
)