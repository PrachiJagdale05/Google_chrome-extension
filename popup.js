document.addEventListener("DOMContentLoaded", async () => {
    const resultsDiv = document.getElementById("recommendations");
    resultsDiv.textContent = "Loading recommendations...";
    // Fetch recommendations from background.js
    chrome.runtime.sendMessage({ type: "getRecommendations" }, (response) => {
        resultsDiv.textContent = response.data || "No recommendations found.";
    });
});
