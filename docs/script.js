// Sample health data
const healthData = [
    { id: 1, type: 'heart_rate', value: 72, timestamp: '2023-05-01T08:00:00Z' },
    { id: 2, type: 'steps', value: 8500, timestamp: '2023-05-01T09:00:00Z' },
    { id: 3, type: 'sleep', value: 7.5, timestamp: '2023-05-01T23:00:00Z' },
    { id: 4, type: 'heart_rate', value: 68, timestamp: '2023-05-02T08:00:00Z' },
    { id: 5, type: 'steps', value: 10200, timestamp: '2023-05-02T09:00:00Z' },
    { id: 6, type: 'sleep', value: 8.0, timestamp: '2023-05-02T23:00:00Z' },
    { id: 7, type: 'heart_rate', value: 75, timestamp: '2023-05-03T08:00:00Z' },
    { id: 8, type: 'steps', value: 7200, timestamp: '2023-05-03T09:00:00Z' },
    { id: 9, type: 'sleep', value: 6.5, timestamp: '2023-05-03T23:00:00Z' },
    { id: 10, type: 'hrv', value: 65, timestamp: '2023-05-03T08:00:00Z' },
    { id: 11, type: 'symptom', value: 'headache', timestamp: '2023-05-03T14:00:00Z' },
    { id: 12, type: 'intervention', value: 'meditation', timestamp: '2023-05-03T16:00:00Z' },
    { id: 13, type: 'context', value: 'work stress', timestamp: '2023-05-03T18:00:00Z' }
];

// Current view tracking
let currentView = 'dashboard';

// Show a specific view
function showView(viewId, event) {
    // Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.remove('active');
    });
    
    // Show the selected view
    document.getElementById(viewId).classList.add('active');
    
    // Update active nav link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    currentView = viewId;
}

// Filter health data
function filterData() {
    const typeFilter = document.getElementById('data-type-filter').value;
    const dateFilter = document.getElementById('date-filter').value;
    
    // In a real implementation, this would filter actual data
    console.log(`Filtering by type: ${typeFilter}, date: ${dateFilter}`);
    
    // For demo purposes, just reload the data
    loadHealthData();
}

// Refresh data
function refreshData() {
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.innerHTML = 'Refreshing...';
    refreshBtn.disabled = true;

    setTimeout(() => {
        loadHealthData();
        loadRecommendations();

        // Update dashboard metrics
        updateDashboardMetrics();

        refreshBtn.innerHTML = 'Refresh Data';
        refreshBtn.disabled = false;
    }, 1000);
}

// Generate recommendations
function generateRecommendations() {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.innerHTML = 'Generating...';
    generateBtn.disabled = true;

    setTimeout(() => {
        loadRecommendations();
        
        generateBtn.innerHTML = 'Generate Recommendations';
        generateBtn.disabled = false;
        
        // Show success message
        alert('New recommendations generated successfully!');
    }, 1500);
}

// Graph visualization functions (placeholder)
function zoomIn() {
    alert('Zoom in functionality would be implemented here');
}

function zoomOut() {
    alert('Zoom out functionality would be implemented here');
}

function resetView() {
    alert('Reset view functionality would be implemented here');
}

// Simulate periodic data updates
setInterval(() => {
    if (currentView === 'dashboard') {
        updateDashboardMetrics();
    }
}, 30000); // Update every 30 seconds

// Initialize dashboard metrics on load
updateDashboardMetrics();

