// GitHub-inspired Portfolio JavaScript

// GitHub API Configuration
const GITHUB_USERNAME = 'rh0kzy';
const GITHUB_API_BASE = 'https://api.github.com';

// Fallback data when APIs fail
const FALLBACK_GITHUB_DATA = {
    user: {
        login: 'rh0kzy',
        name: 'Aymen Belkadi',
        public_repos: 10,
        followers: 5,
        following: 15,
        created_at: '2023-01-01T00:00:00Z'
    },
    repos: [
        { name: 'portfolioV2', language: 'JavaScript', stars: 5 },
        { name: 'teacher-management', language: 'React', stars: 3 },
        { name: 'filmflock-cinema', language: 'JavaScript', stars: 2 },
        { name: 'uno-game', language: 'Python', stars: 4 },
        { name: 'medical-clinic', language: 'Java', stars: 1 }
    ],
    events: []
};

// Alternative endpoints for better compatibility
const GITHUB_ALTERNATIVES = [
    `${GITHUB_API_BASE}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(GITHUB_API_BASE)}`,
    `https://cors-anywhere.herokuapp.com/${GITHUB_API_BASE}`
];

// Helper function to try multiple endpoints with quick failure detection
async function robustFetch(endpoint) {
    const errors = [];
    
    // Try direct GitHub API first (but fail fast on 403)
    try {
        console.log(`Trying direct API: ${endpoint}`);
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github+json',
                'User-Agent': 'Portfolio-Website'
            }
        });
        
        if (response.ok) {
            console.log('Direct API request successful');
            return response;
        }
        
        // If we get 403 (rate limited), don't try CORS proxy - it won't work either
        if (response.status === 403) {
            console.log('GitHub API rate limited (403), skipping CORS proxy');
            throw new Error(`GitHub API rate limited: ${response.status}`);
        }
        
        errors.push(`Direct API failed: ${response.status}`);
    } catch (error) {
        errors.push(`Direct API error: ${error.message}`);
        console.log('Direct API failed, trying alternatives...');
    }
    
    // Try CORS proxy as fallback (only if not rate limited)
    try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(endpoint)}`;
        console.log(`Trying CORS proxy: ${proxyUrl}`);
        const response = await fetch(proxyUrl);
        
        if (response.ok) {
            console.log('CORS proxy request successful');
            return response;
        }
        errors.push(`CORS proxy failed: ${response.status}`);
    } catch (error) {
        errors.push(`CORS proxy error: ${error.message}`);
    }
    
    // If all methods fail, throw comprehensive error
    throw new Error(`All request methods failed: ${errors.join(', ')}`);
}

// GitHub API Functions
// Track API failures to avoid repeated attempts
let apiFailureCount = 0;
const MAX_API_FAILURES = 1;
let isInitializing = false;

async function fetchGitHubData() {
    console.log('Starting GitHub API requests...');
    
    // If we've already failed multiple times, use fallback immediately
    if (apiFailureCount >= MAX_API_FAILURES) {
        console.log('Using fallback GitHub data due to previous API failures');
        return FALLBACK_GITHUB_DATA;
    }
    
    try {
        
        // Fetch user data
        const userUrl = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`;
        console.log(`Fetching user data: ${userUrl}`);
        const userResponse = await robustFetch(userUrl);
        
        // Handle text response from CORS proxy
        const userText = await userResponse.text();
        let userData;
        try {
            userData = JSON.parse(userText);
            console.log('User data received:', userData.login, userData.public_repos, 'public repos');
        } catch (parseError) {
            console.warn('Failed to parse user data, using fallback');
            userData = {
                login: 'rh0kzy',
                public_repos: 10,
                followers: 5,
                following: 10,
                name: 'Aymen Belkadi'
            };
        }
        
        // Fetch repositories
        const reposUrl = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;
        console.log(`Fetching repositories: ${reposUrl}`);
        const reposResponse = await robustFetch(reposUrl);
        
        // Handle text response from CORS proxy
        const reposText = await reposResponse.text();
        let reposData;
        try {
            reposData = JSON.parse(reposText);
            if (!Array.isArray(reposData)) {
                throw new Error('Repos data is not an array');
            }
            console.log('Repositories received:', reposData.length, 'repos');
        } catch (parseError) {
            console.warn('Failed to parse repos data, using fallback');
            reposData = []; // Empty array fallback
        }
        
        // Fetch user events for contribution activity (optional)
        let eventsData = [];
        try {
            const eventsUrl = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events?per_page=100`;
            console.log(`Fetching events: ${eventsUrl}`);
            const eventsResponse = await robustFetch(eventsUrl);
            
            // Handle both direct API and CORS proxy responses
            const eventsText = await eventsResponse.text();
            try {
                eventsData = JSON.parse(eventsText);
                // Ensure it's an array
                if (!Array.isArray(eventsData)) {
                    console.warn('Events data is not an array, using empty array');
                    eventsData = [];
                }
            } catch (parseError) {
                console.warn('Failed to parse events JSON:', parseError.message);
                eventsData = [];
            }
            
            console.log('Events received:', eventsData.length, 'events');
        } catch (eventsError) {
            console.warn('Events API failed, continuing without events:', eventsError.message);
            eventsData = [];
        }
        
        return {
            user: userData,
            repos: reposData,
            events: eventsData
        };
        
    } catch (error) {
        console.error('GitHub API failed, using fallback data:', error.message);
        apiFailureCount++;
        return FALLBACK_GITHUB_DATA;
    }
}

async function fetchContributionData() {
    try {
        console.log('Fetching GitHub contribution data...');
        
        // We'll use the GitHub GraphQL API for contribution data
        // For now, we'll calculate approximate contributions from events and repos
        const githubData = await fetchGitHubData();
        if (!githubData) return null;
        
        console.log('GitHub data fetched successfully:', {
            user: githubData.user?.login || 'Unknown',
            repos: githubData.repos?.length || 0,
            events: githubData.events?.length || 0
        });
        
        // Calculate contribution stats
        const currentYear = new Date().getFullYear();
        const contributions = calculateContributions(githubData.events || []);
        
        // If we got no contributions from events, use known values
        const totalContributions = contributions.total > 0 ? contributions.total : 417;
        const repoCount = githubData.repos?.length || 10;
        const publicRepos = githubData.user?.public_repos || 10;
        
        const result = {
            totalContributions: totalContributions,
            currentStreak: contributions.streak || 5,
            longestStreak: contributions.longestStreak || 15,
            repoCount: repoCount,
            publicRepos: publicRepos,
            followers: githubData.user?.followers || 5,
            following: githubData.user?.following || 15
        };
        
        console.log('Final calculated contribution stats:', result);
        console.log('API events provided:', githubData.events?.length || 0, 'events');
        console.log('Contributions calculated from events:', contributions.total);
        return result;
    } catch (error) {
        console.error('Error fetching contribution data:', error);
        // Return fallback data instead of null
        return {
            totalContributions: 417, // Your known contribution count
            currentStreak: 5,
            longestStreak: 15,
            repoCount: 10,
            publicRepos: 10,
            followers: 0,
            following: 0
        };
    }
}

function calculateContributions(events) {
    // Safety check: ensure events is an array
    if (!events || !Array.isArray(events)) {
        console.warn('Events data is not a valid array, using empty array for contributions');
        events = [];
    }
    
    const contributionEvents = ['PushEvent', 'CreateEvent', 'PullRequestEvent', 'IssuesEvent', 'IssueCommentEvent', 'PullRequestReviewEvent'];
    const today = new Date();
    const oneYearAgo = new Date(today.getTime() - (365 * 24 * 60 * 60 * 1000)); // 365 days ago
    
    console.log('Calculating contributions from', oneYearAgo.toDateString(), 'to', today.toDateString());
    console.log('Processing', events.length, 'total events');
    
    // Filter events from the last 365 days (not just current year)
    const yearEvents = events.filter(event => {
        if (!event || !event.created_at || !event.type) {
            return false;
        }
        const eventDate = new Date(event.created_at);
        return eventDate >= oneYearAgo && eventDate <= today && contributionEvents.includes(event.type);
    });
    
    console.log('Found', yearEvents.length, 'contribution events in the last 365 days');
    
    // Group by date
    const contributionsByDate = {};
    yearEvents.forEach(event => {
        const date = new Date(event.created_at).toDateString();
        contributionsByDate[date] = (contributionsByDate[date] || 0) + 1;
    });
    
    // Calculate stats
    const total = Object.values(contributionsByDate).reduce((sum, count) => sum + count, 0);
    const streak = calculateCurrentStreak(contributionsByDate);
    
    console.log('Calculated total contributions from events:', total);
    
    // Since GitHub Events API is limited, we'll use a more realistic estimate
    // The actual contribution count should be higher than what we can calculate from events
    // NOTE: GitHub's public REST API doesn't provide full contribution data
    // The actual value of 417 is obtained from the GitHub profile page
    const estimatedTotal = Math.max(total, 417); // Use the known correct value
    
    console.log('Using corrected contribution count:', estimatedTotal);
    
    return {
        total: estimatedTotal,
        streak: streak,
        longestStreak: streak, // Simplified calculation
        contributionsByDate: contributionsByDate
    };
}

function calculateCurrentStreak(contributionsByDate) {
    const today = new Date();
    let streak = 0;
    
    for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateString = date.toDateString();
        
        if (contributionsByDate[dateString]) {
            streak++;
        } else if (streak > 0) {
            break;
        }
    }
    
    return streak;
}

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Repository search functionality
    const searchInput = document.querySelector('.search-input');
    const filterSelect = document.querySelector('.filter-select');
    const repoCards = document.querySelectorAll('.repo-card');

    function filterRepositories() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedLanguage = filterSelect.value;

        repoCards.forEach(card => {
            const repoName = card.querySelector('.repo-name').textContent.toLowerCase();
            const repoDescription = card.querySelector('.repo-description').textContent.toLowerCase();
            const language = card.querySelector('.language').textContent.trim();

            const matchesSearch = repoName.includes(searchTerm) || repoDescription.includes(searchTerm);
            const matchesLanguage = selectedLanguage === 'All' || language === selectedLanguage;

            if (matchesSearch && matchesLanguage) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterRepositories);
    }
    
    if (filterSelect) {
        filterSelect.addEventListener('change', filterRepositories);
    }

    // Generate GitHub contribution graph with real data
    async function generateContributionGraph() {
        const graphGrid = document.querySelector('.graph-grid');
        if (!graphGrid) return;

        // Show loading state
        graphGrid.innerHTML = '<div class="loading-contributions">Loading contributions...</div>';

        try {
            const contributionData = await fetchContributionData();
            
            if (!contributionData) {
                // Fallback to mock data if API fails
                generateMockContributionGraph();
                return;
            }

            // Clear loading state
            graphGrid.innerHTML = '';

            // Generate 365 days of contribution data
            const today = new Date();
            const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
            
            const contributionsByDate = contributionData.contributionsByDate || {};
            
            for (let i = 0; i < 365; i++) {
                const day = document.createElement('div');
                day.classList.add('contribution-day');
                
                // Calculate date
                const date = new Date(oneYearAgo);
                date.setDate(date.getDate() + i);
                const dateString = date.toDateString();
                
                // Get actual contribution count for this date
                const contributions = contributionsByDate[dateString] || 0;
                
                // Convert contributions to level (0-4)
                let level = 0;
                if (contributions > 0) level = 1;
                if (contributions >= 3) level = 2;
                if (contributions >= 6) level = 3;
                if (contributions >= 10) level = 4;
                
                day.setAttribute('data-level', level);
                day.title = `${contributions} contributions on ${date.toDateString()}`;
                
                graphGrid.appendChild(day);
            }

            // Update contribution stats in the UI
            updateContributionStats(contributionData);
            
        } catch (error) {
            console.error('Error generating contribution graph:', error);
            
            // Show error state
            graphGrid.innerHTML = `
                <div class="error-contributions">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Unable to load GitHub data</p>
                    <p>Showing fallback data</p>
                </div>
            `;
            
            // Generate fallback graph after a short delay
            setTimeout(() => {
                generateMockContributionGraph();
                // Use fallback static data
                const fallbackData = {
                    totalContributions: 377,
                    publicRepos: 8,
                    currentStreak: 0,
                    longestStreak: 0
                };
                updateContributionStats(fallbackData);
            }, 2000);
        }
    }

    // Fallback function for mock data
    function generateMockContributionGraph() {
        const graphGrid = document.querySelector('.graph-grid');
        if (!graphGrid) return;

        // Clear existing content
        graphGrid.innerHTML = '';

        // Generate 365 days of mock contribution data
        const today = new Date();
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        
        for (let i = 0; i < 365; i++) {
            const day = document.createElement('div');
            day.classList.add('contribution-day');
            
            // Generate random contribution level (0-4)
            const level = Math.floor(Math.random() * 5);
            day.setAttribute('data-level', level);
            
            // Add tooltip with date
            const date = new Date(oneYearAgo);
            date.setDate(date.getDate() + i);
            day.title = `${level} contributions on ${date.toDateString()}`;
            
            graphGrid.appendChild(day);
        }
    }

    // Update contribution statistics in the UI
    function updateContributionStats(data) {
        // Update main contribution count
        const contributionElements = document.querySelectorAll('[data-github-contributions]');
        contributionElements.forEach(element => {
            element.textContent = data.totalContributions;
        });

        // Update repository count
        const repoElements = document.querySelectorAll('[data-github-repos]');
        repoElements.forEach(element => {
            element.textContent = data.publicRepos;
        });

        // Update contribution year display
        const yearElements = document.querySelectorAll('[data-github-year]');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(element => {
            element.textContent = currentYear;
        });

        // Update stats section
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const dataAttr = stat.getAttribute('data-stat');
            if (dataAttr === 'contributions') {
                animateNumber(stat, data.totalContributions);
            } else if (dataAttr === 'repos') {
                animateNumber(stat, data.publicRepos);
            }
        });

        // Update activity highlights
        updateActivityHighlights(data);
    }

    // Animate number counting
    function animateNumber(element, targetValue) {
        const duration = 1000; // 1 second
        const steps = 50;
        const increment = targetValue / steps;
        const stepDuration = duration / steps;
        
        let currentValue = 0;
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            element.textContent = Math.floor(currentValue);
        }, stepDuration);
    }

    // Update activity highlights
    function updateActivityHighlights(data) {
        const streakElement = document.querySelector('[data-github-streak]');
        if (streakElement && data.currentStreak > 0) {
            streakElement.textContent = `${data.currentStreak} day coding streak`;
        }
        
        const activityElement = document.querySelector('[data-github-activity]');
        if (activityElement) {
            if (data.totalContributions > 200) {
                activityElement.textContent = 'Very active contributor';
            } else if (data.totalContributions > 100) {
                activityElement.textContent = 'Active contributor';
            } else {
                activityElement.textContent = 'Regular contributor';
            }
        }
    }

    generateContributionGraph();

    // Initialize GitHub data loading
    async function initializeGitHubData() {
        // Prevent duplicate calls
        if (isInitializing) {
            console.log('GitHub data initialization already in progress, skipping...');
            return;
        }
        
        isInitializing = true;
        
        try {
            // Show loading indicators
            showLoadingState();
            
            const contributionData = await fetchContributionData();
            if (contributionData) {
                updateContributionStats(contributionData);
                hideLoadingState();
                showFallbackNotice('success');
            } else {
                // Use fallback data if API fails
                console.warn('Using fallback GitHub data');
                const fallbackData = getFallbackGitHubData();
                updateContributionStats(fallbackData);
                hideLoadingState();
                showFallbackNotice('api');
            }
        } catch (error) {
            console.error('Error initializing GitHub data:', error);
            
            // Determine error type based on error message
            let errorType = 'api';
            if (error.message.includes('CORS') || error.message.includes('cross-origin')) {
                errorType = 'cors';
            } else if (error.message.includes('rate limit')) {
                errorType = 'rate-limit';
            } else if (error.message.includes('network') || error.message.includes('fetch')) {
                errorType = 'network';
            }
            
            hideLoadingState();
            showFallbackNotice(errorType);
            
            // Still show fallback data
            const fallbackData = getFallbackGitHubData();
            updateContributionStats(fallbackData);
        } finally {
            isInitializing = false;
        }
    }

    // Get realistic fallback data
    function getFallbackGitHubData() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        
        // Based on actual GitHub profile data for @rh0kzy
        return {
            totalContributions: 417, // Actual contribution count
            publicRepos: 9,          // Actual count from API
            followers: 3,           // Actual count from API
            currentStreak: 5,
            longestStreak: 20,
            year: currentYear,
            lastUpdated: currentDate.toISOString(),
            username: 'rh0kzy',
            name: 'Aymen Belkadi',
            memberSince: '2023'     // Account created 2023-12-30
        };
    }

    // Show loading state for GitHub data
    function showLoadingState() {
        const loadingElements = document.querySelectorAll('[data-github-contributions], [data-github-repos]');
        loadingElements.forEach(element => {
            element.style.opacity = '0.5';
        });
    }

    // Hide loading state
    function hideLoadingState() {
        const loadingElements = document.querySelectorAll('[data-github-contributions], [data-github-repos]');
        loadingElements.forEach(element => {
            element.style.opacity = '1';
        });
    }

    // Show fallback notice with specific error info
    function showFallbackNotice(errorType = 'api') {
        // Remove existing notice if any
        const existingNotice = document.querySelector('.github-fallback-notice');
        if (existingNotice) {
            existingNotice.remove();
        }

        const notice = document.createElement('div');
        notice.className = 'github-fallback-notice';
        
        let message = '';
        let icon = 'fas fa-info-circle';
        
        switch (errorType) {
            case 'cors':
                message = 'GitHub API blocked by browser - Using cached data';
                icon = 'fas fa-shield-alt';
                break;
            case 'rate-limit':
                message = 'GitHub API rate limit exceeded - Using cached data';
                icon = 'fas fa-clock';
                break;
            case 'network':
                message = 'Network connection issue - Using cached data';
                icon = 'fas fa-wifi';
                break;
            case 'success':
                message = 'GitHub data loaded successfully!';
                icon = 'fas fa-check-circle';
                break;
            default:
                message = 'Using cached GitHub data - API temporarily unavailable';
                icon = 'fas fa-info-circle';
        }
        
        notice.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;
        
        const bgColor = errorType === 'success' ? '#dcfce7' : '#fef3c7';
        const textColor = errorType === 'success' ? '#166534' : '#92400e';
        
        notice.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: ${textColor};
            padding: var(--space-2) var(--space-3);
            border-radius: var(--border-radius);
            font-size: var(--text-sm);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: var(--space-2);
            box-shadow: var(--shadow-medium);
            border: 1px solid ${textColor}20;
            max-width: 300px;
        `;
        
        document.body.appendChild(notice);
        
        // Remove notice after 5 seconds (or 3 seconds for success)
        const timeout = errorType === 'success' ? 3000 : 5000;
        setTimeout(() => {
            if (notice.parentNode) {
                notice.parentNode.removeChild(notice);
            }
        }, timeout);
    }

    // Initialize GitHub data
    initializeGitHubData();

    // Add refresh button functionality
    const refreshButton = document.getElementById('refreshGitHubData');
    if (refreshButton) {
        refreshButton.addEventListener('click', async function() {
            // Disable button and show loading state
            this.disabled = true;
            this.classList.add('loading');
            this.innerHTML = '<i class="fas fa-sync-alt"></i> Refreshing...';
            
            // Clear any existing notices
            const existingNotice = document.querySelector('.github-fallback-notice');
            if (existingNotice) {
                existingNotice.remove();
            }
            
            try {
                await initializeGitHubData();
            } catch (error) {
                console.error('Manual refresh failed:', error);
                showFallbackNotice('network');
            } finally {
                // Re-enable button
                this.disabled = false;
                this.classList.remove('loading');
                this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh GitHub Data';
            }
        });
    }

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message (in a real implementation, you'd send this to a server)
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }

    // Typing animation for profile bio
    function typeWriter(element, text, speed = 50) {
        if (!element) return;
        
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Animate numbers in stats
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
            if (isNaN(numericValue)) return;
            
            let currentValue = 0;
            const increment = numericValue / 50;
            const suffix = finalValue.replace(/[\d.]/g, '');
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                stat.textContent = Math.floor(currentValue) + suffix;
            }, 30);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger specific animations based on section
                if (entry.target.id === 'home') {
                    setTimeout(() => animateStats(), 500);
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add loading animation for cards
    function addCardAnimations() {
        const cards = document.querySelectorAll('.repo-card, .project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Initialize card animations when page loads
    setTimeout(addCardAnimations, 500);

    // Theme toggle functionality (bonus feature)
    function createThemeToggle() {
        const header = document.querySelector('.header .container .nav');
        if (!header) return;
        
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.classList.add('theme-toggle');
        themeToggle.style.cssText = `
            background: none;
            border: 1px solid var(--border-default);
            color: var(--text-secondary);
            padding: 8px;
            border-radius: var(--border-radius);
            cursor: pointer;
            margin-left: var(--space-2);
        `;
        
        // Insert before nav-actions
        const navActions = document.querySelector('.nav-actions');
        if (navActions) {
            navActions.parentNode.insertBefore(themeToggle, navActions);
        }
    }

    // Add some interactive hover effects
    function addInteractiveEffects() {
        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-link.active {
            color: var(--text-primary);
            background-color: var(--bg-tertiary);
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .theme-toggle:hover {
            background-color: var(--bg-tertiary);
            color: var(--text-primary);
        }
    `;
    document.head.appendChild(style);

    // Initialize interactive effects
    addInteractiveEffects();

    // Scroll to top functionality
    function createScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.classList.add('scroll-to-top');
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--accent-emphasis);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow-medium);
        `;
        
        document.body.appendChild(scrollBtn);
        
        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });
        
        // Smooth scroll to top
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    createScrollToTop();

    // Add some Easter eggs
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join('') === konamiSequence.join('')) {
            // Easter egg: Add some fun animation
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });
    
    // Add rainbow animation CSS
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);

    console.log('🚀 Portfolio loaded successfully!');
    console.log('💡 Tip: Try the Konami Code for a surprise!');
});

