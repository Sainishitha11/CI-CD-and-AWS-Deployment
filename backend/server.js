const express = require('express');
const cors = require('cors');   

const app = express();

app.use(cors());               

app.get('/student-details', (req, res) => {
    res.json({
        name: "Kamma Sainishitha",
        roll: "2023BCD0031",
    });
});

app.listen(5000, '0.0.0.0', () => {
    console.log("Server running on port 5000");
});