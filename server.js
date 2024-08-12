const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/database')
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/banner', (req, res) => {
    db.query('SELECT * FROM banner WHERE id = 1', (err, result) => {
        if(err)
            console.log(err);
        res.json(result[0]);
    });
});

app.post('/api/bannner', (req, res) => {
    const { visible, description, timer, link } = req.body;
    const query = 'UPDATE banner SET visible = ?, desciption = ?, timer = ?, link = ? WHERE id = 1';
    
    db.query(query, [visible, description, timer, link], (err) => {
        if(err)
            console.log(err);
        res.send('Banner updated successfully');
    });
});

db.query("select * from banner",(err, result) => {
    if(err) 
        console.log(err);
    console.log("Result : ", result);
})



app.listen(process.env.PORT, () => {
    console.log('Server running on port 5000');
});