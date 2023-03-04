const Noticia = require('../modelos/noticias');
const NoticiaController = {
    listar: (req, res) => {
      const filtro = req.query.q;
      Noticia.buscar(filtro)
        .then(response => {
          res.render('pagina2', { APINoticias: response });
        })
        .catch(error => {
          res.status(400).send('algo salio mal');
        });
    }
  };
  
  module.exports = NoticiaController;