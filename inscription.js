let fNameInput = document.getElementById("fname");
let lNameInput = document.getElementById("lname");
let phoneInput = document.getElementById("phone");
let passInput = document.getElementById("pass");
let cPassInput = document.getElementById("cpass");
var letters = /^[A-Za-z]+$/;

function passValidation() {
if ( passInput.value === "" || cPassInput === "")
alert("Les mots de passe ne correspondent pas");

    else if (passInput.value !== cPassInput.value ) {
        alert("Les mots de passe ne correspondent pas");
        
    } else {
        alert("mots de passe identiques");
      
    }
}

function nameValidation() {
    if (lNameInput.value.length < 3) {
        document.getElementById("nomEr").innerHTML = "Le nom doit avoir au moins 3 caractères.";
        
    }

    if (!lNameInput.value.match(letters)) {
        document.getElementById("nomEr").innerHTML = "Veuillez entrer un nom valide (seulement des lettres).";
      
    }

    document.getElementById("nomEr").innerHTML = "<p style='color:green'>Correct</p>";
    
}

document.forms["inscription"].addEventListener("submit", function (e) {
    let ids = ["erreur", "nomEr", "prenomEr", "phoneEr", "passEr", "cPassEr", "erreur"];

    ids.forEach((id) => (document.getElementById(id).innerHTML = ""));

    let errors = false;

    if (!nameValidation()) {
        errors = true;
    }

    if (fNameInput.value.length < 4) {
        errors = true;
        document.getElementById("prenomEr").innerHTML = "Le prénom doit avoir au moins 4 caractères.";
    }

    if (isNaN(phoneInput.value)) {
        errors = true;
        document.getElementById("phoneEr").innerHTML = "Le numéro ne doit pas contenir des lettres.";
    }

    if (
        !passInput.value.match(/[0-9]/g) ||
        !passInput.value.match(/[A-Z]/g) ||
        !passInput.value.match(/[a-z]/g) ||
        passInput.value.length < 10
    ) {
        errors = true;
        document.getElementById("passEr").innerHTML = "Mot de passe faible.";
    }

    if (passInput.value !== cPassInput.value) {
        errors = true;
        document.getElementById("cPassEr").innerHTML = "Les mots de passe ne correspondent pas.";
    }

    let inputs = document.forms["inscription"];

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            errors = true;
            document.getElementById("erreur").innerHTML = "Veuillez renseigner tous les champs.";
        }
    }

    if (errors) {
        e.preventDefault();
    } else {
        alert("Formulaire envoyé !");
    }
});
