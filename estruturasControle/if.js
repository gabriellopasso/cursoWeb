function justGoodScore(score) {
    if (score >= 7){
        console.log(`aprovado com ${score}`)
    }
}
justGoodScore(8.1)
justGoodScore(5)

function ifTrueAmSpeak(valor)  {
    if (valor){
        console.log('é verdade... ' + valor)
    }
}
ifTrueAmSpeak()
ifTrueAmSpeak(null)
ifTrueAmSpeak(undefined)
ifTrueAmSpeak(NaN)
ifTrueAmSpeak(10)
ifTrueAmSpeak('')
ifTrueAmSpeak(0)
ifTrueAmSpeak(' ')
ifTrueAmSpeak({})
ifTrueAmSpeak()
