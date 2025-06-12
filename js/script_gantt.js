document.addEventListener("DOMContentLoaded", function () {
  // Données des projets
  const projects = [
    {
      id: 1,
      name: "Dolibarr CRM",
      startDate: new Date(2022, 7, 2), //2 aout 2022 au 10/01/2025
      endDate: new Date(2025, 0, 10),
      duration: "600 jours",
      resources:
        "Mélina, Lauryn, laetitia, maeva sur https://crm-neo-sphere.fr/",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-crm",
      completed: false, // Ajout du statut de completion
      description:
        "Mise en place d'un CRM pour la gestion complète des prospects et clients. Intégration de modules de suivi commercial, d'automatisation des tâches et des communications avec les clients.",
    },
    {
      id: 2,
      name: "Dolibarr Prospect",
      startDate: new Date(2021, 5, 1),
      endDate: new Date(2025, 0, 10),
      duration: "1047 jours",
      resources: "Mélina, Lauryn, laetitia, maeva",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-prospect",
      completed: false,
      description:
        "Système de gestion des prospects et des opportunités commerciales. Permet de suivre le cycle de vente complet, de la prospection initiale à la conversion client.",
    },
    {
      id: 3,
      name: "Dolibarr facturation",
      startDate: new Date(2021, 1, 22),
      endDate: new Date(2025, 0, 10),
      duration: "600 jours environ",
      resources: "Romuald, maeva",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-facturation",
      completed: true, // Marqué comme terminé
      description:
        "Module de facturation électronique avec gestion des factures, devis, bons de commande et règlements. Intègre un système de relances automatisées pour les paiements en retard.",
    },
    {
      id: 4,
      name: "Dolibarr Campus",
      startDate: new Date(2024, 7, 1),
      endDate: new Date(2025, 2, 25),
      duration: "237 jours",
      resources: "Melina, sabine, charlotte",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-campus",
      completed: false,
      description:
        "Adaptation du système Dolibarr pour la gestion des campus et centres de formation, incluant le suivi des étudiants, des cours et la gestion des ressources pédagogiques.",
    },
    {
      id: 5,
      name: "Dolibarr fusionné",
      startDate: new Date(2025, 0, 13),
      endDate: new Date(2026, 2, 26),
      duration: "104 jours",
      resources: "ADT - https://gestion.academie-tourisme.fr/",
      section: "Historique Dolibarr",
      cssClass: "dolibarr-fusionnee",
      completed: false,
      description:
        "Version fusionnée intégrant tous les modules Dolibarr déployés pour ADT. Centralisation et harmonisation des différents systèmes pour une gestion globale.",
    },
    {
      id: 6,
      name: "Crème",
      startDate: new Date(2021, 6, 30),
      endDate: new Date(2022, 6, 15),
      duration: "351 jours",
      resources: "",
      section: "Historique Projets Eureka",
      cssClass: "creme",
      completed: true, // Marqué comme terminé
      description:
        "Projet Crème développé pour le secteur cosmétique, incluant la gestion des formulations, le suivi de production et la traçabilité des ingrédients.",
    },
    {
      id: 7,
      name: "Ypareo",
      startDate: new Date(2024, 3, 22),
      endDate: new Date(2024, 4, 7),
      duration: "17 jours",
      resources: "",
      section: "Historique Projets Eureka",
      cssClass: "ypareo",
      completed: true, // Marqué comme terminé
      description:
        "Intégration avec la plateforme Ypareo pour la gestion et le suivi de l'apprentissage et de la formation professionnelle.",
    },
    {
      id: 8,
      name: "Pepit",
      startDate: new Date(2023, 5, 17),
      endDate: new Date(2024, 1, 6),
      duration: "205 jours",
      resources: "",
      section: "Historique Projets Eureka",
      cssClass: "pepit",
      completed: true, // Marqué comme terminé
      description:
        "Projet Pepit dédié aux startups innovantes, incluant des outils de gestion de projets agiles et de suivi d'avancement.",
    },
    // Ajout du prévisionnel
    {
      id: 9,
      name: "Livraison base test définitive",
      startDate: new Date(2025, 2, 15), // 15 mars 2025 – 30 avril 2025
      endDate: new Date(2025, 3, 30),
      duration: "5 jours",
      resources: "Équipe technique + Admin ADT",
      section: "Planning de déploiement",
      cssClass: "planning-test",
      completed: false,
      description:
        "Finalisation et livraison de la base de test complète pour validation sur le dolibarr de test :https://dolibarrvierge19.e-learning-neo-sphere.fr/.Cette étape marque le début de la phase de tests approfondis.",
    },
    {
      id: 10,
      name: "Phase pré-test",
      startDate: new Date(2025, 3, 5), // 5 mai 2025 – 15 juin 2025
      endDate: new Date(2025, 5, 15),
      duration: "1 mois environ",
      resources: "Hélène, Olivier, Equipe Technique",
      section: "Planning de déploiement",
      cssClass: "planning-pretest",
      completed: false,
      description:
        "Vérification préliminaire des fonctionnalités par une équipe restreinte. Identification des problèmes avant les tests élargis et resolution des problèmes critiques.",
    },
    {
      id: 11,
      name: "Débugs et ajustements (1)",
      startDate: new Date(2025, 5, 15), // 15 juin 2025 – 14 juillet 2025
      endDate: new Date(2025, 6, 14),
      duration: "1 mois environ",
      resources: "Aurélien, Fanny, Caroline, Mélina",
      section: "Planning de déploiement",
      cssClass: "planning-debug",
      completed: false,
      description:
        "Première phase de correction des bugs et d'ajustements suite aux retours des pré-tests. Optimisation des performances et de l'Phase de test avec 4 référents d'activité du pôle commercial + Débugs et ajustements pour la V1.",
    },
    {
      id: 12,
      name: "Phase de test avec référents",
      startDate: new Date(2025, 4, 2), // 2 juin 2025
      endDate: new Date(2025, 4, 2),
      duration: "1 journée",
      resources: "Olivier Moncoudiol, André, matthieu, Hélene",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      completed: false,
      description:
        "Demo icademie pour le dolibarvierge et notre CRM. Comparaison éventuelle avec Salesforce",
    },
    {
      id: 13,
      name: "Congès",
      startDate: new Date(2025, 4, 2), // 14 juillet 2025 – 15 aout 2025
      endDate: new Date(2025, 4, 13),
      duration: "1 mois environ",
      resources: "ADT",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      completed: false,
      description:
        "Période estivale de congés pour l'équipe technique et les référents d'activité mais cette période peut être sujette à des tests ou des développements légers.",
    },
    {
      id: 14,
      name: "Formation des équipes Commerciales et Administratif",
      startDate: new Date(2025, 7, 18), // 18 aout 2025 –  31 aout 2025
      endDate: new Date(2025, 7, 31),
      duration: "12 jours environ",
      resources: "(8 BtoB + 2 GC + 3 BtoC + 2 admin",
      section: "Planning de déploiement",
      cssClass: "planning-debug-v1",
      completed: false,
      description:
        "Formation des équipes commerciales et administratif (15 personnes) - 1 journée par utilisateur, soit 3 groupes de 5 personnes – mise en place de référents dolibarr qui assureront aide et suivi. Un portail web dédiée sera à disposition.",
    },
    {
      id: 15,
      name: "Rentrée Septembre - deploiement de la V1",
      startDate: new Date(2025, 8, 1), // 1 juillet 2025
      endDate: new Date(2025, 8, 1),
      duration: "1 journée",
      resources: "ADT",
      section: "Planning de déploiement",
      cssClass: "planning-formation",
      completed: false,
      description:
        "Inauguration officielle de la version V1 du système Dolibarr. Lancement de la solution en environnement de production et début de la phase de support post-déploiement. Notifications tous canaux TEAMS",
    },
    {
      id: 16,
      name: "Fusion des systèmes BDD campus et CRM",
      startDate: new Date(2025, 8, 1), // debut septembre a mi-septembre 2025
      endDate: new Date(2025, 9, 15),
      duration: "15 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-debug-final",
      completed: false,
      description:
        "Fusion Bdd Campus avec le dolibarr principal gestion + Concertation avec Mélina pour l'integration par la Cyber-technique",
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
      completed: false,
      description:
        "Formation et sensibilisation des équipes campus et pédagogie à l'utilisation du système Dolibarr. Mise en place de sessions de formation pour assurer une transition fluide vers le nouvel outil.",
    },
    //rajout ISP + GESTMAX + API + CSS du dolibarr
    {
      id: 22, // Corrigé l'ID dupliqué (17 -> 22)
      name: "Formulaires Web et liaisons webhook",
      startDate: new Date(2025, 2, 24),
      endDate: new Date(2025, 4, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & améliorations",
      cssClass: "dev-cybertechnique",
      completed: false,
      description:
        "Développement de formulaires web interactifs et mise en place des webhooks pour l'intégration en temps réel avec les systèmes externes.",
    },
    {
      id: 18,
      name: "Module Pré-opportunité",
      startDate: new Date(2025, 1, 1),
      endDate: new Date(2025, 4, 14),
      duration: "2 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: false,
      description:
        "Création d'un module spécifique pour la gestion des pré-opportunités commerciales, permettant de qualifier les leads avant leur conversion en opportunités.",
    },
    {
      id: 19,
      name: "ISP et correspondance des champs",
      startDate: new Date(2025, 1, 18),
      endDate: new Date(2025, 6, 1),
      duration: "3 mois environ",
      resources: "Équipe technique - André & Hélene",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: true, // Marqué comme terminé selon la description
      description:
        "Développement du système d'intégration ISP et mise en place des correspondances de champs entre les différentes plateformes pour assurer la cohérence des données. TACHES TERMINÉES",
    },
    {
      id: 20,
      name: "Liaisons API GESTMAX + maformation.fr + je-change-de-metier.fr",
      startDate: new Date(2025, 3, 14),
      endDate: new Date(2025, 5, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: false,
      description:
        "Développement des connecteurs API pour l'intégration avec GESTMAX et les plateformes de formation en ligne, permettant la synchronisation automatique des données.",
    },
    {
      id: 21,
      name: "Developpement interne dolibarr : modules personnalisés",
      startDate: new Date(2024, 9, 5),
      endDate: new Date(2025, 5, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: false,
      description:
        "Travaux de personnalisation et d'optimisation du cœur de Dolibarr pour répondre aux besoins spécifiques de l'organisation. Développement de modules sur mesure.",
    },
  ];

  // Création des deux ensembles de données
  const historicProjects = projects.filter((project) => project.id <= 8);
  const upcomingProjects = projects.filter((project) => project.id >= 9);

  // Paramètres du diagramme pour le premier diagramme (historique)
  const historicMinDate = new Date(2021, 0, 1); // 1er janvier 2021
  const historicMaxDate = new Date(2027, 11, 31); // 31 décembre 2027
  const historicTotalDuration = historicMaxDate - historicMinDate;

  // Paramètres du diagramme pour le second diagramme (futur)
  const futureMinDate = new Date(2025, 1, 1); // 1er février 2025
  const futureMaxDate = new Date(2025, 11, 31); // 31 décembre 2025
  const futureTotalDuration = futureMaxDate - futureMinDate;

  const today = new Date(); // Date du jour

  // Variable pour suivre le projet actuellement affiché
  let currentlyDisplayedProjectId = null;

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

  // Fonction pour calculer position et largeur des barres selon le diagramme
  function calculatePosition(startDate, endDate, containerId) {
    // Utiliser les paramètres appropriés selon le diagramme
    let minDate, totalDuration;

    if (containerId === "historic-gantt") {
      minDate = historicMinDate;
      totalDuration = historicTotalDuration;
    } else {
      minDate = futureMinDate;
      totalDuration = futureTotalDuration;
    }

    const start = ((startDate - minDate) / totalDuration) * 100;
    const width = ((endDate - startDate) / totalDuration) * 100;
    return { start, width };
  }

  // Fonction pour créer un badge "Terminé"
  function createCompletedBadge() {
    const badge = document.createElement("div");
    badge.className = "completed-badge";
    badge.innerHTML = "✓ Terminé";
    return badge;
  }

  // Génération des trimestres pour l'axe temporel
  function generateTimeline(containerId) {
    const timelineElement = document.querySelector(`#${containerId} .timeline`);

    if (!timelineElement) {
      console.error(`Timeline dans #${containerId} non trouvée`);
      return;
    }

    // Utiliser les paramètres appropriés selon le diagramme
    let minDate, maxDate;

    if (containerId === "historic-gantt") {
      minDate = historicMinDate;
      maxDate = historicMaxDate;
    } else {
      minDate = futureMinDate;
      maxDate = futureMaxDate;
    }

    let currentDate = new Date(minDate);

    while (currentDate < maxDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const quarter = Math.floor(month / 3) + 1;

      const position = ((currentDate - minDate) / (maxDate - minDate)) * 100;

      const markerElement = document.createElement("div");
      markerElement.className = "quarter-marker";
      markerElement.textContent = `T${quarter} ${year}`;
      markerElement.style.left = `${position}%`;

      timelineElement.appendChild(markerElement);

      // Avancer au trimestre suivant
      currentDate = new Date(year, month + 3, 1);
    }

    // Ajouter le marqueur pour la date du jour si elle est dans la plage du diagramme
    addTodayMarker(timelineElement, containerId);
  }

  // Fonction pour ajouter le marqueur de la date du jour
  function addTodayMarker(timelineElement, containerId) {
    // Déterminer les dates limites selon le diagramme
    let minDate, maxDate, totalDuration;

    if (containerId === "historic-gantt") {
      minDate = historicMinDate;
      maxDate = historicMaxDate;
      totalDuration = historicTotalDuration;
    } else {
      minDate = futureMinDate;
      maxDate = futureMaxDate;
      totalDuration = futureTotalDuration;
    }

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
          const position = calculatePosition(
            project.startDate,
            project.startDate,
            containerId
          ).start;

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

          // Ajouter le badge "Terminé" si le projet est terminé
          if (project.completed) {
            const completedBadge = createCompletedBadge();
            milestone.appendChild(completedBadge);
            milestone.classList.add("project-completed");
          }

          // Ajouter le gestionnaire d'événement au clic
          milestone.addEventListener("click", toggleTooltip);

          projectRow.appendChild(milestone);
        } else if (projectExtendsFuture && project.startDate < today) {
          // Cas où le projet est en cours (chevauche la date du jour)
          // Créer deux barres: une pour la partie passée et une pour la partie future

          // 1. Barre pour la partie passée (jusqu'à aujourd'hui)
          const pastBarPosition = calculatePosition(
            project.startDate,
            today,
            containerId
          );
          const pastBar = document.createElement("div");
          pastBar.className = `project-bar ${project.cssClass} project-past`;
          pastBar.textContent = project.name;
          pastBar.style.left = `${pastBarPosition.start}%`;
          pastBar.style.width = `${pastBarPosition.width}%`;
          pastBar.dataset.projectId = project.id;

          // 2. Barre pour la partie future (à partir d'aujourd'hui)
          const futureBarPosition = calculatePosition(
            today,
            project.endDate,
            containerId
          );

          // Déterminer minDate selon le conteneur
          let minDate =
            containerId === "historic-gantt" ? historicMinDate : futureMinDate;
          let totalDuration =
            containerId === "historic-gantt"
              ? historicTotalDuration
              : futureTotalDuration;

          const futureBar = document.createElement("div");
          futureBar.className = `project-bar ${project.cssClass} project-future`;
          futureBar.style.left = `${
            ((today - minDate) / totalDuration) * 100
          }%`;
          futureBar.style.width = `${futureBarPosition.width}%`;
          futureBar.dataset.projectId = project.id;

          // Ajouter le badge "Terminé" si le projet est terminé (sur la première barre seulement)
          if (project.completed) {
            const completedBadge = createCompletedBadge();
            pastBar.appendChild(completedBadge);
            pastBar.classList.add("project-completed");
            futureBar.classList.add("project-completed");
          }

          // Ajouter les gestionnaires d'événements au clic
          pastBar.addEventListener("click", toggleTooltip);
          futureBar.addEventListener("click", toggleTooltip);

          projectRow.appendChild(pastBar);
          projectRow.appendChild(futureBar);
        } else if (project.startDate > today) {
          // Projet entièrement dans le futur
          const { start, width } = calculatePosition(
            project.startDate,
            project.endDate,
            containerId
          );

          const projectBar = document.createElement("div");
          projectBar.className = `project-bar ${project.cssClass} project-future`;
          projectBar.textContent = project.name;
          projectBar.style.left = `${start}%`;
          projectBar.style.width = `${width}%`;
          projectBar.dataset.projectId = project.id;

          // Ajouter le badge "Terminé" si le projet est terminé
          if (project.completed) {
            const completedBadge = createCompletedBadge();
            projectBar.appendChild(completedBadge);
            projectBar.classList.add("project-completed");
          }

          // Ajouter le gestionnaire d'événement au clic
          projectBar.addEventListener("click", toggleTooltip);

          projectRow.appendChild(projectBar);
        } else {
          // Projet entièrement dans le passé
          const { start, width } = calculatePosition(
            project.startDate,
            project.endDate,
            containerId
          );

          const projectBar = document.createElement("div");
          projectBar.className = `project-bar ${project.cssClass} project-past`;
          projectBar.textContent = project.name;
          projectBar.style.left = `${start}%`;
          projectBar.style.width = `${width}%`;
          projectBar.dataset.projectId = project.id;

          // Ajouter le badge "Terminé" si le projet est terminé
          if (project.completed) {
            const completedBadge = createCompletedBadge();
            projectBar.appendChild(completedBadge);
            projectBar.classList.add("project-completed");
          }

          // Ajouter le gestionnaire d'événement au clic
          projectBar.addEventListener("click", toggleTooltip);

          projectRow.appendChild(projectBar);
        }

        projectsContainer.appendChild(projectRow);
      });

      sectionElement.appendChild(projectsContainer);
      sectionsContainer.appendChild(sectionElement);
    }
  }

  // Fonction pour afficher/masquer le tooltip au clic
  function toggleTooltip(event) {
    const projectId = parseInt(event.currentTarget.dataset.projectId);

    // Si on clique sur le même projet et que le tooltip est déjà visible, on le cache
    if (
      currentlyDisplayedProjectId === projectId &&
      !tooltip.classList.contains("hidden")
    ) {
      hideTooltip();
      return;
    }

    // Sinon, on affiche le tooltip pour ce projet
    currentlyDisplayedProjectId = projectId;
    showTooltip(projectId);

    // Empêcher la propagation du clic pour éviter que le document.addEventListener ne se déclenche immédiatement
    event.stopPropagation();
  }

  // Fonction modifiée pour afficher le tooltip
  function showTooltip(projectId) {
    const project = projects.find((p) => p.id === projectId);

    if (!project) return;

    // Création d'un overlay pour l'arrière-plan
    let overlay = document.getElementById("tooltip-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "tooltip-overlay";
      overlay.className = "tooltip-overlay";
      document.body.appendChild(overlay);
    }
    overlay.classList.add("visible");

    // Récupérer le tooltip
    const tooltip = document.getElementById("tooltip");

    // Ajouter le statut de completion dans le tooltip
    const completionStatus = project.completed
      ? '<div class="tooltip-status completed">✓ Projet terminé</div>'
      : '<div class="tooltip-status in-progress">🔄 En cours</div>';

    // Remplir le contenu du tooltip avec un bouton de fermeture
    tooltip.innerHTML = `
      <div class="tooltip-header">
        <div class="tooltip-title">${project.name}</div>
        <button class="tooltip-close-btn" aria-label="Fermer">&#10005;</button>
      </div>
      ${completionStatus}
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

    // Position fixe dans la page - au centre
    tooltip.classList.remove("hidden");
    tooltip.style.opacity = "1";
    tooltip.style.visibility = "visible";

    // Position centrale fixe
    tooltip.style.top = "50%";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translate(-50%, -50%)";

    // Si on est en mode mobile, ajuster la largeur
    if (window.innerWidth < 768) {
      tooltip.style.width = "90%";
      tooltip.style.maxWidth = "none";
    } else {
      tooltip.style.width = "380px";
      tooltip.style.maxWidth = "380px";
    }

    // Ajouter un gestionnaire pour le bouton de fermeture
    const closeButton = tooltip.querySelector(".tooltip-close-btn");
    if (closeButton) {
      closeButton.addEventListener("click", function (e) {
        hideTooltip();
        e.stopPropagation();
      });
    }

    // Ajouter un gestionnaire pour fermer le tooltip quand on clique ailleurs
    document.addEventListener("click", handleOutsideClick);
    overlay.addEventListener("click", hideTooltip);
  }

  // Gestionnaire de clic en dehors du tooltip
  function handleOutsideClick(e) {
    const tooltip = document.getElementById("tooltip");
    if (
      !tooltip.contains(e.target) &&
      !e.target.classList.contains("project-bar") &&
      !e.target.classList.contains("milestone")
    ) {
      hideTooltip();
      document.removeEventListener("click", handleOutsideClick);
    }
  }

  // Fonction pour masquer le tooltip
  function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
    tooltip.classList.add("hidden");
    tooltip.style.opacity = "0";
    tooltip.style.visibility = "hidden";
    currentlyDisplayedProjectId = null;

    // Masquer aussi l'overlay
    const overlay = document.getElementById("tooltip-overlay");
    if (overlay) {
      overlay.classList.remove("visible");
    }

    // Supprimer l'écouteur d'événement
    document.removeEventListener("click", handleOutsideClick);
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

        // Masquer tout tooltip ouvert
        hideTooltip();

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
