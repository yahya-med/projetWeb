

document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('monFormulaire').addEventListener('submit', validateForm);
});

function validateForm(event) {
    event.preventDefault(); 
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var nomRegex = /^[A-Za-z]+$/;
    if (!nomRegex.test(nom)) {
        displayMessage('Veuillez saisir un nom valide (alphabétique).', 'red');
        return false;
    }
    var emailRegex = /@esprit\.tn$|@gmail\.com$/;
    if (!emailRegex.test(email)) {
        displayMessage('Veuillez saisir une adresse email valide (@esprit.tn ou @gmail.com).', 'red');
        return false;
    }
    displayMessage('Formulaire envoyé avec succès!', 'green');

    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    return true;
}

function displayMessage(message, color) {
    var messageElement = document.getElementById('success-message');
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageElement.style.display = 'block';
    setTimeout(function () {
        messageElement.style.display = 'none';
    }, 6000);
}
