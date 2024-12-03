const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

app.post('/translate', async (req, res) => {
    try {
      const { source_lang, target_lang, text } = req.body;
  
  
      const url = 'https://script.google.com/macros/s/AKfycbxPkKuJMSr0AB7XG15w8DrE_lJK8bT64r5sKw3ESjbSRlgpyIvUcPpQv8vrbJhiUzGHuw/exec';
  
      const response = await axios.post(url, {
        source_lang,
        target_lang,
        text
      });
  
  
      res.json(response.data);
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: 'Error translating text', error: error.message });
    }
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});