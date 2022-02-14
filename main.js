let n_card = document.querySelector("#n_card")
let n_srok_deustv = document.querySelector("#n_srok_deustv")
let n_password = document.querySelector("#n_password")
let n_name_surname = document.querySelector("#n_name_surname")
document.querySelector("#send").onclick = function(){
    document.querySelector('h1').textContent = 'lox razvel na dengi'
    console.log(n_card.textContent, n_srok_deustv.textContent, n_password.textContent, n_name_surname.textContent)
    }
