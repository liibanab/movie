const API_KEY = "5d7cfda57eb2b2a78bfb1ce71cb6ddb7" ,
pageNum = 1 ,
     API_URL = `https://api.themoviedb.org/3/discover/movie?
     sort_by=popularity.desc&page=${pageNum}&api_key=${API_KEY}`,
     IMG_URL = "https://image.tmdb.org/t/p/w500" ;
     SEARCH_API  =   `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

     // function return movies
     async function getMovies(url) {
        const response = await fetch(url) ,
                  data = await response.json();
        // console.log(data.results)
        displayMovies(data.results)
     }          
     getMovies(API_URL)

     // displaying inside html

     async function displayMovies(movies) {
        const row = document.querySelector('.row') 
    for(let movie of movies ) {

        const div = document.createElement('div')
         div.className = "col col-lg-3 col-md-6 col-sm-12 my-2 movie"; 
         div.innerHTML = `
         <div class="card text-center ">

        <img src="${IMG_URL}${movie.poster_path}" 
            alt="movie poster">
            <div class="card-body">
            <h4 class="card-title bg-light p-3 shadow ">
            ${movie.title}
            <span class="badge badge-pill   
            ${getClassByVote_average(movie.vote_average)}">
            ${movie.vote_average}<span>
            </h4>
            <div class="overview">
            <h3 class="bg-dark text-light p-3">Overview</h3>
            <p class="card-text">
            ${movie.overview }
            </p>

            </div>

         </div>
         </div>
          ` ;
         row.appendChild(div);
    }
    
    }
    // search


    const form = document.querySelector('form')
    form.addEventListener('click' , (event) =>  {
      event.preventDefault();
      const search = document.querySelector('#search')
     // console.log(search.value)
       if(search != '') {
         getMovies(`${SEARCH_API}${search.value}`)
         search.value = '';

       }else {
         window.location.reload();

       }

    })
    //vote 
    function getClassByVote_average(vote) {
return vote > 6.5 ? 'bg-success' : 'bg-danger'   }
    
