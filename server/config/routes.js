const movies = require('../controllers/movies');
const path = require('path');

module.exports = app =>{
  app.get('/api/movies',movies.getAll);
  app.get('/api/movies/:id',movies.getOne);
  app.post('/api/movies',movies.new);
  app.put('/api/movies/add/:id',movies.add);
  app.delete('/api/movies/:id',movies.destroy);
  app.all('*',(req,res)=>{
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  });
};