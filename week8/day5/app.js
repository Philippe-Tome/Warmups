var group = {
    A: 20,
    B: 15,
    C: 10
}

const splitTheBill = function (group) {
    let total = 0
    let numPeople = 0
    let amountPerPerson = 0
    for(const key of Object.keys(group)) {
        total += group[key]
    }
    amountPerPerson = total / (Object.keys(group).length)
    for(const key of Object.keys(group)) {
        group[key] = group[key] - amountPerPerson
    }
    console.log(group)
}

splitTheBill(group)


