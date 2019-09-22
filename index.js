const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
const publicPath = path.join(__dirname, 'views/layouts');
app.use('/', express.static(publicPath));
app.listen(port);
console.log(`Server listen on http://localhost:${port}`);

app.get('/', (request, response) => {
  response.render('home', {
    name: 'Serhii'
  });
});