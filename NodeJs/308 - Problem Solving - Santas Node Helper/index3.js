const fs = require('fs');

function question1() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('santa-time');

        const directions = data.toString();
        const directionsArray = directions.split('');
        
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc + 1;
            } else if (currentValue === ')') {
                return acc - 1;
            } else {
                return acc; // handle other characters if needed
            }
        }, 0);

        console.timeEnd('santa-time');
        console.log('floor:', answer);
    });
}

question1();
