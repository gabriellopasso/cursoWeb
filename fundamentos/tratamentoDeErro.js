/* 
Try, Catch, Throw, finally
*/
function solveErroThrow(erro){
    //throw new Error('objeto não encontrado')
    //throw 10
    //throw true
    throw {}
}

function printShout(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e){
       solveErroThrow(e)
    }
    finally{
        console.log('fim.')
    }
}

const obj = {n0me: 'mario'}
//const obj = {name: 'mario'}

printShout(obj)