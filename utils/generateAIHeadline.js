require("dotenv").config();
const { CohereClient } = require("cohere-ai");

// ✅ Initialize Cohere client with the correct token
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

/**
 * Generates a unique, catchy, and SEO-optimized headline for a local business
 * @param {string} name - Business name
 * @param {string} location - Business location
 * @returns {Promise<string>} - Generated headline in plain text
 */
async function generateAIHeadline(name, location) {
  const prompt = `Generate a unique, catchy, and SEO-optimized headline under 15 words for a local business named "${name}" in "${location}". Respond only in the following JavaScript object format without any explanation:

{
  "headline": "<your headline here>"
}`;

  try {
    const response = await cohere.generate({
      model: "command",
      prompt,
      maxTokens: 60, // enough to return a JS object safely
      temperature: 0.8,
    });
    const rawText = response.generations[0].text.trim();
    // ✅ Try to parse the JS object from the response
    const match = rawText.match(/"headline"\s*:\s*"([^"]+)"/);
    if (match && match[1]) {
      return match[1];
    }

    // fallback if parsing fails
    console.warn("⚠️ Unexpected response format:", rawText);
    return "Discover the Best Cakes in Hyderabad!";
  } catch (error) {
    console.error("❌ Cohere API Error:", error.message || error);
    return "Find Top-Rated Local Treats Near You!";
  }
}

module.exports = generateAIHeadline;
