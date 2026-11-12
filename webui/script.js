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
        // Simulate new recommendations generation
        loadRecommendations();
        
        generateBtn.innerHTML = 'Generate Recommendations';
        generateBtn.disabled = false;
        
        // Show success message
        alert('New recommendations generated successfully!');
    }, 1500);
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
    }
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

// Export functions for use in HTML
window.showView = showView;
window.refreshData = refreshData;
window.generateRecommendations = generateRecommendations;
window.filterData = filterData;