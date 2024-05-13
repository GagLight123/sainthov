// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const apiKey = 'AIzaSyADcHyHaMerM6c80BVYAqlnnmzSizkoPHc';
const channelId = 'UCl4dy7u2kibajf-c9DIaGwA'; // Replace 'CHANNEL_ID' with Saint-Hov's channel ID

const subscriberCountElement = document.getElementById('subscriber-count');

function fetchSubscriberCount() {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const subscriberCount = data.items[0].statistics.subscriberCount;
            subscriberCountElement.textContent = `Subscribers: ${subscriberCount}`;
        })
        .catch(error => {
            console.error('Error fetching subscriber count:', error);
            subscriberCountElement.textContent = 'Error fetching subscriber count';
        });
}

// Fetch subscriber count on page load
fetchSubscriberCount();

// Refresh subscriber count every 30 seconds
setInterval(fetchSubscriberCount, 30000);
document.addEventListener("DOMContentLoaded", function(event) {
    // Hide loading overlay and show main content
    var overlay = document.getElementById("overlay");
    var mainContent = document.getElementById("main-content");

    overlay.style.display = "none";
    mainContent.classList.add("loaded");
});
