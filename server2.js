const express = require('express');
const app = express();   // ✅ FIXED
const body_parser = require('body-parser');

// Middleware
app.use(body_parser.json());

// DB connection
const db = require('./db2');

require('dotenv').config();

// Import model
const restaurentmenu = require('./modules/breatmenu');

// const db1=require('./db1');
// const emplayee=require('./modules/emplayees')

// Default route
app.get('/', (req, res) => {
    res.json('server is running');
});

// Insert menu (POST)
// app.post('/menusearch', async (req, res) => {
//     try {
//         const data = req.body;
//         const newmenu = new restaurentmenu(data);
//         const result = await newmenu.save();
//         console.log('All data stored in mongodb');
//         res.status(200).json(result);
//     } catch (err) {
//         console.log('Error while storing data:', err);
//         res.status(400).json(err);
//     }
// });

// // Get all menus (GET)
// app.get('/menusearch', async (req, res) => {
//     try {
//         const data = await restaurentmenu.find();
//         console.log('Data fetched');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log('Error while fetching data:', err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });


// app.get('/menusearch/:foodtype', async (req, res) => {
//     try {
//         const foodtype = req.params.foodtype;

//         if (foodtype == 'red' || foodtype == 'white' || foodtype == 'rosh') {
//             const responce = await restaurentmenu.find({ type: foodtype }) // fixed field: type
//             console.log('responce accure');
//             res.status(200).json(responce);
//         }
//         else {
//             res.status(400).json({ error: 'invalid search' })
//         }

//     } catch (err) {
//         console.log('Error while fetching data:', err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// })


// Start server

const newrouter=require('./modules/router/breatmenurouter');
app.use('/menusearch',newrouter);

const newempalyees=require('./modules/router/emplayeerouter');
app.use('/emplayee',newempalyees)

//Run on port 4000
const PORT=process.env.PORT ||4000
app.listen(PORT, () => {
    console.log('server run successfully on port 4000');
});
