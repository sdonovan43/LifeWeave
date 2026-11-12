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

// Analyze semantic reasoning
function analyzeSemanticReasoning() {
    const analyzeBtn = document.getElementById('analyze-btn');
    analyzeBtn.innerHTML = 'Analyzing...';
    analyzeBtn.disabled = true;
    
    setTimeout(() => {
        // Simulate semantic reasoning analysis
        loadSemanticReasoningData();
        
        analyzeBtn.innerHTML = 'Analyze Semantic Reasoning';
        analyzeBtn.disabled = false;
        
        // Show success message
        alert('Semantic reasoning analysis completed successfully!');
    }, 2000);
}

// Load semantic reasoning data (placeholder)
function loadSemanticReasoningData() {
    // This would be replaced with actual data loading in a real implementation
    console.log("Loading semantic reasoning data...");
    
    // Simulate updating the belief systems section
    const beliefsContainer = document.getElementById('beliefs-container');
    beliefsContainer.innerHTML = `
        <div class="recommendation-item">
            <strong>Belief 1:</strong> Sleep quality affects cognitive performance
        </div>
        <div class="recommendation-item">
            <strong>Belief 2:</strong> Stress levels correlate with heart rate variability
        </div>
        <div class="recommendation-item">
            <strong>Belief 3:</strong> Physical activity influences sleep patterns
        </div>
    `;
    
    // Simulate updating the temporal patterns section
    const temporalContainer = document.getElementById('temporal-patterns-container');
    temporalContainer.innerHTML = `
        <div class="recommendation-item">
            <strong>Pattern:</strong> Increased stress during work hours
        </div>
        <div class="recommendation-item">
            <strong>Pattern:</strong> Better sleep quality after evening exercise
        </div>
    `;
    
    // Simulate updating the hypotheses section
    const hypothesesContainer = document.getElementById('hypotheses-container');
    hypothesesContainer.innerHTML = `
        <div class="recommendation-item">
            <strong>Hypothesis:</strong> Meditation reduces stress-related heart rate spikes
        </div>
        <div class="recommendation-item">
            <strong>Hypothesis:</strong> Dietary changes affect sleep duration and quality
        </div>
    `;
    
    // Simulate updating the narrative elements section
    const narrativeContainer = document.getElementById('narrative-elements-container');
    narrativeContainer.innerHTML = `
        <div class="recommendation-item">
            <strong>Narrative:</strong> Personal health journey with consistent patterns
        </div>
        <div class="recommendation-item">
            <strong>Narrative:</strong> Seasonal variations in physical activity levels
        </div>
    `;
}

// Update dashboard metrics
function updateDashboardMetrics() {
    if (healthData.length > 0) {
        // Calculate average heart rate
        const heartRates = healthData.filter(d => d.type === 'heart_rate');
        const avgHeartRate = heartRates.length > 0 
            ? Math.round(heartRates.reduce((sum, d) => sum + d.value, 0) / heartRates.length)
            : 0;
        
        // Calculate total steps
        const steps = healthData.filter(d => d.type === 'steps');
        const totalSteps = steps.length > 0 
            ? Math.round(steps.reduce((sum, d) => sum + d.value, 0) / steps.length)
            : 0;
        
        // Calculate average sleep
        const sleeps = healthData.filter(d => d.type === 'sleep');
        const avgSleep = sleeps.length > 0 
            ? Math.round(sleeps.reduce((sum, d) => sum + d.value, 0) / sleeps.length * 10) / 10
            : 0;
        
        // Update dashboard values
        document.getElementById('heart-rate-value').textContent = avgHeartRate;
        document.getElementById('steps-value').textContent = totalSteps;
        document.getElementById('sleep-value').textContent = avgSleep;
        
        // Update graph status
        document.getElementById('nodes-count').textContent = healthData.length;
        document.getElementById('edges-count').textContent = Math.floor(healthData.length * 0.7);
        document.getElementById('last-update').textContent = new Date().toLocaleString();
        document.getElementById('semantic-entities').textContent = 9; // 9 semantic reasoning entities
    }
}

// Graph visualization functions (placeholder)

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

// Export functions for use in HTML
window.showView = showView;
window.refreshData = refreshData;
window.generateRecommendations = generateRecommendations;
window.filterData = filterData;
window.analyzeSemanticReasoning = analyzeSemanticReasoning;