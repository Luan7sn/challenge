const axios = require('axios');
const express = require("express");
const Request = express.request;
const Response = express.response;

class Challenge{

  async getRepositories(Request, Response){

    const gitBase = axios.create({
      baseURL: `https://api.github.com`,
    });

    const allRepositories = new Promise((resolve, reject) => {
      gitBase
        .get(`/users/takenet/repos`)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject([])
        })
    })

    const repositories = await allRepositories

    const cSharpRepositories = repositories.filter(repository => repository.language === "C#")

    const sortedCSharpRepositories = cSharpRepositories.sort(function(a, b){
      if (a.created_at < b.created_at) {
        return -1
      } else {
        return 1
      }
    })

    let oldestCSharpRepositories = []

    for(let i = 0; i < 5; i++){
      oldestCSharpRepositories.push(sortedCSharpRepositories[i])
    }

    return Response.json(oldestCSharpRepositories)
  }
}

module.exports = Challenge
