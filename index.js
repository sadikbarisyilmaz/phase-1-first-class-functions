const receivesAFunction = (spy) => {
    spy()
}

function returnsANamedFunction(){
    const namedFunc = function(){

    }
    return namedFunc
}

function returnsAnAnonymousFunction(){
    return () => console.log("fucn");
}