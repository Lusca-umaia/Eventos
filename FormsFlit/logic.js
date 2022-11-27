let radios = document.getElementsByClassName('radios')
let sub = document.getElementById('sub')
let starOne = document.getElementById('starOne')
let starTwo = document.getElementById('starTwo')
let starThree = document.getElementById('starThree')
let starFour = document.getElementById('starFour')
let starFive = document.getElementById('starFive')
let starValue = 0
let email = document.getElementById('email')

starOne.addEventListener('click', function () {
    if (starValue != 1) {
        starTwo.src = "./img/estrela] (1).png"
        starThree.src = "./img/estrela] (1).png"
        starFour.src = "./img/estrela] (1).png"
        starFive.src = "./img/estrela] (1).png"
    }

    starOne.src = "./img/estrela] (2).png"
    starValue = 1
})

starTwo.addEventListener('click', function () {
    if (starValue != 2) {
        starThree.src = "./img/estrela] (1).png"
        starFour.src = "./img/estrela] (1).png"
        starFive.src = "./img/estrela] (1).png"
    }

    starOne.src = "./img/estrela] (2).png"
    starTwo.src = "./img/estrela] (2).png"
    starValue = 2
})

starThree.addEventListener('click', function () {
    if (starValue != 3) {
        starFour.src = "./img/estrela] (1).png"
        starFive.src = "./img/estrela] (1).png"
    }

    starOne.src = "./img/estrela] (2).png"
    starTwo.src = "./img/estrela] (2).png"
    starThree.src = "./img/estrela] (2).png"
    starValue = 3
})

starFour.addEventListener('click', function () {
    if (starValue != 4) {
        starFive.src = "./img/estrela] (1).png"
    }

    starOne.src = "./img/estrela] (2).png"
    starTwo.src = "./img/estrela] (2).png"
    starThree.src = "./img/estrela] (2).png"
    starFour.src = "./img/estrela] (2).png"
    starValue = 4
})

starFive.addEventListener('click', function () {
    starOne.src = "./img/estrela] (2).png"
    starTwo.src = "./img/estrela] (2).png"
    starThree.src = "./img/estrela] (2).png"
    starFour.src = "./img/estrela] (2).png"
    starFive.src = "./img/estrela] (2).png"
    starValue = 5
})

sub.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(email.value)
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Chance de recomendação: ", radios[i].value)
        }
    }
    console.log("Classificação da monitoria ao vivo: ", starValue)
})
