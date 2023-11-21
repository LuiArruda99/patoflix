//Default Array =============================
var moviesList = [
  {
    name:"Dr. House",
    posterUrl:"https://media.fstatic.com/wun3aDD9dZuuOHiFJTR1rY4nPkk=/322x478/smart/filters:format(webp)/media/movies/covers/2011/12/9814772a35af8875f9f734b7ae5ba5ca.jpg",
    trailerUrl: "https://www.imdb.com/title/tt0412142",
  },
  {
    name:"A Chegada", 
    posterUrl:"https://br.web.img3.acsta.net/r_1280_720/pictures/16/08/16/17/37/197487.jpg",
    trailerUrl:"https://www.youtube.com/embed/rNciXGzYZms",
  },
  {
    name:"O Óleo de Lorenzo",
    posterUrl:"https://filmestipo.com/img_pt/movie/thumb/95/11127.jpg",
    trailerUrl:"https://www.adorocinema.com/filmes/filme-35570/trailer-19445827",
  },
  {
    name:"The Good Doctor",
    posterUrl:"https://cdn.nwmgroups.hu/s/img/i/1708/20170816the-good-doctor.jpg",
    trailerUrl:"https://www.imdb.com/title/tt6470478",
  },
  {
    name:"CSI: Investigação Criminal",
    posterUrl:"https://pm1.aminoapps.com/7279/2210db97252d8b9b4740c0ca15fe2c428853a48br1-680-1000v2_uhq.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=jqCw0gw7Eg8",
  },
  {
    name: "O Físico",
    posterUrl: "https://portal.wemeds.com.br/wp-content/uploads/2021/08/o-fisico.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=XW7o9qMzlX8",
  }
]

//First Load =============================
renderMovies()
document.getElementById("movieName").focus()

//Movies Catalog Load =============================
function renderMovies () {
  var catalogContainer = document.getElementById("catalogContainer");
  catalogContainer.innerHTML = '';

  moviesList.forEach(movie => {
    var movieContainer = document.createElement('div');
    movieContainer.className = "movieContainer";

    var img = document.createElement('img');
    img.src = movie.posterUrl;

    var nameContainer = document.createElement('div');
    nameContainer.textContent = movie.name;
    nameContainer.className = "nameContainer";
    
    var buttonsContainer = document.createElement('div');
    buttonsContainer.className = "buttonsContainer";
       
    var trailerButton = document.createElement('button');
    trailerButton.textContent = "Trailer"
    trailerButton.className = "trailerButton"
    trailerButton.addEventListener('click', function () {
      openTrailer(movie.trailerUrl);
    });
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Excluir"
    deleteButton.className = "deleteButton"
    deleteButton.addEventListener('click', function () {
      deleteMovie(movie);
      renderMovies(); 
    });
    
    buttonsContainer.appendChild(trailerButton)
    buttonsContainer.appendChild(deleteButton)
    movieContainer.appendChild(img);
    movieContainer.appendChild(nameContainer);
    movieContainer.appendChild(buttonsContainer);
    catalogContainer.appendChild(movieContainer);
  });
}

//Open Trailer YT =============================
function openTrailer(trailerUrl) {
  window.open(trailerUrl, '_blank');
}

//Add New Movie =============================
function addMovie(){
  const movieName = document.getElementById("movieName").value;
  const posterUrl = document.getElementById("posterUrl").value;
  const trailerUrl = document.getElementById("trailerUrl").value;
  const foundMovie = moviesList.find((movie) => movie.name == movieName);
  
  if (movieName == "") {
    alert("Obrigatório informar o Nome do Filme!");
  } else if (foundMovie) {
    alert("Este filme já foi cadastrado.");
  } else if (posterUrl == "") {
    alert("Obrigatório informar a Url do Poster!");
  } else if (!posterUrl.endsWith("jpeg") && !posterUrl.endsWith("jpg")) {
    alert("Url do poster inválida! A imagem deve ter formato .jpg ou .jpeg");
  } else if (trailerUrl == "") {
    alert("Obrigatório informar a Url do Trailer!");
  } else {
    moviesList.push({ name: movieName, posterUrl: posterUrl, trailerUrl: trailerUrl.replace("watch?v=","embed/") });
    renderMovies();
    
    alert(`O filme ${movieName} foi cadastrado com sucesso!`);
    
    clearInputs()
  }
}

//Clear Input Fields =============================
function clearInputs(){
  document.getElementById("movieName").value = ""
    document.getElementById("posterUrl").value = ""
    document.getElementById("trailerUrl").value = ""
    document.getElementById("movieName").focus()
}

//Delete Movie drom Array =============================
function deleteMovie(movie){
  var index = moviesList.findIndex(m => m.name === movie.name);

  if (index !== -1) {
    moviesList.splice(index, 1);
    alert(`O filme "${movie.name}" foi excluído.`);
  } else {
    alert(`O filme "${movie.name}" não foi encontrado.`);
  }
}

