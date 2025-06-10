function description(){
    document.getElementById("description").style.display = "block";
    document.getElementById("details").style.display = "none";
    document.querySelector(".content-panel").classList.add = "active";
}
function movieDetails(){
    document.getElementById("details").style.display = "block";
    document.getElementById("description").style.display = "none";
    document.querySelector(".content-panel").classList.add = "active";
}
function closeCard() {
    movieCard.style.display = 'none';
}



const params = new URLSearchParams(window.location.search);
const  name= params.get("name");
const year = params.get("year");
const desc = params.get("description");
const image = params.get("image");
const genre = params.get("genre");
const country = params.get("country");
const interpreter = params.get("interpreter");
const trailerVideo = params.get("trailerVideo");
const movieVideo = params.get("movieVideo");
const director = params.get("director");
const rating = params.get("rating");
const caster1Image = params.get("caster1Image");
const caster2Image = params.get("caster2Image");
const caster3Image = params.get("caster3Image");
const caster4Image = params.get("caster4Image");
const caster1Name = params.get("caster1Name");
const caster2Name = params.get("caster2Name");
const caster3Name = params.get("caster3Name");
const caster4Name = params.get("caster4Name");
const caster1Role = params.get("caster1Role");
const caster2Role = params.get("caster2Role");
const caster3Role = params.get("caster3Role");
const caster4Role = params.get("caster4Role");





document.getElementById("movieName").textContent = name;
document.getElementById("movieDate").textContent =  year;
document.getElementById("movieImage").src = image;
document.getElementById("movieGenre1").textContent = params.get("genre");
document.getElementById("movieDescriptions").textContent = desc;
document.getElementById("movieCountry").textContent =  params.get("country");
document.getElementById("movieTrailerbg").src = trailerVideo;
// document.getElementById("movieVideo").src = movieVideo;
// document.getElementById("movieDirector").textContent = "Directed by: " + director;
// document.getElementById("movieRating").textContent = "Rating: " + rating;
document.getElementById("Caster1Image").src = caster1Image;
document.getElementById("caster2Image").src = caster2Image;
document.getElementById("caster3Image").src = caster3Image;
document.getElementById("caster4Image").src = caster4Image;
document.getElementById("caster1Name").textContent = caster1Name;
document.getElementById("caster2Name").textContent = caster2Name;
document.getElementById("caster3Name").textContent = caster3Name;
document.getElementById("caster4Name").textContent = caster4Name;
document.getElementById("caster1Roledescription").textContent = caster1Role;
document.getElementById("caster2Roledescription").textContent = caster2Role;
document.getElementById("caster3Roledescription").textContent = caster3Role;
document.getElementById("caster4Roledescription").textContent = caster4Role;
var downloadbtn = document.getElementById("downloadBtn")
downloadbtn.addEventListener('click', function() {
    window.open(movieVideo, '_blank');
    // console.log("Download button clicked");
});

document.getElementById("playBtn"); 
// Function to close the movie card

