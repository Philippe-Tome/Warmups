let jars = []
visitCounter = 0

function prepJars(Qty) {
    for(let i = 0; i < Qty; i++) {
        jars[i] = "closed"
    }
}

prepJars(100)

function visit(visitQty) {
    for (let i = 0; i < visitQty; i++){
        if (visitCounter === 0) {
            for(let j = 0; j < 100; j++) {
                jars[j] = "opened"
            }
        } else if(visitCounter > 0 && visitCounter < 100) {
            for (let k = visitCounter; k < 100; k += (1 + visitCounter)) {
                if (jars[k] === "closed") {
                    jars[k] = "opened"
                } else {
                    jars[k] = "closed"
                }
            }
        } 
        visitCounter++
        console.log(visitCounter)
        console.log(jars)
    }
}

visit(100)

