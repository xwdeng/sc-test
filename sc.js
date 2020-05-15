var screenshot = require('desktop-screenshot');
const now = new Date();
const secondsSinceEpoch = Math.round(now.getTime() / 1000);

screenshot(`screenshot_${secondsSinceEpoch}.png`, function(error, complete) {
    if(error)
        console.log("Screenshot failed", error);
    else
        console.log("Screenshot succeeded");
});