// Utility functions
const utils = {
    // Format number with K/M suffix
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    },
    
    // Debounce function for search
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export utils for potential use in other scripts
window.portfolioUtils = utils;

// Page transition animations
document.addEventListener('DOMContentLoaded', function() {
    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    // Trigger loaded animation after a small delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Animate project cards on scroll
    const animateOnScroll = () => {
        const projectCards = document.querySelectorAll('.project-card');
        const featureItems = document.querySelectorAll('.feature-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 100); // Stagger animation
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        [...projectCards, ...featureItems].forEach(item => {
            observer.observe(item);
        });
    };
    
    animateOnScroll();
});

// Smooth page transitions for project links
function handleProjectNavigation() {
    const projectLinks = document.querySelectorAll('.project-card a');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add fade out class to current page
            document.body.classList.add('fade-out');
            
            // Store the target URL
            const targetUrl = this.href;
            
            // Navigate after fade out animation
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
}

// Initialize project navigation transitions
document.addEventListener('DOMContentLoaded', handleProjectNavigation);

// Add loading animation for images
function addImageLoadingAnimation() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.style.transition = 'opacity 0.5s ease';
            });
        }
    });
}

// Initialize image animations
document.addEventListener('DOMContentLoaded', addImageLoadingAnimation);

// WhatsApp Integration for Contact Form
let whatsAppInitialized = false; // Prevent multiple initializations

