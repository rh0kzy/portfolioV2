# PowerShell script to fix photo paths and language issues in project pages

$projects = @(
    @{
        file = "filmflock-cinema.html"
        folder = "Cinema"
        logo = "cinemaLogo.jpg"
        screenshots = @("cinema1.png", "cinema2.png", "cinema3.png")
        title = "FilmFlock Cinema"
        subtitle = "A comprehensive cinema ticket booking system built with Java MVC architecture"
        tech = @("Java", "MVC Architecture", "Swing GUI", "MySQL", "File Management")
    },
    @{
        file = "eden-parfum.html"
        folder = "EdenParfumWebSite"
        logo = "eden parfum logo.png"
        screenshots = @("Eden1.png", "eden2.png", "eden4.png", "eden5.png", "eden6.png")
        title = "Eden Parfum Website"
        subtitle = "A luxury e-commerce website for Algeria's premier perfume retailer featuring 507+ premium fragrances"
        tech = @("HTML5", "CSS3", "JavaScript", "Responsive Design", "E-commerce")
    },
    @{
        file = "vertex-platform.html"
        folder = "Vetex"
        logo = ""
        screenshots = @("Screenshot 2025-08-24 162542.png", "Screenshot 2025-08-24 162626.png", "Screenshot 2025-08-24 162651.png", "Screenshot 2025-08-24 162720.png")
        title = "Vertex Platform"
        subtitle = "A modern web platform with advanced features and responsive design"
        tech = @("React", "Node.js", "MongoDB", "Express", "REST API")
    },
    @{
        file = "medical-clinic.html"
        folder = "cabinetMedicale"
        logo = "cabinetlogo.jpg"
        screenshots = @("cabinet1.png", "cabinet2.png", "cabinet3.png")
        title = "Medical Clinic Management"
        subtitle = "A comprehensive clinic management system for patient records and appointments"
        tech = @("Java", "MySQL", "Swing", "CRUD Operations", "Database Design")
    },
    @{
        file = "teacher-management.html"
        folder = "Organigramme de la Faculté"
        logo = "profLogo.png"
        screenshots = @("prof1.png", "prof2.png", "prof3.png", "prof4.png", "prof5.png")
        title = "Faculty Organization Chart"
        subtitle = "An interactive faculty management system with organizational hierarchy visualization"
        tech = @("Java", "Data Structures", "GUI Design", "Tree Algorithms", "Visualization")
    },
    @{
        file = "radiation-analyzer.html"
        folder = "Analyse de Diagramme de Rayonnement"
        logo = ""
        screenshots = @("pp1.png", "pp2.png", "pp3.png", "pp4.png", "pp5.png")
        title = "Radiation Pattern Analyzer"
        subtitle = "Advanced radiation pattern analysis tool for antenna design and optimization"
        tech = @("Python", "NumPy", "Matplotlib", "Signal Processing", "Data Analysis")
    },
    @{
        file = "file-management.html"
        folder = "Système de Gestion de Fichiers"
        logo = "getionLogo.jpg"
        screenshots = @()
        title = "File Management System"
        subtitle = "A robust file management system with advanced search and organization features"
        tech = @("C", "File I/O", "Data Structures", "System Programming", "Memory Management")
    }
)

foreach ($project in $projects) {
    $filePath = "c:\Users\PC\Desktop\Studies\portfolioV2\projects\$($project.file)"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $($project.file)..." -ForegroundColor Green
        
        $content = Get-Content $filePath -Raw
        
        # Fix language attribute
        $content = $content -replace 'lang="fr"', 'lang="en"'
        
        # Fix back button
        $content = $content -replace 'Retour au Portfolio', 'Back to Portfolio'
        
        # Fix common French headings to English
        $content = $content -replace 'Aperçu du Projet', 'Project Overview'
        $content = $content -replace 'Caractéristiques Techniques', 'Technical Features'
        $content = $content -replace 'Fonctionnalités Principales', 'Key Features'
        $content = $content -replace 'Captures d''Écran', 'Screenshots'
        $content = $content -replace 'Technologies Utilisées', 'Technologies Used'
        $content = $content -replace 'Architecture du Système', 'System Architecture'
        
        # Fix image paths based on folder structure
        if ($project.logo -ne "") {
            $content = $content -replace 'src="[^"]*logo[^"]*"', "src=`"$($project.folder)/$($project.logo)`""
        }
        
        # Fix screenshot paths
        foreach ($screenshot in $project.screenshots) {
            $content = $content -replace "src=`"[^`"]*$([regex]::Escape($screenshot))", "src=`"$($project.folder)/$screenshot`""
        }
        
        Set-Content $filePath $content -Encoding UTF8
        Write-Host "✓ Fixed $($project.file)" -ForegroundColor Green
    }
}

Write-Host "All project pages updated successfully!" -ForegroundColor Cyan
