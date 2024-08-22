function validateForm(event) {
    event.preventDefault();
    
    var firstname = document.getElementById("firstname").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();
    var parola = document.getElementById("parola").value.trim();
    var message = document.getElementById("message").value.trim();

    if (firstname === "" || lastname === "" || email === "" || parola === "" || message === "") {
        alert("Este necesar sa completati toate campurile!");
        return false; 
    } else {
        alert("Formularul a fost trimis cu succes!");
        document.getElementById("contactForm").reset(); 
        return true; 
    }
}

function goToGraphicDesign() {
    window.location.href = 'graphic-design.html'; 
}

function goToWebsiteDevelopment() {
    window.location.href = 'website-development.html'; 
}

function goToImplementare() {
    window.location.href = 'implementare.html'; 
}

function goToSocialMedia() {
    window.location.href = 'social-media.html'; 
}

function goBack() {
    window.history.back();
}

function goToOfertaNoastra() {
    window.location.href = 'oferta noastra.html'; 
}

function goBack() {
    window.history.back();
}



