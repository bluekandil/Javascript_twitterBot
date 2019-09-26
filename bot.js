
//startup message
console.log("Bot is starting ...");

//load twit package
let Twit =require('twit');

//Authentication
let config =require('./config');

//Node.js file system module
let fs = require("fs");

let T = new Twit(config);

let url='https://api.icndb.com/jokes/random'
let importedJSON
let joke;
let request = require('request');


// Joke API json call
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     importedJSON = JSON.parse(body);
     joke = importedJSON.value.joke;
     //console.log(importedJSON.value.joke);
  }
});

//wrap a message and post
function sendTweet(){
  let myMsg={
    status:joke
  }
  T.post('statuses/update', myMsg ,gotresult); 
  
  function gotresult(err, data, response) {
   console.log("sent ...");  
    } 
  }

//call sendTweet every hour
setInterval(sendTweet,1000 * 60);



//------------------ media post ------------------

// var b64content = fs.readFileSync('./imgs/puppy.png', { encoding: 'base64' })
 
// // first we must post the media to Twitter
// T.post('media/upload', { media_data: b64content }, function (err, data, response) {
//   // now we can assign alt text to the media, for use by screen readers and
//   // other text-based presentations and interpreters
//   var mediaIdStr = data.media_id_string
//   var altText = "Happy Puppy."
//   var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
//   T.post('media/metadata/create', meta_params, function (err, data, response) {
//     if (!err) {
//       // now we can reference the media and post a tweet (media will attach to the tweet)
//       var params = { status: 'puppy  #happypuppy', media_ids: [mediaIdStr] }
 
//       T.post('statuses/update', params, function (err, data, response) {
//         console.log(data)
//       })
//     }
//   })
// })


//------------  post a tweet -------------------

// T.post('statuses/update', myMsg ,gotresult); 

// function gotresult(err, data, response) {
//     console.log("working");
    
//   }



// --------------- Search tweet with a keyword  ----------------------


// var params ={
//   q:"modi",
//   count:10
// }

// T.get('search/tweets',params , gotData);

// function gotData(err, data, response){
//         // console.log(data);
//         var tweets =data.statuses;

//         for( var i =0;i <tweets.length ;i++){
//             console.log(tweets[i].text);
//         }
//     }
  
