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
    {
      id: 9,
      name: "Livraison base test définitive",
      startDate: new Date(2025, 3, 15),
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
      startDate: new Date(2025, 4, 5),
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
      startDate: new Date(2025, 6, 15),
      endDate: new Date(2025, 7, 14),
      duration: "1 mois environ",
      resources: "Aurélien, Fanny, Caroline, Mélina",
      section: "Planning de déploiement",
      cssClass: "planning-debug",
      description:
        "Première phase de correction des bugs et d'ajustements suite aux retours des pré-tests. Optimisation des performances et de l'Phase de test avec 4 référents d'activité du pôle commercial + Débugs et ajustements pour la V1.",
    },
    {
      id: 12,
      name: "Phase de test avec référents",
      startDate: new Date(2025, 5, 2),
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
      startDate: new Date(2025, 5, 2),
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
      startDate: new Date(2025, 8, 18),
      endDate: new Date(2025, 8, 31),
      duration: "12 jours environ",
      resources: "(8 BtoB + 2 GC + 3 BtoC + 2 admin",
      section: "Planning de déploiement",
      cssClass: "planning-debug-v1",
      description:
        "Formation des équipes commerciales et administratif (15 personnes) - 1 journée par utilisateur, soit 3 groupes de 5 personnes – mise en place de référents dolibarr qui assureront aide et suivi. Un portail web dédiée sera à disposition.",
    },
    {
      id: 15,
      name: "Rentrée Septembre - deploiement de la V1",
      startDate: new Date(2025, 9, 1),
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
      startDate: new Date(2025, 9, 1),
      endDate: new Date(2025, 9, 15),
      duration: "15 jours",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-debug-final",
      description:
        "Fusion Bdd Campus avec le dolibarr principal gestion + Concertation avec Mélina pour l'integration par la Cyber-technique",
    },
    {
      id: 17,
      name: "Formation des équipes Campus et Pédagogie",
      startDate: new Date(2025, 10, 1),
      endDate: new Date(2025, 10, 15),
      duration: "1 jour",
      resources: "Équipe technique",
      section: "Planning de déploiement",
      cssClass: "planning-deployment",
      description:
        "Formation et sensibilisation des équipes campus et pédagogie à l'utilisation du système Dolibarr. Mise en place de sessions de formation pour assurer une transition fluide vers le nouvel outil.",
    },
    {
      id: 22,
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
      section: "Developpement & améliorations",
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
      section: "Developpement & améliorations",
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
      section: "Developpement & améliorations",
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
      section: "Developpement & améliorations",
      cssClass: "dev-cybertechnique",
      description:
        "Travaux de personnalisation et d'optimisation du cœur de Dolibarr pour répondre aux besoins spécifiques de l'organisation. Développement de modules sur mesure.",
    },
  ];

  // Création des deux ensembles de données
  const historicProjects = projects.filter((project) => project.id <= 8);
  const upcomingProjects = projects.filter((project) => project.id >= 9);

  // Paramètres du diagramme
  const historicMinDate = new Date(2021, 0, 1);
  const historicMaxDate = new Date(2027, 11, 31);
  const historicTotalDuration = historicMaxDate - historicMinDate;

  const futureMinDate = new Date(2025, 0, 1);
  const futureMaxDate = new Date(2025, 11, 31);
  const futureTotalDuration = futureMaxDate - futureMinDate;

  const today = new Date();
  let currentlyDisplayedProjectId = null;

  // Noms des mois en français
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  function formatDate(date) {
    return `${date
      .getDate()
      .toString()
      .padStart(
        2,
        "0"
      )}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
  }

  function calculatePosition(startDate, endDate, containerId) {
    let minDate, totalDuration;

    if (containerId === "historic-gantt") {
      minDate = historicMinDate;
      totalDuration = historicTotalDuration;
    } else {
      minDate = futureMinDate;
      totalDuration = futureTotalDuration;
    }

    const start = startDate instanceof Date ? startDate : new Date(startDate);
    const end = endDate instanceof Date ? endDate : new Date(endDate);

    const startPos = Math.max(0, ((start - minDate) / totalDuration) * 100);
    let width = Math.max(0.5, ((end - start) / totalDuration) * 100);

    // Ajuster la largeur si elle dépasse 100%
    if (startPos + width > 100) {
      width = 100 - startPos;
    }

    return { start: startPos, width: width };
  }

  function generateQuarterTimeline(timelineElement) {
    let currentDate = new Date(historicMinDate);

    while (currentDate < historicMaxDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const quarter = Math.floor(month / 3) + 1;

      const position =
        ((currentDate - historicMinDate) / historicTotalDuration) * 100;

      const markerElement = document.createElement("div");
      markerElement.className = "quarter-marker";
      markerElement.textContent = `T${quarter} ${year}`;
      markerElement.style.left = `${position}%`;

      timelineElement.appendChild(markerElement);
      currentDate = new Date(year, month + 3, 1);
    }
  }

  function generateDetailedTimeline(timelineElement) {
    const monthsBar = document.createElement("div");
    monthsBar.className = "months-bar";
    timelineElement.appendChild(monthsBar);

    const weeksBar = document.createElement("div");
    weeksBar.className = "weeks-bar";
    timelineElement.appendChild(weeksBar);

    for (let month = 0; month <= 11; month++) {
      const monthStart = new Date(2025, month, 1);
      const nextMonthStart = new Date(2025, month + 1, 1);
      const monthPosition =
        ((monthStart - futureMinDate) / futureTotalDuration) * 100;
      const monthWidth =
        ((nextMonthStart - monthStart) / futureTotalDuration) * 100;

      const monthMarker = document.createElement("div");
      monthMarker.className = "month-marker";
      monthMarker.textContent = monthNames[month];
      monthMarker.style.left = `${monthPosition}%`;
      monthMarker.style.width = `${monthWidth}%`;
      monthsBar.appendChild(monthMarker);

      // Génération des semaines
      let weekDate = new Date(monthStart);
      const monthEnd = new Date(nextMonthStart - 1);

      while (weekDate <= monthEnd) {
        const weekPosition =
          ((weekDate - futureMinDate) / futureTotalDuration) * 100;

        if (weekPosition >= 0 && weekPosition <= 100) {
          const weekMarker = document.createElement("div");
          weekMarker.className = "week-marker";
          weekMarker.style.left = `${weekPosition}%`;
          weeksBar.appendChild(weekMarker);
        }

        weekDate.setDate(weekDate.getDate() + 7);
      }
    }
  }

  function generateTimeline(containerId) {
    const timelineElement = document.querySelector(`#${containerId} .timeline`);
    if (!timelineElement) return;

    timelineElement.innerHTML = "";

    if (containerId === "historic-gantt") {
      generateQuarterTimeline(timelineElement);
    } else {
      generateDetailedTimeline(timelineElement);
    }

    addTodayMarker(timelineElement, containerId);
  }

  function addTodayMarker(timelineElement, containerId) {
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

    if (today >= minDate && today <= maxDate) {
      const position = ((today - minDate) / totalDuration) * 100;

      const todayMarker = document.createElement("div");
      todayMarker.className = "today-marker";
      todayMarker.style.left = `${position}%`;

      const todayLabel = document.createElement("div");
      todayLabel.className = "today-label";
      todayLabel.textContent = `Aujourd'hui (${formatDate(today)})`;
      todayMarker.appendChild(todayLabel);

      timelineElement.appendChild(todayMarker);
      addTodayLine(position, containerId);
    }
  }

  function addTodayLine(position, containerId) {
    const ganttContainer = document.getElementById(containerId);
    if (!ganttContainer) return;

    const existingLine = ganttContainer.querySelector(".today-line");
    if (existingLine) {
      existingLine.remove();
    }

    const todayLine = document.createElement("div");
    todayLine.className = "today-line";
    todayLine.style.left = `${position}%`;
    todayLine.style.height = "100%";
    ganttContainer.appendChild(todayLine);
  }

  function generateGanttChart(projectsData, containerId) {
    const sectionsContainer = document.querySelector(
      `#${containerId} .sections-container`
    );
    if (!sectionsContainer) return;

    sectionsContainer.innerHTML = "";

    const sections = projectsData.reduce((acc, project) => {
      if (!acc[project.section]) {
        acc[project.section] = [];
      }
      acc[project.section].push(project);
      return acc;
    }, {});

    Object.entries(sections).forEach(([sectionName, sectionProjects]) => {
      const sectionElement = document.createElement("div");
      sectionElement.className = "section";
      sectionElement.dataset.section = sectionName;

      const sectionTitle = document.createElement("h3");
      sectionTitle.className = "section-title";
      sectionTitle.textContent = sectionName;
      sectionElement.appendChild(sectionTitle);

      const projectsContainer = document.createElement("div");
      projectsContainer.className = "projects";

      sectionProjects.forEach((project) => {
        const projectRow = document.createElement("div");
        projectRow.className = "project-row";

        const isMilestone =
          project.startDate.getTime() === project.endDate.getTime();
        const projectExtendsFuture = project.endDate > today;

        if (isMilestone) {
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

          const milestoneLabel = document.createElement("span");
          milestoneLabel.className = "milestone-label";
          milestoneLabel.textContent = project.name;
          milestone.appendChild(milestoneLabel);

          milestone.addEventListener("click", toggleTooltip);
          projectRow.appendChild(milestone);
        } else if (projectExtendsFuture && project.startDate < today) {
          // Partie passée
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

          // Partie future
          const futureBar = document.createElement("div");
          futureBar.className = `project-bar ${project.cssClass} project-future`;
          const futureStart =
            ((today -
              (containerId === "historic-gantt"
                ? historicMinDate
                : futureMinDate)) /
              (containerId === "historic-gantt"
                ? historicTotalDuration
                : futureTotalDuration)) *
            100;
          const futureWidth = calculatePosition(
            today,
            project.endDate,
            containerId
          ).width;

          futureBar.style.left = `${futureStart}%`;
          futureBar.style.width = `${futureWidth}%`;
          futureBar.dataset.projectId = project.id;

          pastBar.addEventListener("click", toggleTooltip);
          futureBar.addEventListener("click", toggleTooltip);

          projectRow.appendChild(pastBar);
          projectRow.appendChild(futureBar);
        } else {
          const { start, width } = calculatePosition(
            project.startDate,
            project.endDate,
            containerId
          );
          const projectBar = document.createElement("div");
          projectBar.className = `project-bar ${project.cssClass} ${
            project.startDate > today ? "project-future" : "project-past"
          }`;
          projectBar.textContent = project.name;
          projectBar.style.left = `${start}%`;
          projectBar.style.width = `${width}%`;
          projectBar.dataset.projectId = project.id;

          projectBar.addEventListener("click", toggleTooltip);
          projectRow.appendChild(projectBar);
        }

        projectsContainer.appendChild(projectRow);
      });

      sectionElement.appendChild(projectsContainer);
      sectionsContainer.appendChild(sectionElement);
    });
  }

  function toggleTooltip(event) {
    const projectId = parseInt(event.currentTarget.dataset.projectId);

    if (
      currentlyDisplayedProjectId === projectId &&
      !document.getElementById("tooltip").classList.contains("hidden")
    ) {
      hideTooltip();
      return;
    }

    currentlyDisplayedProjectId = projectId;
    showTooltip(projectId);
    event.stopPropagation();
  }

  function showTooltip(projectId) {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    const tooltip = document.getElementById("tooltip");

    tooltip.innerHTML = `
      <div class="tooltip-header">
        <div class="tooltip-title">${project.name}</div>
        <button class="tooltip-close-btn" aria-label="Fermer">&#10005;</button>
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

    tooltip.classList.remove("hidden");
    tooltip.style.opacity = "1";
    tooltip.style.visibility = "visible";
    tooltip.style.top = "50%";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translate(-50%, -50%)";

    if (window.innerWidth < 768) {
      tooltip.style.width = "90%";
      tooltip.style.maxWidth = "none";
    } else {
      tooltip.style.width = "380px";
      tooltip.style.maxWidth = "380px";
    }

    const closeButton = tooltip.querySelector(".tooltip-close-btn");
    if (closeButton) {
      closeButton.addEventListener("click", function (e) {
        hideTooltip();
        e.stopPropagation();
      });
    }

    document.addEventListener("click", handleOutsideClick);
  }

  function handleOutsideClick(e) {
    const tooltip = document.getElementById("tooltip");
    if (
      !tooltip.contains(e.target) &&
      !e.target.classList.contains("project-bar") &&
      !e.target.classList.contains("milestone")
    ) {
      hideTooltip();
    }
  }

  function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
    tooltip.classList.add("hidden");
    tooltip.style.opacity = "0";
    tooltip.style.visibility = "hidden";
    currentlyDisplayedProjectId = null;

    document.removeEventListener("click", handleOutsideClick);
  }

  function setupNavigation() {
    const navLinks = document.querySelectorAll(".gantt-nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
        hideTooltip();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: "smooth",
          });
        }
      });
    });

    if (navLinks.length > 0) {
      navLinks[0].classList.add("active");
    }
  }

  function initializeGanttCharts() {
    generateTimeline("historic-gantt");
    generateGanttChart(historicProjects, "historic-gantt");
    generateTimeline("future-gantt");
    generateGanttChart(upcomingProjects, "future-gantt");
    setupNavigation();
  }

  initializeGanttCharts();
});
