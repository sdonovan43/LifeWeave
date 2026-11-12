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
function showView(viewId) {
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
    event.target.classList.add('active');
    
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
    loadHealthData();
    loadRecommendations();
};