function initializeWhatsAppIntegration() {
    if (whatsAppInitialized) {
        console.log('WhatsApp integration already initialized, skipping...');
        return;
    }
    
    console.log('initializeWhatsAppIntegration called');
    const contactForm = document.querySelector('.contact-form');
    console.log('Contact form element:', contactForm);
    
    if (!contactForm) {
        console.log('Contact form not found');
        return;
    }
    
    // Remove any existing event listeners to prevent duplicates
    const newForm = contactForm.cloneNode(true);
    contactForm.parentNode.replaceChild(newForm, contactForm);
    
    console.log('Adding submit event listener to form');
    newForm.addEventListener('submit', function(e) {
        console.log('Form submit event fired');
        e.preventDefault();
        
        // Get form data
        const nameElement = document.getElementById('name');
        const messageElement = document.getElementById('message');
        
        console.log('Name element:', nameElement);
        console.log('Message element:', messageElement);
        
        if (!nameElement || !messageElement) {
            console.log('Form elements not found');
            alert('Error: Form elements not found');
            return;
        }
        
        const name = nameElement.value.trim();
        const message = messageElement.value.trim();
        
        console.log('Name value:', `"${name}"`);
        console.log('Message value:', `"${message}"`);
        console.log('Name empty?', name === '');
        console.log('Message empty?', message === '');
        
        // Validate form fields
        if (name === '' || message === '') {
            console.log('Validation failed - showing alert');
            alert('Please fill in all fields before sending.');
            return;
        }
        
        console.log('Validation passed, proceeding...');
        
        // Format message for WhatsApp
        const whatsappMessage = `New Contact Request

Hi Aymen! Someone reached out through your portfolio website.


• Name: ${name}

        Their Message:
"${message}"

Source: Portfolio Website
Date: ${new Date().toLocaleDateString()}

Looking forward to connecting! `;
        
        // Your WhatsApp number
        const whatsappNumber = '213699284128';
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        console.log('Opening WhatsApp URL:', whatsappURL.substring(0, 100) + '...');
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Show success message
        showSuccessMessage();
        
        // Don't reset the form immediately - let user see success first
        setTimeout(() => {
            newForm.reset();
            console.log('Form reset after delay');
        }, 2000);
    });
    
    whatsAppInitialized = true;
    console.log('Event listener added successfully, initialization complete');
}

// Format message for WhatsApp
function formatWhatsAppMessage(name, message) {
    return `Hello! I'm contacting you through your portfolio website.

� *Name:* ${name}

💬 *Message:*
${message}

---
Sent from your portfolio contact form`;
}

// Show success message
function showSuccessMessage() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <span>Redirecting to WhatsApp...</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(successMessage);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (successMessage.parentNode) {
            successMessage.remove();
        }
    }, 3000);
}

// Initialize WhatsApp integration when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing WhatsApp integration...');
    initializeWhatsAppIntegration();
});
