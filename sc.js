var screenshot = require('desktop-screenshot');
const now = new Date();
const secondsSinceEpoch = Math.round(now.getTime() / 1000);

let i = 0;
screenshot(`screenshot_${i}.png`, function(error, complete) {
    if (error) {
        
    }
    i++;
    if (i === 6) {
        i = 0;
    }
});