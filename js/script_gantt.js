document.addEventListener("DOMContentLoaded", function () {
  // Données des projets - conservés tels quels...
  const projects = [
    // ... vos données de projets restent inchangées
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

  // Génération des trimestres pour l'axe temporel du premier diagramme
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

      // Avancer au trimestre suivant
      currentDate = new Date(year, month + 3, 1);
    }
  }

  // Génération des mois et semaines pour l'axe temporel du second diagramme
  function generateDetailedTimeline(timelineElement) {
    // Créer une barre horizontale supérieure pour les mois
    const monthsBar = document.createElement("div");
    monthsBar.className = "months-bar";
    timelineElement.appendChild(monthsBar);

    // Créer une barre horizontale inférieure pour les semaines
    const weeksBar = document.createElement("div");
    weeksBar.className = "weeks-bar";
    timelineElement.appendChild(weeksBar);

    // Parcourir tous les mois de février à décembre 2025
    for (let month = 1; month <= 11; month++) {
      const monthStart = new Date(2025, month, 1);
      const nextMonthStart = new Date(2025, month + 1, 1);
      const monthEnd = new Date(nextMonthStart - 1); // Dernier jour du mois

      // Position du marqueur de mois (au début du mois)
      const monthPosition =
        ((monthStart - futureMinDate) / futureTotalDuration) * 100;

      // Largeur du mois par rapport à la largeur totale
      const monthWidth =
        ((nextMonthStart - monthStart) / futureTotalDuration) * 100;

      // Créer le marqueur de mois
      const monthMarker = document.createElement("div");
      monthMarker.className = "month-marker";
      monthMarker.textContent = monthNames[month];
      monthMarker.style.left = `${monthPosition}%`;
      monthMarker.style.width = `${monthWidth}%`;
      monthsBar.appendChild(monthMarker);

      // Générer des marqueurs pour chaque semaine du mois
      let weekDate = new Date(monthStart);

      // Reculer au premier lundi du mois (ou à la date de début si c'est après)
      const firstDayOfMonth = weekDate.getDay(); // 0 = dimanche, 1 = lundi, ...
      weekDate.setDate(
        weekDate.getDate() - (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1)
      );

      // Si le premier lundi est avant le début du mois, avancer au début du mois
      if (weekDate < monthStart) {
        weekDate = new Date(monthStart);
      }

      // Parcourir toutes les semaines du mois
      while (weekDate <= monthEnd) {
        // Position du marqueur de semaine
        const weekPosition =
          ((weekDate - futureMinDate) / futureTotalDuration) * 100;

        // Créer le marqueur de semaine
        const weekMarker = document.createElement("div");
        weekMarker.className = "week-marker";

        // Afficher le numéro du jour pour le premier jour de chaque semaine
        weekMarker.title = `Semaine du ${weekDate.getDate()} ${
          monthNames[weekDate.getMonth()]
        }`;
        weekMarker.style.left = `${weekPosition}%`;
        weeksBar.appendChild(weekMarker);

        // Avancer d'une semaine
        weekDate.setDate(weekDate.getDate() + 7);
      }
    }
  }

  // Fonction principale pour générer la timeline appropriée
  function generateTimeline(containerId) {
    const timelineElement = document.querySelector(`#${containerId} .timeline`);

    if (!timelineElement) {
      console.error(`Timeline dans #${containerId} non trouvée`);
      return;
    }

    // Vider la timeline (pour éviter les doublons en cas de régénération)
    timelineElement.innerHTML = "";

    // Générer la timeline appropriée selon le diagramme
    if (containerId === "historic-gantt") {
      // Timeline par trimestres pour le diagramme historique
      generateQuarterTimeline(timelineElement);
    } else {
      // Timeline détaillée par mois et semaines pour le diagramme futur
      generateDetailedTimeline(timelineElement);
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
      todayLine.style.zIndex = "1"; // S'assurer que la ligne est sous les barres

      ganttContainer.appendChild(todayLine);
    } else {
      console.error(`Élément #${containerId} non trouvé dans le DOM`);
    }
  }

  // Le reste des fonctions reste inchangé...

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

    // Remplir le contenu du tooltip avec un bouton de fermeture
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

  // Génération des sections et projets
  function generateGanttChart(projectsData, containerId) {
    // ... Le code de cette fonction reste inchangé ...
  }

  // Ajout de la gestion de la navigation
  function setupNavigation() {
    // ... Le code de cette fonction reste inchangé ...
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
