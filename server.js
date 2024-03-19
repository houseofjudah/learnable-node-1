const express = require('express');
const cors = require('cors');
const connectDB =  require('./database');
const routes = require('./routes');



require('dotenv').config();

const app = express();


app.use(cors());

// Bodyparser middleware
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.get('/ping', (req, res) => {
    res.send("pong");
});



app.use('/api/v1', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening to Port '+port));