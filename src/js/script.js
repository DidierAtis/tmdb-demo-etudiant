document.addEventListener("DOMContentLoaded", function(){

    let connexion = new MovieDB();
    connexion.requteDernierFilm();


});


class MovieDB {

    constructor() {
        console.log("new movieDB()");

        this.apikey= "be154f8807408cf750a4fe4a9eae50ca";
        this.lang = "fr-CA";
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.imagPath = "https://image.tmdb.org/t/p/";
        this.nbFilms = 8 ;
    }

    requteDernierFilm(){

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourDernierFilm.bind(this));
        requete.open('GET', this.baseUrl+'movie/popular?api_key='+this.apikey+'&language='+this.lang+'&page=1');
        requete.send();
    }

    retourDernierFilm(event){

        console.log('retourDernierFilm');
        let target = event.currentTarget;
        let data = JSON.parse(target.responseText).results
        console.log(data);


        this.afficherDernierFilm(data);
    }

    afficherDernierFilm(data){

        console.log('afficheDernierFilm');

        for (let i = 0; i < data.length; i++) {

            console.log(data[i].title);

        }
    }

}

