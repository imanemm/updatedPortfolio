function toggleMenu() {

    const sidebar = document.getElementById('sidebarMenu');
    //const hamburger = document.getElementById('hamburger');
    const pageContent = document.getElementById('pageContent');
  
    const sidebarIsOpen = sidebar.classList.toggle('show');
    const iconSidebar = document.querySelector("i");
  
    if (sidebarIsOpen) {
      pageContent.classList.add('shift-content');
      iconSidebar.classList.remove("fa-bars");
      iconSidebar.classList.add("fa-xmark");
      iconSidebar.style.color = '#F7F1E1';
      //hamburger.style.color = '#F7F1E1';
    } else {
      pageContent.classList.remove('shift-content');
      iconSidebar.classList.remove("fa-xmark");
      iconSidebar.classList.add("fa-bars");
      iconSidebar.style.color = '#01244F';
      //hamburger.style.color = '#01244F';
    }
}

const darkToggle = document.getElementById('darkToggle');
const icon = darkToggle.querySelector("i");

function toogleDarkMode() {
  document.body.classList.toggle('dark-mode');
  updateIcon();

  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem("darkMode", isDark ? "true" : "false");  
}

function updateIcon() {
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

darkToggle.addEventListener("click", toogleDarkMode);

window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("darkMode");

  if (storedTheme === "true") {
    document.body.classList.add("dark-mode");
  } else if (storedTheme === "null") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.body.classList.add("dark-mode");
    }
  }

  updateIcon();
});

const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  langToggle.textContent = currentLang === 'en' ? 'FR' : 'EN';
  updateLanguage(); 
});

const traduction = {
  en: {
    "nav-about" : "About",
    "nav-skills" : "Skills",
    "nav-projects" : "Projects",
    "nav-contact" : "Contact",
    "hero-title" : "Hi, I'm Imane.",
    "hero-desc" : "Software and web developer",
    "about-title" : "About Me",
    "about-desc" : " Hello! I’m Imane, a Software Engineering student at the University of Ottawa. I’m passionate about technology and always eager to take on new challenges. I enjoy connecting with others through community projects and love bringing fresh ideas to life. Outside of tech, I’m curious about languages, driven by music, and always looking for ways to make a positive impact.",
    "skills-title" : 'My Tool Box <i class="fa-solid fa-code"></i>',
    "skills-desc" : "Here are some of the technologies I work with:",
    "projects-title" : "Projects",
    "projects-desc" : "Here are some of the projects I have worked on:",
    "live-website" : "View Live",
    "bzzzstop-desc" : "A web app that helps bus riders relax by playing music and alerting them when they’re near their stop using geolocation.",
    "flappy-desc" : "A browser-based game where players control a bird and navigate it through moving pipes.",
    "studyhub-desc" : "A marketing website designed to promote a student-focused app for collaborative studying. The site highlights key features, benefits, and calls to action to attract users.",
    "idol101-desc" : "A text-based game where players create and manage their own K-pop idol trainee. Players choose positions, entertainment companies, and navigate decisions to debut successfully.",
    "mww-desc" : "A retro-themed restaurant website featuring a full menu and an interactive order form. The site combines playful visuals with user-friendly functionality to create a nostalgic dining experience.",
    "pomodoro-desc" : "A Studio Ghibli-themed Pomodoro web application featuring a Focus Timer, Short Break Timer, and Long Break Timer. It includes reset and skip buttons, along with customizable focus and break durations.",
    "contact-title" : "Contact Me",
    "contact-desc" : "I’m always open to discussing new opportunities, projects, or just having a chat. Feel free to reach out!",
    "footer-button" : "Go back to the top",
    "footer-text" : 'Designed with <i class="fa-solid fa-heart"></i> by Imane Moussa Marou',
  },

  fr: {
    "nav-about" : "À propos",
    "nav-skills" : "Compétences",
    "nav-projects" : "Projets",
    "nav-contact" : "Contact",
    "hero-title" : "Salut, je suis Imane.",
    "hero-desc" : "Développeuse logiciel et web",
    "about-title" : "À propos de moi",
    "about-desc" : "Bonjour! Je m’appelle Imane et je suis étudiante en génie logiciel à l’Université d’Ottawa. Passionnée par la technologie, je suis toujours prête à relever de nouveaux défis. J’aime créer des liens avec les autres à travers des projets communautaires et donner vie à des idées nouvelles. En dehors de la tech, je suis curieuse des langues, portée par la musique, et toujours à la recherche de façons de faire une différence positive.",
    "skills-title" : 'Ma Boite à outils <i class="fa-solid fa-code"></i>',
    "skills-desc" : "Voici certaines des technologies que j’utilise :",
    "projects-title" : "Projets",
    "projects-desc" : "Voici certains des projets sur lesquels j'ai travaillé :",
    "live-website" : "Voir en direct",
    "bzzzstop-desc" : "Application web qui aide les passagers des bus à se détendre en jouant de la musique et en les alertant lorsqu'ils sont proches de leur arrêt grâce à la géolocalisation.",
    "flappy-desc" : "Jeu en ligne où les joueurs contrôlent un oiseau et le font naviguer à travers des tuyaux en mouvement.",
    "studyhub-desc" : "Site Web de marketing conçu pour promouvoir une application destinée aux étudiants pour l'étude collaborative.",
    "idol101-desc" : "Jeu textuel dans lequel les joueurs créent et gèrent leur propre apprentie idole de la K-pop. Les joueurs choisissent des positions, des compagnies de divertissement et prennent des décisions pour réussir leurs débuts.",
    "mww-desc" : "Site web d'un restaurant au thème rétro présentant un menu complet et un formulaire de commande interactif.",
    "pomorodo-desc" : "Application web Pomodoro inspirée de Studio Ghibli avec minuteurs personnalisables, boutons de réinitialisation et de saut.",
    "contact-title" : "Contactez-moi",
    "contact-desc" : "Je suis toujours ouverte à discuter de nouvelles opportunités, projets ou simplement avoir une conversation. N'hésitez pas à me contacter !",
    "footer-button" : "Retourner en haut",
    "footer-text" : 'Conçu avec <i class="fa-solid fa-heart"></i> par Imane Moussa Marou',
  }
}

function updateLanguage() {
  const elementsToTranslate = document.querySelectorAll("[data-key]");
  elementsToTranslate.forEach( (e1) => {
    const key = e1.getAttribute("data-key");
    const traductionKey = traduction[currentLang][key];
    
    if (traductionKey) {
      if (traductionKey.includes("<i")) {
        e1.innerHTML = traductionKey;
      } else {
        e1.textContent = traductionKey;
      }
    }
  });
}

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach((e1) => {
    const rect = e1.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      e1.classList.add('visible');
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);