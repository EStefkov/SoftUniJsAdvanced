function catcher() {

    try{
        new Array(-1);
    }catch (err) {
        if(err instanceof RangeError){
        console.log('Caught Range Error');
    } else {
        throw err;
    }
}
}

catcher();

catcher();

catcher();

catcher();
