const notas = [1, 2, 3, 4, 6, 7, 8, 9, 10]

for (let x in notas){
    if (x==5){
        break
    }
    console.log(`${x} = ${notas[x]}`)
}

for (let x in notas){
    if (x==5){
        continue
    }
    console.log(`${x} = ${notas[x]}`)
}

externo:
for (a in notas){
    for (b in notas){
        if (a == 2 && b==3 ) break externo
        console.log(`par ${a} , ${b}`)
    }
}