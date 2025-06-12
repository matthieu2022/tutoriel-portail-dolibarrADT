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
      progress: 85, // Pourcentage d'avancement
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
      progress: 75,
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
      progress: 100, // Terminé
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
      progress: 60,
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
      progress: 15,
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
      progress: 100,
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
      progress: 100,
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
      progress: 100,
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
      completed: true,
      progress: 100,
      description:
        "Finalisation et livraison de la BDD fusionnée complète pour validation sur le dolibarr de test :https://dolibarrvierge19.e-learning-neo-sphere.fr/.Cette étape marque le début de la phase de tests approfondis.",
    },
    {
      id: 10,
      name: "Phase pré-test",
      startDate: new Date(2025, 3, 5), // 5 mai 2025 – 15 juin 2025
      endDate: new Date(2025, 8, 15),
      duration: "1 mois environ",
      resources: "Hélène, Olivier, Equipe Technique",
      section: "Planning de déploiement",
      cssClass: "planning-pretest",
      completed: false,
      progress: 40,
      description:
        "Vérification préliminaire des fonctionnalités par une équipe restreinte. Identification des problèmes avant les tests élargis et resolution des problèmes critiques.",
    },
    {
      id: 11,
      name: "Débugs et ajustements (1)",
      startDate: new Date(2025, 5, 15), // 15 juin 2025 – 14 juillet 2025
      endDate: new Date(2025, 8, 15),
      duration: "1 mois environ",
      resources: "Aurélien, Fanny, Caroline, Mélina",
      section: "Planning de déploiement",
      cssClass: "planning-debug",
      completed: false,
      progress: 40,
      description:
        "Première phase de correction des bugs et d'ajustements suite aux retours des pré-tests. Optimisation des performances et de l'Phase de test avec 4 référents d'activité du pôle commercial + Débugs et ajustements pour la V1.",
    },
    {
      id: 12,
      name: "1ere démo pour le dolibarvierge - prez Icademie",
      startDate: new Date(2025, 4, 2), // 2 juin 2025
      endDate: new Date(2025, 4, 2),
      duration: "1 journée",
      resources: "Olivier Moncoudiol, André, matthieu, Hélene",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      completed: true,
      progress: 100,
      description:
        "Demo icademie pour le dolibarvierge et notre CRM. Comparaison éventuelle avec Salesforce",
    },
    {
      id: 13,
      name: "Congès entreprise été 2025",
      startDate: new Date(2025, 6, 2), // 14 juillet 2025 – 15 aout 2025
      endDate: new Date(2025, 7, 20),
      duration: "2 mois environ",
      resources: "ADT",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      completed: false,
      progress: 0,
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
      progress: 0,
      description:
        "Formation des équipes commerciales et administratif (15 personnes) - 1 journée par utilisateur, soit 3 groupes de 5 personnes – mise en place de référents dolibarr qui assureront aide et suivi. Un portail web dédiée sera à disposition.",
    },
    {
      id: 15,
      name: "Deploiement de la V1",
      startDate: new Date(2025, 9, 1), // 1 juillet 2025
      endDate: new Date(2025, 9, 1),
      duration: "1 journée",
      resources: "ADT",
      section: "Planning de déploiement",
      cssClass: "planning-formation",
      completed: false,
      progress: 0,
      description:
        "Inauguration officielle de la version V1 du système Dolibarr. Lancement de la solution en environnement de production et début de la phase de support post-déploiement. Notifications tous canaux TEAMS",
    },
    {
      id: 16,
      name: "Fusion des systèmes BDD campus et CRM",
      startDate: new Date(2024, 9, 10), // debut septembre a mi-septembre 2025
      endDate: new Date(2024, 11, 23),
      duration: "15 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-debug-final",
      completed: false,
      progress: 0,
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
      progress: 0,
      description:
        "Formation et sensibilisation des équipes campus et pédagogie à l'utilisation du système Dolibarr. pts à abordés : portail formateur / documentation formateurs etc... .",
    },

    {
      id: 22,
      name: "Formulaires Web et liaisons webhook",
      startDate: new Date(2025, 2, 24),
      endDate: new Date(2025, 4, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & améliorations",
      cssClass: "dev-cybertechnique",
      completed: true,
      progress: 100,
      description:
        "Développement de formulaires web interactifs ADT et mise en place des webhooks pour l'intégration en temps réel avec Dolibarr (https://gestion.academie-tourisme.fr/).",
    },

    {
      id: 18,
      name: "Module Pré-opportunité",
      startDate: new Date(2025, 1, 1),
      endDate: new Date(2025, 6, 14),
      duration: "2 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: false,
      progress: 95, // Pourcentage d'avancement
      description:
        "Création d'un module spécifique pour la gestion des pré-opportunités commerciales, permettant de qualifier les leads avant leur conversion en opportunités. Dev en cours de finalisation pour integration des leads du module dans le projet et tiers/contacts",
    },
    {
      id: 19,
      name: "ISP et correspondance des champs",
      startDate: new Date(2025, 1, 18),
      endDate: new Date(2025, 5, 10),
      duration: "3 mois environ",
      resources: "Équipe technique - André & Hélene",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: true, // Marqué comme terminé selon la description
      progress: 100, // Pourcentage d'avancement
      description:
        "Développement du système d'intégration ISP et mise en place des correspondances de champs entre les différentes plateformes pour assurer la cohérence des données. TACHES TERMINÉES",
    },
    {
      id: 20,
      name: "Liaisons API maformation.fr",
      startDate: new Date(2025, 3, 14),
      endDate: new Date(2025, 5, 4),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: true,
      progress: 100, // Pourcentage d'avancement
      description:
        "Développement des connecteurs API pour l'intégration des leads issus de GETMYLEADS.",
    },

    {
      id: 23,
      name: "Liaisons API GESTMAX",
      startDate: new Date(2025, 3, 14),
      endDate: new Date(2025, 6, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: false,
      progress: 80, // Pourcentage d'avancement
      description:
        "Développement des connecteurs API pour l'intégration avec GESTMAX - etat d'avancement 80% - rapatriement des pieces jointes => dev",
    },

    {
      id: 24,
      name: "Liaisons API je-change-de-metier.fr",
      startDate: new Date(2025, 6, 14),
      endDate: new Date(2025, 7, 14),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: false,
      progress: 0, // Pourcentage d'avancement
      description:
        "Développement des connecteurs API pour l'intégration des leads issus de je-change-de-metier.fr - contact a prendre pour les spécifications techniques.",
    },

    {
      id: 21,
      name: "Developpement interne dolibarr : modules personnalisés",
      startDate: new Date(2024, 9, 5),
      endDate: new Date(2025, 7, 26),
      duration: "1 mois environ",
      resources: "Équipe technique - André",
      section: "Developpement & amélioration",
      cssClass: "dev-cybertechnique",
      completed: false,
      progress: 65, // Pourcentage d'avancement
      description:
        "Travaux de personnalisation et d'optimisation du cœur de Dolibarr pour répondre aux besoins spécifiques de l'organisation. Développement de modules sur mesure.",
    },

    {
      id: 25,
      name: "Phase de test avec 4 référents d'activité du pôle commercial - keyUsers",
      startDate: new Date(2025, 7, 25), // 2 juin 2025
      endDate: new Date(2025, 8, 10),
      duration: "10 journées environ",
      resources: "Fanny, Caroline, Mélina, autres",
      section: "Planning de déploiement",
      cssClass: "planning-test-referents",
      completed: true,
      progress: 100,
      description:
        "Demo icademie pour le dolibarvierge et notre CRM. Comparaison éventuelle avec Salesforce",
    },
  ];

  // Création des deux ensembles de données
  const historicProjects = projects.filter((project) => project.id <= 8);
  const upcomingProjects = projects.filter((project) => project.id >= 9);

  // Paramètres du diagramme pour le premier diagramme (historique)
  const historicMinDate = new Date(2021, 0, 1); // 1er janvier 2021
  const historicMaxDate = new Date(2027, 11, 31); // 31 décembre 2027
  const historicTotalDuration = historicMaxDate - historicMinDate;

  // Paramètres du diagramme pour le second diagramme (futur) - période étendue
  const futureMinDate = new Date(2025, 0, 1); // 1er janvier 2025 (corrigé)
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

  // Fonction pour créer la barre de progression et le badge de pourcentage
  function createProgressElements(project) {
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";

    // Barre de progression
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = `${project.progress}%`;

    // Badge de pourcentage
    const progressBadge = document.createElement("div");
    progressBadge.className = "progress-badge";
    progressBadge.textContent = `${project.progress}%`;

    // Couleur du badge selon le pourcentage
    if (project.progress === 100) {
      progressBadge.classList.add("completed");
    } else if (project.progress >= 75) {
      progressBadge.classList.add("high");
    } else if (project.progress >= 50) {
      progressBadge.classList.add("medium");
    } else if (project.progress >= 25) {
      progressBadge.classList.add("low");
    } else {
      progressBadge.classList.add("very-low");
    }

    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressBadge);

    return progressContainer;
  }

  // Fonction pour créer un badge "Terminé" (fonction manquante)
  function createCompletedBadge() {
    const badge = document.createElement("div");
    badge.className = "completed-badge";
    badge.innerHTML = "✓ Terminé";
    return badge;
  }

  // Génération des marqueurs temporels pour l'axe temporel
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
      generateQuarterlyTimeline(timelineElement, minDate, maxDate);
    } else {
      minDate = futureMinDate;
      maxDate = futureMaxDate;
      generateDetailedTimeline(timelineElement, minDate, maxDate);
    }

    // Ajouter le marqueur pour la date du jour si elle est dans la plage du diagramme
    addTodayMarker(timelineElement, containerId);
  }

  // Timeline par trimestres pour l'historique (longue période)
  function generateQuarterlyTimeline(timelineElement, minDate, maxDate) {
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
  }

  // Timeline détaillée avec mois et semaines pour le planning (courte période)
  function generateDetailedTimeline(timelineElement, minDate, maxDate) {
    // Créer la structure de la timeline détaillée
    timelineElement.innerHTML = `
      <div class="months-bar"></div>
      <div class="weeks-bar"></div>
    `;

    const monthsBar = timelineElement.querySelector(".months-bar");
    const weeksBar = timelineElement.querySelector(".weeks-bar");

    // Générer les marqueurs de mois
    generateMonthMarkers(monthsBar, minDate, maxDate);

    // Générer les marqueurs de semaines
    generateWeekMarkers(weeksBar, minDate, maxDate);
  }

  // Génération des marqueurs de mois
  function generateMonthMarkers(monthsBar, minDate, maxDate) {
    const monthNames = [
      "Janv",
      "Févr",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil",
      "Août",
      "Sept",
      "Oct",
      "Nov",
      "Déc",
    ];

    let currentDate = new Date(minDate.getFullYear(), minDate.getMonth(), 1);

    while (currentDate < maxDate) {
      const nextMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      );
      const monthEnd = nextMonth > maxDate ? maxDate : nextMonth;

      const startPosition =
        ((currentDate - minDate) / (maxDate - minDate)) * 100;
      const width = ((monthEnd - currentDate) / (maxDate - minDate)) * 100;

      const monthMarker = document.createElement("div");
      monthMarker.className = "month-marker";
      monthMarker.textContent = `${
        monthNames[currentDate.getMonth()]
      } ${currentDate.getFullYear()}`;
      monthMarker.style.left = `${startPosition}%`;
      monthMarker.style.width = `${width}%`;

      monthsBar.appendChild(monthMarker);

      currentDate = nextMonth;
    }
  }

  // Génération des marqueurs de semaines
  function generateWeekMarkers(weeksBar, minDate, maxDate) {
    // Commencer au lundi de la première semaine
    let currentDate = new Date(minDate);
    const dayOfWeek = currentDate.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    currentDate.setDate(currentDate.getDate() + mondayOffset);

    while (currentDate < maxDate) {
      const position = ((currentDate - minDate) / (maxDate - minDate)) * 100;

      if (position >= 0 && position <= 100) {
        const weekMarker = document.createElement("div");
        weekMarker.className = "week-marker";
        weekMarker.style.left = `${position}%`;

        // Ajouter la date pour les premières semaines du mois
        if (currentDate.getDate() <= 7) {
          weekMarker.title = `Semaine du ${formatDate(currentDate)}`;
        }

        weeksBar.appendChild(weekMarker);
      }

      // Avancer d'une semaine
      currentDate.setDate(currentDate.getDate() + 7);
    }
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

        // Calculer la durée du projet en jours pour améliorer la visibilité des projets courts
        const projectDurationDays = Math.ceil(
          (project.endDate - project.startDate) / (1000 * 60 * 60 * 24)
        );
        const isShortProject = projectDurationDays <= 30; // Projet de moins d'un mois

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

          // Ajouter le badge de pourcentage pour les jalons
          const progressBadge = document.createElement("div");
          progressBadge.className = "progress-badge milestone-progress";
          progressBadge.textContent = `${project.progress}%`;

          if (project.progress === 100) {
            progressBadge.classList.add("completed");
          } else if (project.progress >= 75) {
            progressBadge.classList.add("high");
          } else if (project.progress >= 50) {
            progressBadge.classList.add("medium");
          } else if (project.progress >= 25) {
            progressBadge.classList.add("low");
          } else {
            progressBadge.classList.add("very-low");
          }

          milestone.appendChild(progressBadge);

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

          // Ajouter une classe spéciale pour les projets courts
          if (isShortProject) {
            pastBar.classList.add("short-project");
          }

          pastBar.textContent = project.name;
          pastBar.style.left = `${pastBarPosition.start}%`;
          pastBar.style.width = `${Math.max(pastBarPosition.width, 2)}%`; // Largeur minimale
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

          if (isShortProject) {
            futureBar.classList.add("short-project");
          }

          futureBar.style.left = `${
            ((today - minDate) / totalDuration) * 100
          }%`;
          futureBar.style.width = `${Math.max(futureBarPosition.width, 2)}%`;
          futureBar.dataset.projectId = project.id;

          // Ajouter les éléments de progression (sur la première barre seulement)
          const progressElements = createProgressElements(project);
          pastBar.appendChild(progressElements);

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
        } else {
          // Projet entièrement dans le futur ou le passé
          const { start, width } = calculatePosition(
            project.startDate,
            project.endDate,
            containerId
          );

          const projectBar = document.createElement("div");
          const timeClass =
            project.startDate > today ? "project-future" : "project-past";
          projectBar.className = `project-bar ${project.cssClass} ${timeClass}`;

          // Ajouter une classe spéciale pour les projets courts
          if (isShortProject) {
            projectBar.classList.add("short-project");
          }

          projectBar.textContent = project.name;
          projectBar.style.left = `${start}%`;
          projectBar.style.width = `${Math.max(width, 2)}%`; // Largeur minimale de 2%
          projectBar.dataset.projectId = project.id;

          // Ajouter les éléments de progression
          const progressElements = createProgressElements(project);
          projectBar.appendChild(progressElements);

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
      !document.getElementById("tooltip").classList.contains("hidden")
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

  // Fonction pour obtenir le statut textuel selon le pourcentage
  function getProgressStatus(progress) {
    if (progress === 100) {
      return { text: "✅ Terminé", class: "completed" };
    } else if (progress >= 75) {
      return { text: "🚀 Presque terminé", class: "high" };
    } else if (progress >= 50) {
      return { text: "⚡ En bonne voie", class: "medium" };
    } else if (progress >= 25) {
      return { text: "🔄 En cours", class: "low" };
    } else if (progress > 0) {
      return { text: "🏗️ Démarré", class: "very-low" };
    } else {
      return { text: "⏳ Pas commencé", class: "not-started" };
    }
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

    // Obtenir le statut de progression
    const status = getProgressStatus(project.progress);

    // Ajouter le statut de completion dans le tooltip (étiquette Terminé/En cours)
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
      <div class="tooltip-progress-section">
        <div class="tooltip-progress-bar">
          <div class="tooltip-progress-fill" style="width: ${
            project.progress
          }%"></div>
          <span class="tooltip-progress-text">${project.progress}%</span>
        </div>
        <div class="tooltip-status ${status.class}">${status.text}</div>
      </div>
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
      tooltip.style.width = "400px";
      tooltip.style.maxWidth = "400px";
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
