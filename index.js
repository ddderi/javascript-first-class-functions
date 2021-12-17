// const { spyOn } = require("expect/lib/SpyUtils");


// function spy(){
//     console.log("spy");
// }

function receivesAFunction(spy){
    spy();
}

// function returnsANamedFunction(function){
// var function;
    
// }
// var fn = function fn() {
//     return returnsANamedFunction();
// };

function returnsANamedFunction(){
    var returnedFunction = () => {

    }
     return returnsANamedFunction;
}

function returnsAnAnonymousFunction(){
    return () => {

    }}