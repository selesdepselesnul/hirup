const batteryLevel = require('battery-level');
const player = require('play-sound')({player: "mplayer"});

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function playAlarm() {
    player.play(`${__dirname}/hirup.mp3`, function(err){
        if (err) {
            console.log(err);
        }
    });
}

async function main() {
    setInterval(async function() {
        const batteryLevelValue = await batteryLevel();
        const batteryLevelValueRound = round(batteryLevelValue, 1);

        console.log(batteryLevelValueRound)
        if(batteryLevelValueRound <= 0.5 || batteryLevelValueRound == 1) {
            playAlarm();
        }
    }, 60000);
}

main();