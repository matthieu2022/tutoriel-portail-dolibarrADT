// JavaScript pour la navigation mobile
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (document.querySelector(targetId)) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Fermer le menu mobile après le clic
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        }
    });
});

// Animation pour les cartes au scroll
const animateOnScroll = () => {
    const cards = document.querySelectorAll('.card');
    const featureItems = document.querySelectorAll('.feature-item');
    
    // Fonction pour vérifier si un élément est visible
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    
    // Ajouter une classe d'animation aux cartes visibles
    cards.forEach(card => {
        if (isElementInViewport(card) && !card.classList.contains('animated')) {
            card.classList.add('animated');
        }
    });
    
    // Ajouter une classe d'animation aux éléments de fonctionnalités visibles
    featureItems.forEach(item => {
        if (isElementInViewport(item) && !item.classList.contains('animated')) {
            item.classList.add('animated');
        }
    });
};

// Initialiser la barre de recherche
const initSearchBar = () => {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.toLowerCase().trim();
                if (searchTerm.length > 2) {
                    // Rediriger vers une page de recherche avec le terme (à implémenter)
                    alert(`Recherche pour: ${searchTerm}`);
                }
            }
        });
    }
};

// Exécuter au chargement de la page
window.addEventListener('load', () => {
    initSearchBar();
    
    // Surveiller le scroll pour les animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Vérifier une première fois au chargement
});