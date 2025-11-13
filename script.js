// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Système d'onglets
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons et panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        // Afficher le panel correspondant
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.game-card, .tool-card, .tab-panel').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});

// Simulation d'outils
document.querySelectorAll('.tool-button').forEach(button => {
    button.addEventListener('click', function() {
        const toolName = this.parentElement.querySelector('h3').textContent;
        alert(`Fonctionnalité "${toolName}" en cours de développement!`);
    });
});

// Simulation de boutons de jeu
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', function() {
        const gameName = this.parentElement.querySelector('h3').textContent;
        alert(`Redirection vers les cheats pour ${gameName} (simulation)`);
    });
});

// CTA Button
document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('cheats').scrollIntoView({ behavior: 'smooth' });
});

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Effet de parallaxe sur la section hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Changement de couleur de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Démos interactives (simulation)
function simulateAimbot() {
    const demo = document.querySelector('.demo-placeholder');
    if (demo) {
        demo.innerHTML = '<div class="aimbot-demo"></div>';
        
        // Créer une démo visuelle simple
        const aimbotDemo = document.querySelector('.aimbot-demo');
        aimbotDemo.style.width = '100%';
        aimbotDemo.style.height = '100%';
        aimbotDemo.style.background = 'radial-gradient(circle, rgba(74,0,224,0.3) 0%, rgba(0,198,255,0.1) 70%)';
        aimbotDemo.style.position = 'relative';
        
        // Ajouter des cibles
        for (let i = 0; i < 5; i++) {
            const target = document.createElement('div');
            target.style.width = '20px';
            target.style.height = '20px';
            target.style.background = 'red';
            target.style.borderRadius = '50%';
            target.style.position = 'absolute';
            target.style.left = `${20 + i * 15}%`;
            target.style.top = `${30 + i * 10}%`;
            target.style.transition = 'transform 0.3s';
            aimbotDemo.appendChild(target);
            
            // Animation de ciblage
            setTimeout(() => {
                target.style.transform = 'scale(1.5)';
                target.style.background = 'green';
            }, 500 + i * 300);
        }
        
        setTimeout(() => {
            demo.innerHTML = '<p>Démonstration visuelle de l\'aimbot</p>';
        }, 3000);
    }
}

// Lancer la démo d'aimbot quand l'onglet est actif
document.querySelector('[data-tab="aimbot"]').addEventListener('click', () => {
    setTimeout(simulateAimbot, 500);
});

// Initialiser la démo d'aimbot si l'onglet est actif au chargement
if (document.querySelector('[data-tab="aimbot"]').classList.contains('active')) {
    setTimeout(simulateAimbot, 1000);
}



