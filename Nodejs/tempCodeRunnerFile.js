function countdown(fromnumber){
    console.log(fromnumber);
    let intervalid=setInterval(function(){
        fromnumber--;
        if(fromnumber > 0){
            console.log(fromnumber);

        }else{
            console.log('end');
            clearInterval(intervalid);
        }
    },1000);
}
countdown(3);