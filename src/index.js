const express = require('express');
const hbs= require ('hbs');
const { album } = require('./utils/utils');
const path = require("path");
const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');

const app = express();
app.use(express.static(publicDir));
app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Album App',
        name: 'semi',
        surname: 'kushta',
    });
});

    app.get('/Albums', ((req, res) => {
        const userID=req.query.userId;
        console.log(req.query.userId)
        if (!req.query.userId) {
            return res.send({ error: 'You must provide an user id' });
        }
        album(userID, (error, data, message) => {
          if (error) {
              return res.send({error: error, message: message});
          }
          else { return res.send({albums:data})};
          console.log(data);
      });
    }));
    const port = process.env.PORT || 3000;
    app.listen( port,() => {
        console.log('Server running at port 3000');
    });
