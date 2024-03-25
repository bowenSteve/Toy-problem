let speed = parseFloat(prompt("Enter the speed :"));//gets input from the user and assigns it the variable speed as a float type
speedDetector(speed);//invokes the function speedDetector and passes speed as the parameter
function speedDetector (speed){//function declaration that takes the parameter 'speed'
    
    const speedLimit = 70;
    if(speed<=speedLimit){//condition for checking the speed range in reference to the speed limit
        console.log('OK');
    }else{
        let demeritPoints = (speed-speedLimit)/5;//calculates the demerit points for speeds over 70
        if (demeritPoints>12){//checks for speeds with demerit points over 12
            console.log('License suspended');/
          }else{
            console.log(`Points: ${demeritPoints}`);
    }
}
}