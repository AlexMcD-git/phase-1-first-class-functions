function receivesAFunction (fn){
    fn()
}

function returnsANamedFunction(){
    let addsOne = x => x+1
    return addsOne
}

function returnsAnAnonymousFunction(){
    return function(x){return x+1}
}