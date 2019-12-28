const batteryLevel = require('battery-level');

async function main() {
    const batteryLevelValue = await batteryLevel();
    console.log(batteryLevelValue);
}

main();