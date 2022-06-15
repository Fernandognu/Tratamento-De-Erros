var num = 6;
var array = [1,2,3,4,4,56];

console.log(verificaError(array, num));

function verificaError (array, num) {
    try{
        if (!array && !num) throw new ReferenceError(["Array e numero Invalido."]);
        if (typeof array !== 'object') throw new TypeError(["Array não é do tipo object."]);
        if (typeof num !== 'number') throw new TypeError(["Numero não é do tipo number."]);
        if (array.length !== num) throw new RangeError(["Tamanho invalido."]);   
        
        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError:");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError:");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError:");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}