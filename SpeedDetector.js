let speed = parseFloat(prompt("Enter the speed : "));
speedDetector(speed);
function speedDetector (speed){//function declaration that takes the parameter 'speed'
    const speedLimit = 70;
    if(speed<=speedLimit){//condition for checking the speed range in reference to the speed limit
        console.log('OK');//console log 'OK' if the speed is less than 70
    }else{
        let demeritPoints = (speed-speedLimit)/5;//calculates the demerit points for speeds over 70
        if (demeritPoints>12){//checks for speeds with demerit points over 12
            console.log('License suspended');//prints 'License suspended'for demerit points over 12
          }else{
            console.log(`Points: ${demeritPoints}`);//prints the demerit points for points less than 12
    }
}
}