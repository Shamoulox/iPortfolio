document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.querySelector('.sent-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Ici, vous pouvez ajouter du code pour envoyer les données à un service externe
        // Pour l'instant, nous allons simplement simuler un envoi réussi

        formStatus.style.display = 'block';
        formStatus.textContent = `Merci ${name} ! Votre message a été envoyé.`;
        form.reset();
    });
});