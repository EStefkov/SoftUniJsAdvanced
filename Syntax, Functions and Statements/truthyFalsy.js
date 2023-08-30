function func(input){
    const cond = input ? "truthy" : "false";
    return cond;
};

console.log(func(null));