function goToShop() {
    window.location.href = 'flip.html';  // Make sure 'flip.html' is in the same directory as your index.html file.
}
 const menuIcon = document.querySelector('.menu-icon');
        const menu = document.querySelector('nav ul');

        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
