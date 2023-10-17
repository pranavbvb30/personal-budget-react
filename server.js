const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();  
app.use(cors());

const budget = {
  myBudget: [
    {
      "title": "Parties",
      "budget": 70
    },
    {
        "title":"Utilities",
        "budget": 200
    },
    {
        "title": "Groceries",
        "budget": 108
    },
    {
        "title": "Eat out",
        "budget": 152
    },
    {
        "title": "Movies",
        "budget": 100
    },
    {
        "title":"Gas",
        "budget": 95
    },
    {
        "title": "Car loan",
        "budget": 155
    }
  ]
};

app.get('/', (req, res) => {
    res.send('This is root path');
  });

app.get('/budget', (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`API app listening at http://localhost:${port}`);
});
