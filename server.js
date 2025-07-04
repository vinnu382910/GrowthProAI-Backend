require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000; // Uses PORT from .env or defaults to 5000

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})