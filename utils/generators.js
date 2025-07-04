const seoHeadlines = [
  "Why {{name}} is {{location}}'s Hidden Gem in 2025",
  "Discover Top-Rated Services at {{name}}, {{location}}",
  "{{name}} is Taking Over {{location}} – Here’s Why!",
  "Customers Love {{name}} in {{location}} – Rated #1 in 2025",
  "Explore the Buzz Around {{name}} – {{location}}’s Favorite!",
  "{{name}} Has {{location}} Talking – Find Out Why!"
];

const getRandomRating = () => {
  return (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5 - 5.0
};

const getRandomReviews = () => {
  return Math.floor(Math.random() * 900 + 100); // 100 - 999
};

const generateHeadline = (name, location) => {
  const template = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
  return template.replaceAll('{{name}}', name).replaceAll('{{location}}', location);
};

module.exports = {
  getRandomRating,
  getRandomReviews,
  generateHeadline
};
