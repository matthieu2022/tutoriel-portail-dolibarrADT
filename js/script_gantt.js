document.addEventListener("DOMContentLoaded", function () {
  // Données des projets
  const projects = [
    {
      id: 1,
      name: "Dolibarr CRM",
      startDate: new Date(2022, 8, 2),
      endDate: new Date(2025, 0, 10),
      duration: "600 jours",
      resources:
        "Mélina, Lauryn, laetitia, maeva sur https://crm-neo-sphere.fr/",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-crm",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 2,
      name: "Dolibarr Prospect",
      startDate: new Date(2021, 6, 1),
      endDate: new Date(2025, 0, 10),
      duration: "1047 jours",
      resources: "Mélina, Lauryn, laetitia, maeva",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-prospect",
      description:
        "Système de gestion des prospects et des opportunités commerciales. Permet de suivre le cycle de vente complet, de la prospection initiale à la conversion client.",
    },
    {
      id: 3,
      name: "Dolibarr facturation",
      startDate: new Date(2021, 1, 22),
      endDate: new Date(2025, 0, 10),
      duration: "600 jours",
      resources: "Romuald, maeva",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-facturation",
      description:
        "Module de facturation électronique avec gestion des factures, devis, bons de commande et règlements. Intègre un système de relances automatisées pour les paiements en retard.",
    },
    {
      id: 4,
      name: "Dolibarr Campus",
      startDate: new Date(2024, 8, 1),
      endDate: new Date(2025, 3, 25),
      duration: "237 jours",
      resources: "Melina, sabine, charlotte",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-campus",
      description:
        "Adaptation du système Dolibarr pour la gestion des campus et centres de formation, incluant le suivi des étudiants, des cours et la gestion des ressources pédagogiques.",
    },
    {
      id: 5,
      name: "Dolibarr fusionné",
      startDate: new Date(2025, 0, 13),
      endDate: new Date(2026, 3, 26),
      duration: "104 jours",
      resources: "ADT - https://gestion.academie-tourisme.fr/",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-fusionnee",
      description:
        "Version fusionnée intégrant tous les modules Dolibarr déployés pour ADT. Centralisation et harmonisation des différents systèmes pour une gestion globale.",
    },
    {
      id: 6,
      name: "Crème",
      startDate: new Date(2021, 7, 30),
      endDate: new Date(2022, 7, 15),
      duration: "351 jours",
      resources: "",
      section: "Historique Projets Eureka",
      cssClass: "creme",
      description:
        "Projet Crème développé pour le secteur cosmétique, incluant la gestion des formulations, le suivi de production et la traçabilité des ingrédients.",
    },
    {
      id: 7,
      name: "Ypareo",
      startDate: new Date(2024, 4, 22),
      endDate: new Date(2024, 5, 7),
      duration: "17 jours",
      resources: "",
      section: "Historique Projets Eureka",
      cssClass: "ypareo",
      description:
        "Intégration avec la plateforme Ypareo pour la gestion et le suivi de l'apprentissage et de la formation professionnelle.",
    },
    {
      id: 8,
      name: "Pepit",
      startDate: new Date(2023, 6, 17),
      endDate: new Date(2024, 1, 6),
      duration: "205 jours",
      resources: "",
      section: "Historique Projets Eureka",
      cssClass: "pepit",
      description:
        "Projet Pepit dédié aux startups innovantes, incluant des outils de gestion de projets agiles et de suivi d'avancement.",
    },
    // Ajout du prévisionnel
    {
      id: 9,
      name: "Livraison base test définitive",
      startDate: new Date(2025, 3, 15), // 15 mars 2025 – 30 avril 2025
      endDate: new Date(2025, 4, 30),
      duration: "5 jours",
      resources: "Équipe technique + Admin ADT",
      section: "Planning de déploiement",
      cssClass: "planning-test",
      description:
        "Finalisation et livraison de la base de test complète pour validation sur le dolibarr de test :https://dolibarrvierge19.e-learning-neo-sphere.fr/.Cette étape marque le début de la phase de tests approfondis.",
    },
    {
      id: 10,
      name: "Phase pré-test",
      startDate: new Date(2025, 4, 5), // 5 mai 2025 – 15 juin 2025
      endDate: new Date(2025, 6, 15),
      duration: "1 mois environ",
      resources: "Hélène, Olivier, Equipe Technique",
      section: "Planning de déploiement",
      cssClass: "planning-pretest",
      description:
        "Vérification préliminaire des fonctionnalités par une équipe restreinte. Identification des problèmes avant les tests élargis et resolution des problèmes critiques.",
    },
    {
      id: 11,
      name: "Débugs et ajustements (1)",
      startDate: new Date(2025, 6, 15), // 15 juin 2025 – 14 juillet 2025
      endDate: new Date(2025, 7, 14),
      duration: "1 mois environ",
      resources: "Aurélien, Fanny, Caroline, Mélina",
      section: "Planning de déploiement",
      cssClass: "planning-debug",
      description:
        "Première phase de correction des bugs et d'ajustements suite aux retours des pré-tests. Optimisation des performances et de l'Phase de test avec 4 référents d’activité du pôle commercial + Débugs et ajustements pour la V1.",
    },
    {
      id: 12,
      name: "Phase de test avec référents",
      startDate: new Date(2025, 5, 2), // 2 juin 2025
      endDate: new Date(2025, 5, 2),
      duration: "1 journée",
      resources: "Olivier Moncoudiol, André, matthieu, Hélene",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      description:
        "Demo icademie pour le dolibarvierge et notre CRM. Comparaison éventuelle avec Salesforce",
    },

    {
      id: 13,
      name: "Congès",
      startDate: new Date(2025, 5, 2), // 14 juillet 2025 – 15 aout 2025
      endDate: new Date(2025, 5, 13),
      duration: "1 mois environ",
      resources: "ADT",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      description:
        "Période estivale de congés pour l'équipe technique et les référents d'activité mais cette période peut être sujette à des tests ou des développements légers.",
    },

    {
      id: 14,
      name: "Formation des équipes Commerciales et Administratif",
      startDate: new Date(2025, 8, 18), // 18 aout 2025 –  31 aout 2025
      endDate: new Date(2025, 8, 31),
      duration: "12 jours environ",
      resources: "(8 BtoB + 2 GC + 3 BtoC + 2 admin",
      section: "Planning de déploiement",
      cssClass: "planning-debug-v1",
      description:
        "Formation des équipes commerciales et administratif (15 personnes) - 1 journée par utilisateur, soit 3 groupes de 5 personnes – mise en place de référents dolibarr qui assureront aide et suivi. Un portail web dédiée sera à disposition.",
    },
    ,
    {
      id: 15,
      name: "Rentrée Septembre - deploiement de la V1",
      startDate: new Date(2025, 9, 1), // 1 juillet 2025
      endDate: new Date(2025, 9, 1),
      duration: "1 journée",
      resources: "ADT",
      section: "Planning de déploiement",
      cssClass: "planning-formation",
      description:
        "Inauguration officielle de la version V1 du système Dolibarr. Lancement de la solution en environnement de production et début de la phase de support post-déploiement. Notifications tous canaux TEAMS",
    },
    {
      id: 16,
      name: "Fusion des systèmes BDD campus et CRM",
      startDate: new Date(2025, 9, 1), // debut septembre a mi-septembre 2025
      endDate: new Date(2025, 9, 15),
      duration: "15 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-debug-final",
      description:
        "Fusion Bdd Campus avec le dolibarr principal gestion + Concertation avec Mélina pour l’integration par la Cyber-technique",
    },
    {
      id: 17,
      name: "Formation des équipes Campus et Pédagogie",
      startDate: new Date(2025, 10, 1), // debut octobre à mi octobre 2025
      endDate: new Date(2025, 10, 15),
      duration: "1 jour",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-deployment",
      description:
        "Formation et sensibilisation des équipes campus et pédagogie à l'utilisation du système Dolibarr. Mise en place de sessions de formation pour assurer une transition fluide vers le nouvel outil.",
    },
    //rajout ISP + GESTMAX + API + CSS du dolibarr
    {
      id: 17,
      name: "Formulaires Web et liaisons webhook",
      startDate: new Date(2025, 3, 24),
      endDate: new Date(2025, 4, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & améliorations",
      cssClass: "dev-cybertechnique",
      description:
        "Développement de formulaires web interactifs et mise en place des webhooks pour l'intégration en temps réel avec les systèmes externes.",
    },
    {
      id: 18,
      name: "Module Pré-opportunité",
      startDate: new Date(2025, 2, 1),
      endDate: new Date(2025, 4, 14),
      duration: "2 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      description:
        "Création d'un module spécifique pour la gestion des pré-opportunités commerciales, permettant de qualifier les leads avant leur conversion en opportunités.",
    },
    {
      id: 19,
      name: "ISP et correspondance des champs",
      startDate: new Date(2025, 2, 18),
      endDate: new Date(2025, 6, 1),
      duration: "3 mois environ",
      resources: "Équipe technique - André & Hélene",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      description:
        "Développement du système d'intégration ISP et mise en place des correspondances de champs entre les différentes plateformes pour assurer la cohérence des données.",
    },
    {
      id: 20,
      name: "Liaisons API GESTMAX + maformation.fr + je-change-de-metier.fr",
      startDate: new Date(2025, 4, 14),
      endDate: new Date(2025, 5, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      description:
        "Développement des connecteurs API pour l'intégration avec GESTMAX et les plateformes de formation en ligne, permettant la synchronisation automatique des données.",
    },
    {
      id: 21,
      name: "Developpement interne dolibarr : modules personnalisés",
      startDate: new Date(2024, 10, 5),
      endDate: new Date(2025, 5, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      description:
        "Travaux de personnalisation et d'optimisation du cœur de Dolibarr pour répondre aux besoins spécifiques de l'organisation. Développement de modules sur mesure.",
    },
  ];

  // Création des deux ensembles de données
  const historicProjects = projects.filter((project) => project.id <= 8);
  const upcomingProjects = projects.filter((project) => project.id >= 9);

  // Paramètres du diagramme
  const minDate = new Date(2021, 0, 1);
  const maxDate = new Date(2027, 11, 31);
  const totalDuration = maxDate - minDate;
  const today = new Date(); // Date du jour

  // Variable pour suivre le projet actuellement sélectionné
  let currentlySelectedProjectId = null;
  let currentlySelectedElement = null;

  // Fonction pour formater les dates
  function formatDate(date) {
    return `${date
      .getDate()
      .toString()
      .padStart(
        2,
        "0"
      )}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
  }

  // Fonction pour calculer position et largeur des barres
  function calculatePosition(startDate, endDate) {
    const start = ((startDate - minDate) / totalDuration) * 100;
    const width = ((endDate - startDate) / totalDuration) * 100;
    return { start, width };
  }

  // Fonction pour créer le panneau latéral pour les détails des projets
  function createSidePanel() {
    // Vérifier si le panneau existe déjà
    if (document.getElementById("project-side-panel")) {
      return;
    }

    // Créer l'élément du panneau
    const sidePanel = document.createElement("div");
    sidePanel.id = "project-side-panel";
    sidePanel.className = "side-panel hidden";

    // Structure interne du panneau
    sidePanel.innerHTML = `
      <div class="side-panel-header">
        <h3 class="side-panel-title">Détails du projet</h3>
        <button id="close-panel-btn" class="close-panel-btn" aria-label="Fermer">✕</button>
      </div>
      <div class="side-panel-content">
        <div class="project-details">
          <p class="empty-state">Sélectionnez un projet pour voir ses détails</p>
        </div>
      </div>
    `;

    // Ajouter au document
    document.querySelector(".container").appendChild(sidePanel);

    // Ajouter l'événement de fermeture
    document
      .getElementById("close-panel-btn")
      .addEventListener("click", function () {
        hideSidePanel();
        deselectCurrentProject();
      });
  }

  // Fonction pour afficher le panneau latéral avec les infos du projet
  function showProjectDetails(projectId) {
    const project = projects.find((p) => p.id === projectId);

    if (!project) return;

    // Référence au panneau latéral
    const sidePanel = document.getElementById("project-side-panel");
    const projectDetails = sidePanel.querySelector(".project-details");

    // Mettre à jour le contenu
    projectDetails.innerHTML = `
      <div class="project-color-indicator ${project.cssClass}"></div>
      <h2 class="project-title">${project.name}</h2>
      
      ${
        project.description
          ? `<div class="project-description">${project.description}</div>`
          : ""
      }
      
      <div class="project-metadata">
        <div class="metadata-item">
          <span class="metadata-label">Début:</span>
          <span class="metadata-value">${formatDate(project.startDate)}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Fin:</span>
          <span class="metadata-value">${formatDate(project.endDate)}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Durée:</span>
          <span class="metadata-value">${project.duration}</span>
        </div>
        
        <div class="metadata-section">
          <div class="metadata-item full-width">
            <span class="metadata-label">Ressources:</span>
            <span class="metadata-value">${
              project.resources || "Non spécifiées"
            }</span>
          </div>
        </div>
        
        <div class="metadata-item">
          <span class="metadata-label">Catégorie:</span>
          <span class="metadata-value">${project.section}</span>
        </div>
      </div>
    `;

    // Afficher le panneau
    sidePanel.classList.remove("hidden");

    // Ajouter une classe au body pour ajuster la mise en page
    document.body.classList.add("panel-open");
  }

  // Fonction pour masquer le panneau latéral
  function hideSidePanel() {
    const sidePanel = document.getElementById("project-side-panel");

    if (sidePanel) {
      sidePanel.classList.add("hidden");
      document.body.classList.remove("panel-open");
    }

    currentlySelectedProjectId = null;
  }

  // Fonction pour désélectionner visuellement le projet actuel
  function deselectCurrentProject() {
    if (currentlySelectedElement) {
      currentlySelectedElement.classList.remove("selected");
      currentlySelectedElement = null;
    }
  }

  // Génération des trimestres pour l'axe temporel
  function generateTimeline(containerId) {
    const timelineElement = document.querySelector(`#${containerId} .timeline`);

    if (!timelineElement) {
      console.error(`Timeline dans #${containerId} non trouvée`);
      return;
    }

    let currentDate = new Date(minDate);

    while (currentDate < maxDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const quarter = Math.floor(month / 3) + 1;

      const position = ((currentDate - minDate) / totalDuration) * 100;

      const markerElement = document.createElement("div");
      markerElement.className = "quarter-marker";
      markerElement.textContent = `T${quarter} ${year}`;
      markerElement.style.left = `${position}%`;

      timelineElement.appendChild(markerElement);

      // Avancer au trimestre suivant
      currentDate = new Date(year, month + 3, 1);
    }

    // Ajouter le marqueur pour la date du jour
    addTodayMarker(timelineElement, containerId);
  }

  // Fonction pour ajouter le marqueur de la date du jour
  function addTodayMarker(timelineElement, containerId) {
    // Vérifier si la date du jour est dans la plage du diagramme
    if (today >= minDate && today <= maxDate) {
      const position = ((today - minDate) / totalDuration) * 100;

      // Créer le marqueur de la date du jour
      const todayMarker = document.createElement("div");
      todayMarker.className = "today-marker";
      todayMarker.style.left = `${position}%`;

      // Ajouter une étiquette avec la date
      const todayLabel = document.createElement("div");
      todayLabel.className = "today-label";
      todayLabel.textContent = `Aujourd'hui (${formatDate(today)})`;
      todayMarker.appendChild(todayLabel);

      timelineElement.appendChild(todayMarker);

      // Ajouter une ligne verticale qui traverse tout le diagramme
      addTodayLine(position, containerId);
    }
  }

  // Fonction pour ajouter une ligne verticale pour la date du jour
  function addTodayLine(position, containerId) {
    const ganttContainer = document.getElementById(containerId);

    if (ganttContainer) {
      const todayLine = document.createElement("div");
      todayLine.className = "today-line";
      todayLine.style.left = `${position}%`;

      ganttContainer.appendChild(todayLine);
    } else {
      console.error(`Élément #${containerId} non trouvé dans le DOM`);
    }
  }

  // Fonction pour gérer le clic sur un élément de projet
  function handleProjectClick(event) {
    const projectId = parseInt(event.currentTarget.dataset.projectId);

    // Si on reclique sur le même projet, on désactive la sélection
    if (currentlySelectedProjectId === projectId) {
      hideSidePanel();
      deselectCurrentProject();
      return;
    }

    // Désélectionner l'élément précédemment sélectionné
    deselectCurrentProject();

    // Sélectionner le nouveau projet
    currentlySelectedProjectId = projectId;
    currentlySelectedElement = event.currentTarget;
    currentlySelectedElement.classList.add("selected");

    // Afficher les détails du projet
    showProjectDetails(projectId);
  }

  // Génération des sections et projets
  function generateGanttChart(projectsData, containerId) {
    const sectionsContainer = document.querySelector(
      `#${containerId} .sections-container`
    );

    if (!sectionsContainer) {
      console.error(`Conteneur #${containerId} .sections-container non trouvé`);
      return;
    }

    // Regrouper les projets par section
    const sections = {};
    projectsData.forEach((project) => {
      if (!sections[project.section]) {
        sections[project.section] = [];
      }
      sections[project.section].push(project);
    });

    // Créer les sections et les projets
    for (const sectionName in sections) {
      const sectionElement = document.createElement("div");
      sectionElement.className = "section";

      const sectionTitle = document.createElement("h3");
      sectionTitle.className = "section-title";
      sectionTitle.textContent = sectionName;
      sectionElement.appendChild(sectionTitle);

      const projectsContainer = document.createElement("div");
      projectsContainer.className = "projects";

      sections[sectionName].forEach((project) => {
        const projectRow = document.createElement("div");
        projectRow.className = "project-row";

        // Déterminer si le projet s'étend dans le futur
        const projectExtendsFuture = project.endDate > today;

        // Cas spécial pour les jalons (durée d'un jour)
        const isMilestone =
          project.startDate.getTime() === project.endDate.getTime();

        if (isMilestone) {
          // Traitement spécial pour les jalons
          const position =
            ((project.startDate - minDate) / totalDuration) * 100;

          const milestone = document.createElement("div");
          milestone.className = `milestone ${project.cssClass} ${
            project.startDate > today ? "milestone-future" : "milestone-past"
          }`;
          milestone.title = project.name;
          milestone.style.left = `${position}%`;
          milestone.dataset.projectId = project.id;

          // Ajouter une étiquette de jalon
          const milestoneLabel = document.createElement("span");
          milestoneLabel.className = "milestone-label";
          milestoneLabel.textContent = project.name;
          milestone.appendChild(milestoneLabel);

          // Ajouter le gestionnaire d'événement au clic
          milestone.addEventListener("click", handleProjectClick);

          projectRow.appendChild(milestone);
        } else if (projectExtendsFuture && project.startDate < today) {
          // Cas où le projet est en cours (chevauche la date du jour)
          // Créer deux barres: une pour la partie passée et une pour la partie future

          // 1. Barre pour la partie passée (jusqu'à aujourd'hui)
          const pastBarPosition = calculatePosition(project.startDate, today);
          const pastBar = document.createElement("div");
          pastBar.className = `project-bar ${project.cssClass} project-past`;
          pastBar.textContent = project.name;
          pastBar.style.left = `${pastBarPosition.start}%`;
          pastBar.style.width = `${pastBarPosition.width}%`;
          pastBar.dataset.projectId = project.id;

          // 2. Barre pour la partie future (à partir d'aujourd'hui)
          const futureBarPosition = calculatePosition(today, project.endDate);
          const futureBar = document.createElement("div");
          futureBar.className = `project-bar ${project.cssClass} project-future`;
          futureBar.style.left = `${
            ((today - minDate) / totalDuration) * 100
          }%`;
          futureBar.style.width = `${futureBarPosition.width}%`;
          futureBar.dataset.projectId = project.id;

          // Ajouter les gestionnaires d'événements au clic
          pastBar.addEventListener("click", handleProjectClick);
          futureBar.addEventListener("click", handleProjectClick);

          projectRow.appendChild(pastBar);
          projectRow.appendChild(futureBar);
        } else if (project.startDate > today) {
          // Projet entièrement dans le futur
          const { start, width } = calculatePosition(
            project.startDate,
            project.endDate
          );

          const projectBar = document.createElement("div");
          projectBar.className = `project-bar ${project.cssClass} project-future`;
          projectBar.textContent = project.name;
          projectBar.style.left = `${start}%`;
          projectBar.style.width = `${width}%`;
          projectBar.dataset.projectId = project.id;

          // Ajouter le gestionnaire d'événement au clic
          projectBar.addEventListener("click", handleProjectClick);

          projectRow.appendChild(projectBar);
        } else {
          // Projet entièrement dans le passé
          const { start, width } = calculatePosition(
            project.startDate,
            project.endDate
          );

          const projectBar = document.createElement("div");
          projectBar.className = `project-bar ${project.cssClass} project-past`;
          projectBar.textContent = project.name;
          projectBar.style.left = `${start}%`;
          projectBar.style.width = `${width}%`;
          projectBar.dataset.projectId = project.id;

          // Ajouter le gestionnaire d'événement au clic
          projectBar.addEventListener("click", handleProjectClick);

          projectRow.appendChild(projectBar);
        }

        projectsContainer.appendChild(projectRow);
      });

      sectionElement.appendChild(projectsContainer);
      sectionsContainer.appendChild(sectionElement);
    }
  }

  // Ajout de la gestion de la navigation
  function setupNavigation() {
    const navLinks = document.querySelectorAll(".gantt-nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Supprimer la classe active de tous les liens
        navLinks.forEach((l) => l.classList.remove("active"));

        // Ajouter la classe active au lien cliqué
        this.classList.add("active");

        // Fermer le panneau latéral et désélectionner tout projet
        hideSidePanel();
        deselectCurrentProject();

        // Obtenir l'ID cible
        const targetId = this.getAttribute("href").substring(1);

        // Faire défiler jusqu'à la cible
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: "smooth",
          });
        }
      });
    });

    // Activer le premier lien par défaut
    if (navLinks.length > 0) {
      navLinks[0].classList.add("active");
    }
  }

  // Initialisation
  function initializeGanttCharts() {
    // Créer le panneau latéral
    createSidePanel();

    // Initialiser le premier diagramme (historique)
    generateTimeline("historic-gantt");
    generateGanttChart(historicProjects, "historic-gantt");

    // Initialiser le second diagramme (futur)
    generateTimeline("future-gantt");
    generateGanttChart(upcomingProjects, "future-gantt");

    // Configurer la navigation
    setupNavigation();

    // Ajouter un gestionnaire d'événement pour fermer le panneau quand on clique ailleurs
    document.addEventListener("click", function (event) {
      // Si on clique en dehors du panneau et en dehors d'un élément de projet
      const isProjectElement =
        event.target.closest(".project-bar") ||
        event.target.closest(".milestone");
      const isSidePanel = event.target.closest("#project-side-panel");

      if (
        !isProjectElement &&
        !isSidePanel &&
        currentlySelectedProjectId !== null
      ) {
        hideSidePanel();
        deselectCurrentProject();
      }
    });
  }

  // Lancer l'initialisation
  initializeGanttCharts();
});