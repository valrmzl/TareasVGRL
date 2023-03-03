const axios = require('axios');

const Noticia = {
  buscar: (filtro) => {
    const apiKey = 'a357e007c75f49f0a27bc431acd49c4c';
    const url='https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=a357e007c75f49f0a27bc431acd49c4c'
    // Solicitar HTTP GET a la URL de la API
    return axios.get(url).then(response => {
      console.log('fui a buscar a la base');
      let APINoticias=response.data.articles;
      if(filtro){
        APINoticias=APINoticias.filter(noticia => noticia.title.toLowerCase().includes(filtro.toLowerCase()));
      }
      return APINoticias;
    });
  }
};
module.exports = Noticia;
