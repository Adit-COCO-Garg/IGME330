#!/usr/bin/env node
// #1 - import the request module, which is used to download data over http
const request = require('request');

// #2 - set our URL
let url = "http://www.boredapi.com/api/activity?participants=";
let numParticipants = process.argv[2] || 1; // 1 will be the default
url += numParticipants; // concatenate `numParticipants` to the end of the query string

// #3 - make the request
// the second parameter below is a callback function (an ES6 arrow function in this case)
// which is called when the data is downloaded
request(url, (err, response, body) => {
    // if there's no error, and if the server's status code is 200 (i.e. "Ok")
    if(!err && response.statusCode == 200){
    	// A - convert the downloaded text to a JavaScript Object (in this case an array)
        let obj = JSON.parse(body); 
    
        // B - grab the `.activity` property of the first result
        let text = obj.activity;
        
        // C - log it out
        console.log(text);
        console.log(`Type: ${obj.type}`);
        console.log(`Participants: ${obj.participants}`)
      }
});