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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTtcclxuICAgIGNvbm5leGlvbi5yZXF1dGVEZXJuaWVyRmlsbSgpO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbmNsYXNzIE1vdmllREIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IG1vdmllREIoKVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcGlrZXk9IFwiYmUxNTRmODgwNzQwOGNmNzUwYTRmZTRhOWVhZTUwY2FcIjtcclxuICAgICAgICB0aGlzLmxhbmcgPSBcImZyLUNBXCI7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL1wiO1xyXG4gICAgICAgIHRoaXMuaW1hZ1BhdGggPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiO1xyXG4gICAgICAgIHRoaXMubmJGaWxtcyA9IDggO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXV0ZURlcm5pZXJGaWxtKCl7XHJcblxyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHJlcXVldGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJEZXJuaWVyRmlsbS5iaW5kKHRoaXMpKTtcclxuICAgICAgICByZXF1ZXRlLm9wZW4oJ0dFVCcsIHRoaXMuYmFzZVVybCsnbW92aWUvcG9wdWxhcj9hcGlfa2V5PScrdGhpcy5hcGlrZXkrJyZsYW5ndWFnZT0nK3RoaXMubGFuZysnJnBhZ2U9MScpO1xyXG4gICAgICAgIHJlcXVldGUuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldG91ckRlcm5pZXJGaWxtKGV2ZW50KXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JldG91ckRlcm5pZXJGaWxtJyk7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHNcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnYWZmaWNoZURlcm5pZXJGaWxtJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS50aXRsZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
