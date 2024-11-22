chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.type === "getRecommendations") {
        const recommendations = await fetchRecommendations();
        sendResponse({ data: recommendations });
    }
    return true; // Keep the message channel open for async response
});

async function fetchRecommendations() {
    const query = "example search"; // Replace with dynamic input
    // Use Google Gemini Nano API here
    const response = await fetch(`https://api.example.com/recommend?query=${query}`);
    const data = await response.json();
    return data.recommendations.join(", ");
}
