# Portail des Tutoriels - Académie du Tourisme (ADT)

Portail web centralisant les tutoriels et guides de procédures pour les collaborateurs de l'Académie du Tourisme.

## Description

Ce projet est un site web statique servant de portail de documentation et de tutoriels internes. Il permet aux collaborateurs d'accéder facilement aux guides d'utilisation des différents outils utilisés par l'organisation, notamment le CRM Dolibarr.

## Structure du projet

```
tutoriel-portail-dolibarrADT/
├── index.html                 # Page d'accueil du portail
├── css/
│   ├── styles.css            # Feuille de styles principale
│   └── styles_gantt.css      # Styles pour le diagramme de Gantt
├── js/
│   └── main.js               # Scripts JavaScript (navigation, animations)
├── img/
│   ├── dolibarr/             # Images des tutoriels Dolibarr
│   │   ├── tiers/            # Captures d'écran module Tiers
│   │   └── preopp/           # Captures d'écran Pré-opportunités
│   └── rgpd/                 # Ressources RGPD
├── pages/
│   ├── 00_dolibarr/          # Tutoriels Dolibarr (CRM)
│   ├── 01_keyyo/             # Tutoriels téléphonie KEYYO
│   ├── 02_lms/               # Tutoriels LMS & Campus
│   ├── 03_office/            # Tutoriels Office 365
│   ├── 04_projetsencours/    # Projets en cours
│   ├── 05_peda/              # Pédagogie digitale
│   ├── 06_ressources/        # Ressources diverses
│   ├── 07_marketing/         # Marketing & Communication
│   ├── 08_cyber/             # Cyber-sécurité & Tech
│   ├── 09_accueil/           # Accueil nouveaux collaborateurs
│   └── 10_web/               # Sites web de l'organisation
└── video/
    ├── DOLIBARR_V1__Notre_Nouveau_CRM.mp4
    └── genially_V1/          # Présentation interactive Genially
```

## Fonctionnalités

- **Navigation par catégories** : Accès rapide aux différentes sections de tutoriels
- **Recherche** : Barre de recherche pour trouver rapidement un tutoriel
- **Filtres** :
  - Par niveau de difficulté (Facile, Moyen, Difficile)
  - Par catégorie (Dolibarr, Téléphonie, LMS, etc.)
- **Support intégré** : Lien direct vers le système de ticketing
- **Responsive design** : Adapté aux appareils mobiles

## Catégories de tutoriels

| Catégorie | Description |
|-----------|-------------|
| **Dolibarr V1** | Guides d'utilisation du CRM (Tiers, Pré-opportunités, Facturation, Projets, Agenda, etc.) |
| **Téléphonie KEYYO** | Documentation sur le système téléphonique |
| **LMS & Campus** | Guides pour les plateformes de formation (Lyon, Lille, Toulon) |
| **Office 365** | Tutoriels sur les outils Microsoft |
| **Projets** | Suivi des projets en cours (iCadémie) |
| **Pédagogie** | Ressources pédagogiques digitales |
| **Ressources** | Vidéos, PDFs et autres ressources |
| **Marketing** | Documentation marketing & communication |
| **Cyber-Tech** | Guides de cybersécurité |

## Technologies utilisées

- **HTML5** : Structure des pages
- **CSS3** : Styles et mise en page responsive
- **JavaScript** : Interactions (navigation mobile, filtres, animations au scroll)
- **Font Awesome** : Icônes
- **Scenari/Opale** : Génération de certains contenus pédagogiques (dossier `sc_prez`)

## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/[username]/tutoriel-portail-dolibarrADT.git
   ```

2. Ouvrir `index.html` dans un navigateur ou déployer sur un serveur web.

## Déploiement

Le site peut être déployé via :
- **Hébergement web classique** : FTP vers un serveur
- **GitHub Pages** : Activer dans les paramètres du dépôt
- **Netlify/Vercel** : Déploiement automatique depuis le dépôt

## Personnalisation

### Couleurs
Modifier les variables CSS dans `css/styles.css` :
```css
:root {
    --primary-color: #4a73ab;
    --secondary-color: #5bc1de;
}
```

### Ajout de tutoriels
1. Créer une nouvelle page HTML dans le dossier `pages/` approprié
2. Ajouter une carte sur la page d'accueil `index.html`
3. Mettre à jour la navigation si nécessaire

## Liens utiles

- **Support & Ticketing** : https://gestion.academie-tourisme.fr/

## Licence

Projet interne - Académie du Tourisme
