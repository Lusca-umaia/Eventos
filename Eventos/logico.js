let sub = document.getElementById('sub')
let name = document.getElementById('Name')
let endereco = document.getElementById('endereco')
let rox = document.getElementsByClassName('rox')
let timeE = document.getElementById('timeE')
let timeS = document.getElementById('timeS')
let checkboxs = document.getElementsByClassName('checkbox')

let diasSelect = []
for (i = 0; i < rox.length; i++) {
    rox[i].addEventListener('focus', function (event) {
        event.target.style.borderColor = 'purple'
    })
}

sub.addEventListener('click', function (e) {
    e.preventDefault()

    console.log("Nome da Loja:", name.value)
    console.log("Endereço da Loja:", endereco.value)
    console.log("Abertura da Loja:", timeE.value)
    console.log("Fechamento da Loja:", timeS.value)

    window.localStorage.setItem("Nome", name.value)
    window.localStorage.setItem("Endereço", endereco.value)
    window.localStorage.setItem("Período de entrada", timeE.value)
    window.localStorage.setItem("Período de saíde", timeS.value)

    window.localStorage.setItem("Período de saíde", timeS.value)

    for (i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) {
            console.log("Os dias selecionados são:", checkboxs[i].value)
            diasSelect.push(checkboxs[i].value)
        }
    }

    diasSelect = []
    recuperarValores()
});

function recuperarValores() {
    if (window.localStorage.getItem("Período de saíde") != "") {
        timeS.value = window.localStorage.getItem("Período de saíde")
    }
    if (window.localStorage.getItem("Nome") != "") {
        name.value = window.localStorage.getItem("Nome")
    }

    if (window.localStorage.getItem("Endereço") != "") {
        endereco.value = window.localStorage.getItem("Endereço")
    }

    if (window.localStorage.getItem("Período de entrada") != "") {
        timeE.value = window.localStorage.getItem("Período de entrada")
    }
}

recuperarValores()