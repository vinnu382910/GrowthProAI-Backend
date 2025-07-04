const {  getRandomRating, getRandomReviews, generateHeadline} = require('../utils/generators');

const getBusinessData = (req, res) => {
    try {
        const {name, location} = req.body;

         // Validation: required fields
        if(!name || !location){
            return res.status(400).json({error: 'Name and location are required'})
        }

         // Validation: types
        if (typeof name !== "string" || typeof location !== "string"){
            return res.status(400).json({error: 'Name and location must be a string'})
        }

        const rating = parseFloat(getRandomRating());
        const reviews = getRandomReviews();
        const headline = generateHeadline(name, location);

        res.json({rating, reviews, headline})
    } catch (error) {
        console.error('Error generating business data:', error); // optional debug log
        res.status(500).json({ error: 'Server Error' });
    }
}

const regenerateHeadline = (req, res) => {
    try{
        const {name, location} = req.query;

        if(!name || !location){
            res.status(400).json({error: 'Name and location are required'})
        }

        if (typeof name !== "string" || typeof location !== "string"){
            return res.status(400).json({error: 'Name and location must be a string'})
        }

        const headline = generateHeadline(name, location);

        res.json({headline});
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}


module.exports = {
  getBusinessData,
  regenerateHeadline
};
