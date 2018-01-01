var retweeter = require('./bots/retweet.js');
var favoriter = require('./bots/favorite.js');


//========RETWEET=========================================
// grab & retweet as soon as program is running...
retweeter();
setInterval(retweeter, 14400000); // retweet in every 4 hours

//========FAVORITE=========================================
// grab & 'favorite' as soon as program is running...
favoriter();
setInterval(favoriter, 21600000);// 'favorite' a tweet in every 6 hours