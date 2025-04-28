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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    // Ajout du prévisionnel
    {
      id: 9,
      name: "Livraison base test définitive",
      startDate: new Date(2025, 3, 21), // 21 avril 2025
      endDate: new Date(2025, 3, 25), // 25 avril 2025
      duration: "5 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-test",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 10,
      name: "Phase pré-test",
      startDate: new Date(2025, 4, 5), // 5 mai 2025
      endDate: new Date(2025, 4, 16), // 16 mai 2025
      duration: "12 jours",
      resources: "Hélène, Olivier",
      section: "Planning de déploiement",
      cssClass: "planning-pretest",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 11,
      name: "Débugs et ajustements (1)",
      startDate: new Date(2025, 4, 19), // 19 mai 2025
      endDate: new Date(2025, 4, 30), // 30 mai 2025
      duration: "12 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-debug",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 12,
      name: "Phase de test avec référents",
      startDate: new Date(2025, 5, 2), // 2 juin 2025
      endDate: new Date(2025, 5, 13), // 13 juin 2025
      duration: "12 jours",
      resources: "Aurélien, Fanny, Caroline, Mélina",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 13,
      name: "Débugs et ajustements pour la V1",
      startDate: new Date(2025, 5, 16), // 16 juin 2025
      endDate: new Date(2025, 5, 27), // 27 juin 2025
      duration: "12 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-debug-v1",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 14,
      name: "Formation des équipes",
      startDate: new Date(2025, 6, 1), // 1 juillet 2025
      endDate: new Date(2025, 6, 11), // 11 juillet 2025
      duration: "11 jours",
      resources: "24 personnes (4 groupes)",
      section: "Planning de déploiement",
      cssClass: "planning-formation",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 15,
      name: "Débugs et ajustements finaux",
      startDate: new Date(2025, 6, 14), // 14 juillet 2025
      endDate: new Date(2025, 6, 25), // 25 juillet 2025
      duration: "12 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-debug-final",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 16,
      name: "Déploiement V1",
      startDate: new Date(2025, 7, 4), // 4 août 2025
      endDate: new Date(2025, 7, 4), // 4 août 2025 (1 jour - jalon)
      duration: "1 jour",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-deployment",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    //rajout ISP + GESTMAX + API + CSS du dolibarr
    {
      id: 17,
      name: "Formulaires Web et liaisons webhook",
      startDate: new Date(2025, 3, 24),
      endDate: new Date(2025, 4, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 19,
      name: "ISP et correspondance des champs",
      startDate: new Date(2025, 2, 18),
      endDate: new Date(2025, 6, 1),
      duration: "3 mois environ",
      resources: "Équipe technique - André & Hélenne",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 21,
      name: "developpement interne dolibarr",
      startDate: new Date(2024, 10, 5),
      endDate: new Date(2025, 5, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
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

          // Ajouter les gestionnaires d'événements pour l'interaction au survol
          milestone.addEventListener("mouseenter", showTooltip);
          milestone.addEventListener("mouseleave", hideTooltip);
          milestone.addEventListener("touchstart", showTooltip);

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

          // Ajouter les gestionnaires d'événements pour l'interaction au survol
          pastBar.addEventListener("mouseenter", showTooltip);
          pastBar.addEventListener("mouseleave", hideTooltip);
          pastBar.addEventListener("touchstart", showTooltip);

          futureBar.addEventListener("mouseenter", showTooltip);
          futureBar.addEventListener("mouseleave", hideTooltip);
          futureBar.addEventListener("touchstart", showTooltip);

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

          // Ajouter les gestionnaires d'événements pour l'interaction au survol
          projectBar.addEventListener("mouseenter", showTooltip);
          projectBar.addEventListener("mouseleave", hideTooltip);
          projectBar.addEventListener("touchstart", showTooltip);

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

          // Ajouter les gestionnaires d'événements pour l'interaction au survol
          projectBar.addEventListener("mouseenter", showTooltip);
          projectBar.addEventListener("mouseleave", hideTooltip);
          projectBar.addEventListener("touchstart", showTooltip);

          projectRow.appendChild(projectBar);
        }

        projectsContainer.appendChild(projectRow);
      });

      sectionElement.appendChild(projectsContainer);
      sectionsContainer.appendChild(sectionElement);
    }
  }

  // Gestion du tooltip
  const tooltip = document.getElementById("tooltip");

  function showTooltip(event) {
    const projectId = parseInt(event.currentTarget.dataset.projectId);
    const project = projects.find((p) => p.id === projectId);

    if (!project) return;

    // Remplir le contenu du tooltip
    tooltip.innerHTML = `
          <div class="tooltip-title">${project.name}</div>
          ${
            project.description
              ? `<div class="tooltip-description">${project.description}</div>`
              : ""
          }
          <div class="tooltip-grid">
              <div>
                  <div><span class="tooltip-label">Début:</span> ${formatDate(
                    project.startDate
                  )}</div>
                  <div><span class="tooltip-label">Fin:</span> ${formatDate(
                    project.endDate
                  )}</div>
                  <div><span class="tooltip-label">Durée approximative:</span> ${
                    project.duration
                  }</div>
              </div>
              <div>
                  <div><span class="tooltip-label">Ressources humaines:</span> ${
                    project.resources || "Non spécifiées"
                  }</div>
                  <div><span class="tooltip-label">Catégorie:</span> ${
                    project.section
                  }</div>
              </div>
          </div>
      `;

    // Positionner le tooltip - NOUVELLE POSITION
    const rect = event.currentTarget.getBoundingClientRect();

    // Le rendre visible pour pouvoir calculer ses dimensions
    tooltip.classList.remove("hidden");
    tooltip.style.opacity = "1";
    tooltip.style.visibility = "visible";

    // Pour les jalons (qui sont plus petits), ajustez la position
    if (event.currentTarget.classList.contains("milestone")) {
      tooltip.style.top = `${rect.top + window.scrollY - 5}px`;
    } else {
      // Position au-dessus des barres de projet normales
      tooltip.style.top = `${
        rect.top + window.scrollY - tooltip.offsetHeight - 5
      }px`;
    }

    // Position horizontale centrée sur l'élément
    tooltip.style.left = `${
      rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2
    }px`;

    // Vérifier si le tooltip sort de l'écran à droite
    const rightEdge = tooltip.getBoundingClientRect().right;
    const windowWidth = window.innerWidth;
    if (rightEdge > windowWidth) {
      tooltip.style.left = `${windowWidth - tooltip.offsetWidth - 10}px`;
    }

    // Vérifier si le tooltip sort de l'écran à gauche
    const leftEdge = tooltip.getBoundingClientRect().left;
    if (leftEdge < 0) {
      tooltip.style.left = "10px";
    }

    // Gérer le clic en dehors pour les appareils tactiles
    document.addEventListener("click", hideTooltipOnClickOutside);
  }

  function hideTooltip() {
    tooltip.classList.add("hidden");
  }

  function hideTooltipOnClickOutside(event) {
    if (
      !tooltip.contains(event.target) &&
      !event.target.classList.contains("project-bar") &&
      !event.target.classList.contains("milestone")
    ) {
      hideTooltip();
      document.removeEventListener("click", hideTooltipOnClickOutside);
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
    // Initialiser le premier diagramme (historique)
    generateTimeline("historic-gantt");
    generateGanttChart(historicProjects, "historic-gantt");

    // Initialiser le second diagramme (futur)
    generateTimeline("future-gantt");
    generateGanttChart(upcomingProjects, "future-gantt");

    // Configurer la navigation
    setupNavigation();
  }

  // Lancer l'initialisation
  initializeGanttCharts();
});
