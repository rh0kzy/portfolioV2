# PowerShell script to update all project pages with new beautiful design

$projectPages = @(
    @{
        name = "eden-parfum"
        title = "Eden Parfum"
        subtitle = "Site e-commerce sophistiqué pour le premier détaillant de parfums de luxe d'Algérie"
        logo = "EdenParfumWebSite/eden parfum logo.png"
        tags = @("HTML", "CSS", "JavaScript", "E-commerce", "Responsive")
        tagColors = @("", "blue", "purple", "orange", "")
    },
    @{
        name = "vertex-platform"
        title = "Vertex Platform"
        subtitle = "Plateforme web moderne avec interface utilisateur avancée et fonctionnalités complètes"
        logo = "Vetex/Screenshot 2025-08-24 162542.png"
        tags = @("React", "Node.js", "Database", "API", "Full-Stack")
        tagColors = @("blue", "purple", "orange", "", "")
    },
    @{
        name = "teacher-management"
        title = "Teacher Management"
        subtitle = "Système complet de gestion des enseignants et de l'organigramme facultaire"
        logo = "Organigramme de la Faculté/profLogo.png"
        tags = @("Java", "Swing", "Database", "Management", "GUI")
        tagColors = @("", "blue", "orange", "purple", "")
    },
    @{
        name = "medical-clinic"
        title = "Medical Clinic"
        subtitle = "Application de gestion complète pour cabinet médical avec système de rendez-vous"
        logo = "cabinetMedicale/cabinetlogo.jpg"
        tags = @("Java", "Healthcare", "Database", "Management", "Desktop")
        tagColors = @("", "blue", "orange", "purple", "")
    },
    @{
        name = "radiation-analyzer"
        title = "Radiation Analyzer"
        subtitle = "Analyseur avancé de diagrammes de rayonnement avec visualisation graphique"
        logo = "Analyse de Diagramme de Rayonnement/pp1.png"
        tags = @("Python", "Scientific", "Visualization", "Analysis", "GUI")
        tagColors = @("blue", "purple", "orange", "", "")
    },
    @{
        name = "file-management"
        title = "File Management System"
        subtitle = "Système avancé de gestion de fichiers avec interface intuitive et fonctions complètes"
        logo = "Système de Gestion de Fichiers/getionLogo.jpg"
        tags = @("C", "System Programming", "File Operations", "GUI", "Performance")
        tagColors = @("orange", "purple", "blue", "", "")
    }
)

foreach ($project in $projectPages) {
    $fileName = "$($project.name).html"
    $filePath = "c:\Users\PC\Desktop\Studies\portfolioV2\projects\$fileName"
    
    # Build tech stack HTML
    $techStackHtml = ""
    for ($i = 0; $i -lt $project.tags.Length; $i++) {
        $tag = $project.tags[$i]
        $color = $project.tagColors[$i]
        $class = if ($color -ne "") { "tech-tag $color" } else { "tech-tag" }
        $techStackHtml += "                <span class=`"$class`">$tag</span>`n"
    }
    
    # Create the new HTML content
    $htmlContent = @"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$($project.title) - Aymen Belkadi Portfolio</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../project-styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="project-hero">
        <div class="hero-content">
            <div class="project-logo">
                <img src="$($project.logo)" alt="$($project.title) Logo">
            </div>
            <h1 class="project-title">$($project.title)</h1>
            <p class="project-subtitle">$($project.subtitle)</p>
            <div class="tech-stack">
$techStackHtml            </div>
        </div>
    </div>

    <div class="project-details project-content">
        <a href="../index.html#projects" class="back-btn">
            <i class="fas fa-arrow-left"></i>
            Retour au Portfolio
        </a>

        <div class="content-grid">
            <div class="detail-section feature-item">
                <h2><i class="fas fa-info-circle"></i> Aperçu du Projet</h2>
                <p>Description détaillée du projet $($project.title) sera ajoutée ici avec toutes les fonctionnalités et caractéristiques importantes.</p>
            </div>

            <div class="detail-section feature-item">
                <h2><i class="fas fa-cogs"></i> Caractéristiques Techniques</h2>
                <div class="feature-grid">
                    <div class="feature-card">
                        <h3>🏗️ Architecture</h3>
                        <ul class="feature-list">
                            <li>Architecture moderne et robuste</li>
                            <li>Design patterns appropriés</li>
                            <li>Code maintenable et évolutif</li>
                            <li>Bonnes pratiques de développement</li>
                        </ul>
                    </div>
                    <div class="feature-card">
                        <h3>⚙️ Technologies</h3>
                        <ul class="feature-list">
                            <li>Technologies de pointe</li>
                            <li>Frameworks modernes</li>
                            <li>Outils de développement avancés</li>
                            <li>Optimisation des performances</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="detail-section feature-item">
                <h2><i class="fas fa-images"></i> Captures d'Écran</h2>
                <div class="screenshots">
                    <div class="screenshot">
                        <img src="placeholder.jpg" alt="$($project.title) Interface" onerror="this.style.display='none'">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="../script.js"></script>
    <script src="../project-animations.js"></script>
</body>
</html>
"@

    # Write the content to file
    Set-Content -Path $filePath -Value $htmlContent -Encoding UTF8
    
    Write-Host "Updated $fileName with beautiful new design" -ForegroundColor Green
}

Write-Host "All project pages have been updated with the new beautiful design!" -ForegroundColor Cyan
