document.addEventListener('DOMContentLoaded', function() {
    // Données des projets
    const projects = [
        { 
            id: 1, 
            name: 'Dolibarr CRM', 
            startDate: new Date(2023, 4, 22), 
            endDate: new Date(2025, 0, 10), 
            duration: '600 jours', 
            resources: 'Mélina, Lauryn, laetitia, maeva', 
            section: 'Projets Dolibarr', 
            cssClass: 'dolibarr-crm' 
        },
        { 
            id: 2, 
            name: 'Dolibarr Prospect', 
            startDate: new Date(2022, 2, 1), 
            endDate: new Date(2025, 0, 10), 
            duration: '1047 jours', 
            resources: 'Mélina, Lauryn, laetitia, maeva', 
            section: 'Projets Dolibarr', 
            cssClass: 'dolibarr-prospect' 
        },
        { 
            id: 3, 
            name: 'Dolibarr facturation', 
            startDate: new Date(2023, 4, 22), 
            endDate: new Date(2025, 0, 10), 
            duration: '600 jours', 
            resources: 'Romuald, maeva', 
            section: 'Projets Dolibarr', 
            cssClass: 'dolibarr-facturation' 
        },
        { 
            id: 4, 
            name: 'Dolibarr Campus', 
            startDate: new Date(2024, 8, 1), 
            endDate: new Date(2025, 3, 25), 
            duration: '237 jours', 
            resources: 'Melina, sabine, charlotte', 
            section: 'Projets Dolibarr', 
            cssClass: 'dolibarr-campus' 
        },
        { 
            id: 5, 
            name: 'Dolibarr fusionnée', 
            startDate: new Date(2025, 0, 13), 
            endDate: new Date(2025, 3, 26), 
            duration: '104 jours', 
            resources: 'ADT', 
            section: 'Projets Dolibarr', 
            cssClass: 'dolibarr-fusionnee' 
        },
        { 
            id: 6, 
            name: 'Crème', 
            startDate: new Date(2021, 7, 30), 
            endDate: new Date(2022, 7, 15), 
            duration: '351 jours', 
            resources: '', 
            section: 'Autres Projets', 
            cssClass: 'creme' 
        },
        { 
            id: 7, 
            name: 'Ypareo', 
            startDate: new Date(2024, 4, 22), 
            endDate: new Date(2024, 5, 7), 
            duration: '17 jours', 
            resources: '', 
            section: 'Autres Projets', 
            cssClass: 'ypareo' 
        },
        { 
            id: 8, 
            name: 'Pepit', 
            startDate: new Date(2023, 6, 17), 
            endDate: new Date(2024, 1, 6), 
            duration: '205 jours', 
            resources: '', 
            section: 'Autres Projets', 
            cssClass: 'pepit' 
        }
    ];

    // Paramètres du diagramme
    const minDate = new Date(2021, 0, 1);
    const maxDate = new Date(2025, 11, 31);
    const totalDuration = maxDate - minDate;
    
    // Fonction pour formater les dates
    function formatDate(date) {
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }
    
    // Fonction pour calculer position et largeur des barres
    function calculatePosition(startDate, endDate) {
        const start = ((startDate - minDate) / totalDuration) * 100;
        const width = ((endDate - startDate) / totalDuration) * 100;
        return { start, width };
    }
    
    // Génération des trimestres pour l'axe temporel
    function generateTimeline() {
        const timelineElement = document.querySelector('.timeline');
        let currentDate = new Date(minDate);
        
        while (currentDate < maxDate) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const quarter = Math.floor(month / 3) + 1;
            
            const position = ((currentDate - minDate) / totalDuration) * 100;
            
            const markerElement = document.createElement('div');
            markerElement.className = 'quarter-marker';
            markerElement.textContent = `T${quarter} ${year}`;
            markerElement.style.left = `${position}%`;
            
            timelineElement.appendChild(markerElement);
            
            // Avancer au trimestre suivant
            currentDate = new Date(year, month + 3, 1);
        }
    }
    
    // Génération des sections et projets
    function generateGanttChart() {
        const sectionsContainer = document.querySelector('.sections-container');
        
        // Regrouper les projets par section
        const sections = {};
        projects.forEach(project => {
            if (!sections[project.section]) {
                sections[project.section] = [];
            }
            sections[project.section].push(project);
        });
        
        // Créer les sections et les projets
        for (const sectionName in sections) {
            const sectionElement = document.createElement('div');
            sectionElement.className = 'section';
            
            const sectionTitle = document.createElement('h3');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = sectionName;
            sectionElement.appendChild(sectionTitle);
            
            const projectsContainer = document.createElement('div');
            projectsContainer.className = 'projects';
            
            sections[sectionName].forEach(project => {
                const { start, width } = calculatePosition(project.startDate, project.endDate);
                
                const projectRow = document.createElement('div');
                projectRow.className = 'project-row';
                
                const projectBar = document.createElement('div');
                projectBar.className = `project-bar ${project.cssClass}`;
                projectBar.textContent = project.name;
                projectBar.style.left = `${start}%`;
                projectBar.style.width = `${width}%`;
                projectBar.dataset.projectId = project.id;
                
                // Ajouter les gestionnaires d'événements pour l'interaction au survol
                projectBar.addEventListener('mouseenter', showTooltip);
                projectBar.addEventListener('mouseleave', hideTooltip);
                projectBar.addEventListener('touchstart', showTooltip);
                
                projectRow.appendChild(projectBar);
                projectsContainer.appendChild(projectRow);
            });
            
            sectionElement.appendChild(projectsContainer);
            sectionsContainer.appendChild(sectionElement);
        }
    }
    
    // Gestion du tooltip
    const tooltip = document.getElementById('tooltip');
    
    function showTooltip(event) {
        const projectId = parseInt(event.currentTarget.dataset.projectId);
        const project = projects.find(p => p.id === projectId);
        
        if (!project) return;
        
        // Remplir le contenu du tooltip
        tooltip.innerHTML = `
            <div class="tooltip-title">${project.name}</div>
            <div class="tooltip-grid">
                <div>
                    <div><span class="tooltip-label">Début:</span> ${formatDate(project.startDate)}</div>
                    <div><span class="tooltip-label">Fin:</span> ${formatDate(project.endDate)}</div>
                    <div><span class="tooltip-label">Durée:</span> ${project.duration}</div>
                </div>
                <div>
                    <div><span class="tooltip-label">Ressources:</span> ${project.resources || "Non spécifiées"}</div>
                    <div><span class="tooltip-label">Catégorie:</span> ${project.section}</div>
                </div>
            </div>
        `;
        
        // Positionner le tooltip
        const rect = event.currentTarget.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
        tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2) - 175}px`;
        
        // Afficher le tooltip
        tooltip.classList.remove('hidden');
        
        // Gérer le clic en dehors pour les appareils tactiles
        document.addEventListener('click', hideTooltipOnClickOutside);
    }
    
    function hideTooltip() {
        tooltip.classList.add('hidden');
    }
    
    function hideTooltipOnClickOutside(event) {
        if (!tooltip.contains(event.target) && !event.target.classList.contains('project-bar')) {
            hideTooltip();
            document.removeEventListener('click', hideTooltipOnClickOutside);
        }
    }
    
    // Initialisation
    generateTimeline();
    generateGanttChart();
});