// Load initial data when page loads
window.onload = function() {
// Load health data into the table
function loadHealthData() {
    const tableContainer = document.getElementById('data-table-container');
    
    // In a real implementation, this would fetch from a database or API
    // For demo purposes, we'll just display the sample data
    
    let html = '<table><thead><tr><th>ID</th><th>Type</th><th>Value</th><th>Timestamp</th></tr></thead><tbody>';
    
    healthData.forEach(item => {
        const date = new Date(item.timestamp);
        html += `<tr>
            <td>${item.id}</td>
            <td>${item.type}</td>
            <td>${item.value}</td>
            <td>${date.toLocaleString()}</td>
        </tr>`;
    });
    
    html += '</tbody></table>';
    tableContainer.innerHTML = html;
}

// Load recommendations
function loadRecommendations() {
    const recommendationsContainer = document.getElementById('recommendations-container');
    const recommendationsList = document.getElementById('recommendations-list');
    
    // Sample recommendations data
    const recommendations = [
        "Consider increasing your daily step count to 10,000 steps",
        "Try to maintain consistent sleep patterns of 7-8 hours",
        "Practice meditation for 10 minutes daily to reduce stress",
        "Stay hydrated throughout the day with at least 2 liters of water"
    ];
    
    // Update recommendations list in dashboard
    let html = '<ul>';
    recommendations.forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    html += '</ul>';
    recommendationsList.innerHTML = html;
    
    // Update recommendations container in dedicated view
    recommendationsContainer.innerHTML = html;
}

// Load semantic reasoning data (placeholder)
function loadSemanticReasoningData() {
    const beliefsContainer = document.getElementById('beliefs-container');
    const temporalPatternsContainer = document.getElementById('temporal-patterns-container');
    const hypothesesContainer = document.getElementById('hypotheses-container');
    const narrativeElementsContainer = document.getElementById('narrative-elements-container');
    
    // Sample data for semantic reasoning
    beliefsContainer.innerHTML = '<p>Belief: Regular exercise improves mental health</p>';
    temporalPatternsContainer.innerHTML = '<p>Pattern: Sleep quality decreases after high stress days</p>';
    hypothesesContainer.innerHTML = '<p>Hypothesis: Increased hydration correlates with better sleep</p>';
    narrativeElementsContainer.innerHTML = '<p>Element: Personal health journey over time</p>';
}

// Update dashboard metrics
function updateDashboardMetrics() {
    // Calculate some sample metrics from the health data
    const heartRates = healthData.filter(item => item.type === 'heart_rate');
    const steps = healthData.filter(item => item.type === 'steps');
    const sleep = healthData.filter(item => item.type === 'sleep');
    
    // Calculate averages or latest values
    let avgHeartRate = 0;
    let totalSteps = 0;
    let avgSleep = 0;
    
    if (heartRates.length > 0) {
        avgHeartRate = heartRates.reduce((sum, item) => sum + item.value, 0) / heartRates.length;
    }
    
    if (steps.length > 0) {
        totalSteps = steps.reduce((sum, item) => sum + item.value, 0);
    }
    
    if (sleep.length > 0) {
        avgSleep = sleep.reduce((sum, item) => sum + item.value, 0) / sleep.length;
    }
    
    // Update the dashboard elements
    document.getElementById('heart-rate-value').textContent = Math.round(avgHeartRate);
    document.getElementById('steps-value').textContent = totalSteps;
    document.getElementById('sleep-value').textContent = avgSleep.toFixed(1);
    
    // Update graph status
    document.getElementById('nodes-count').textContent = healthData.length;
    document.getElementById('edges-count').textContent = 20; // Sample value
    document.getElementById('last-update').textContent = new Date().toLocaleString();
    document.getElementById('semantic-entities').textContent = 9; // Sample value
}

// Analyze semantic reasoning
function analyzeSemanticReasoning() {
    const analyzeBtn = document.getElementById('analyze-btn');
    analyzeBtn.innerHTML = 'Analyzing...';
    analyzeBtn.disabled = true;
    
    setTimeout(() => {
        loadSemanticReasoningData();
        
        analyzeBtn.innerHTML = 'Analyze Semantic Reasoning';
        analyzeBtn.disabled = false;
        
        // Show success message
        alert('Semantic reasoning analysis completed successfully!');
    }, 2000);
}

// Load initial data when page loads
window.onload = function() {
    loadHealthData();
    loadRecommendations();
    updateDashboardMetrics();
};