function checkSpeed(speed) {
    const speedLimit = 70;  //the constant speedLimit
    const  kmS = 5;
    if (speed < speedLimit) {
        console.log("OK"); //when speed is not over 70 prints "OK"
    }else{
        const demeritPoints = math.floor ((speed -speedLimit) / kmS); //to calculate demerit pooints 
        if (demeritPoints > 12) {
            console.log("LICENCE SUSPENDED!!"); //output when demerit points exceed 12
        }else{
            console.log(`points: ${demeritPoints}`);
        };
    };
};


checkSpeed(); //callingBack the function