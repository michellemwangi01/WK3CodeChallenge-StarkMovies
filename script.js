  const movieImage = document.getElementById('movieImage')
  const movieTitleDetails = document.getElementById('movieTitleDetails')
  const movieDescription = document.getElementById('movieDescription')
  const movierunTime = document.getElementById('movierunTime')
  const movieShowTime = document.getElementById('movieShowTime')
  const remainingTickets = document.getElementById('remainingTickets')
  const movieTitlesContainer = document.getElementById('movieTitlesContainer')
  const movieTitlesCard = document.createElement('div')
  const buyNowBtn = document.getElementById('buyNowBtn')


  document.addEventListener('DOMContentLoaded',()=>{
    fetchFilmData()
    buyNowBtn.addEventListener('click',()=>{

    })
    
  })


    function fetchFilmData() {
      fetch("http://localhost:3000/films")
        .then((res) => res.json())
        .then((films) => {
          films.forEach(createMoviePreviewCard) //create preview Card for each movie

          
          //randomize appearance of movie detail cards
          let movieKeys = Object.keys(films);
          let numberOfMovies = movieKeys.length;
          let filmChoiceNum = Math.floor(Math.random() * numberOfMovies);
          let filmChoice = films[movieKeys[filmChoiceNum]];
          movieTitleDetails.textContent = filmChoice.title;
          movieImage.src = filmChoice.poster;
          movieDescription.textContent = filmChoice.description;
          movierunTime.textContent = `RunTime: ${filmChoice.runtime} minutes`;
          movieShowTime.textContent = `Showtime: ${filmChoice.showtime}`;
          remainingTickets.textContent = `Remaining Tickets: ${
            filmChoice.capacity - filmChoice.tickets_sold
          }`;
          

        
        });
    }


  function createMovieDetailsCard(film){
    let cardContainer = document.createElement('div')
    cardContainer.setAttribute('class', 'container')
    let parentDiv = document.getElementById('bodyDiv')
    parentDiv.appendChild(cardContainer)
    cardContainer.innerHTML = `
    <div class="wrapper">
        <div class="banner-image"> 
            <img src="${film.poster}" alt="">
        </div>
        <h1> ${film.title}</h1>
        <p>${film.description}</p>
    </div>
    <div class="button-wrapper"> 
     <button class="btn outline">DETAILS </button> 
     <!--   <button class="btn fill">BUY NOW</button>-->
   </div>`
  }

function createMoviePreviewCard(film){
  const moviePreviewCard = document.createElement('div');
  movieTitlesContainer.append(moviePreviewCard)
  moviePreviewCard.innerHTML = `
    <div class="cardTitles" id="cardTitles-${film.id}">
        <div class="imgPoster" id="imgPoster">
            <img src="${film.poster}" alt="">
        </div>
        <div>
            <h3 id="movieTitle">${film.title}</h3>
        </div>
        <!-- <div id="detailsBtnDiv">
          <button class="movieDetails" id="movieDetails-${film.id}">View Details</button>
        </div> -->
  </div>`

    let movieDetailsCard = document.getElementById(`cardTitles-${film.id}`)
    movieDetailsCard.addEventListener('click', ()=>{
       console.log(film.title);
       let filmID = film.id
       movieTitleDetails.textContent = film.title;
          movieImage.src = film.poster;
          movieDescription.textContent = film.description;
          movierunTime.textContent = `RunTime: ${film.runtime} minutes`;
          movieShowTime.textContent = `Showtime: ${film.showtime}`;
          let remainingTicketsNum = film.capacity - film.tickets_sold
          remainingTickets.textContent = `Remaining Tickets: ${remainingTicketsNum}`;
    //scrollIntoView: used to scroll to a particular section of a page. MovieImage is the section that we would like to scroll TO
    movieImage.scrollIntoView({behavior: 'smooth'})

    buyNowBtn.addEventListener('click',()=>{
     if(remainingTicketsNum == 0){
      alert("Sorry, this viewing is fully booked!")
     }
    })
})
}


  var imgSlider = document.getElementById('imgSlider');
  var slides=['iron-man-3-small.jpg','iron-man-3.jpg', 'ironMan.jpg','M3gan.jpg', 'miss-sloane.jpg'];
function imgSlider(){
  
 // var Start=0;

  for (let i = 0; i< slides.length; i++){
    imgSlider.src =  "./Images/" + slides[i];
    console.log(imgSlider);

  }

      // if(Start<slides.length){
      //     Start=Start+1;
      // }
      // else{
      //     Start=1;
      // }
      // console.log(imgSlider);
      // imgSlider.src =  "./Images/" + slides[Start - 1];
}
// setInterval(imgSlider,5000);
