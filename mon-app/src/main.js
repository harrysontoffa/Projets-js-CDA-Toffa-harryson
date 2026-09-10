

const movies = []
const defaultMovies = []
 class film {
  constructor(id,title,votes) {
    this.id = id;
    this.title = title;
    this.votes= votes;
  }
 }

 const Inception = new film(9,"Inception",9)
const TheDarkKnight = new film(5,"The Knight ",5)
 const Interstellar = new film(7,"Interstellar",7)
 const PulpFiction = new film(23,"Pulp fiction",1)
 const Parasite = new film(25,"Parasite",1)
 const Gladiator = new film(26,"Gladiator",6)




 movies.push(Inception, TheDarkKnight, Interstellar, PulpFiction, Parasite, Gladiator)
 console.log(movies)

 const container = document.getElementById('container')

 

 // container grandre grille qui content tout les modales de votes


  
 container.style.backgroundColor = "whitesmoke";
 container.style.width = "max-content";
 container.style.height = "max-content"
 container.style.display = "grid"
 container.style.gridTemplateColumns = "repeat(3, 1fr)"
container.style.gap = '16px';
container.style.padding = '15px 15px';


function createCard(i) {   
  // card film unique 
  const card = document.createElement('div')
 card.id = 'card'
  // card.style.backgroundColor= 'pink';

card.style.height = "150px"
card.style.width = "150px"
card.style.display = "flex"
card.style.flexDirection = "column"
card.style.justifyContent = "center"
card.style.alignItems = "center"
card.style.padding = "10px 70px"
card.style.borderRadius = "08px"
card.style.boxShadow ="#00000042 -2px -1px 12px 2px"
const title = document.createElement('p')
title.setAttribute('data-id', 'title')
title.textContent = movies[i].title
 card.appendChild(title);
 
 const votes = document.createElement('p')
 votes.id = 'votes';
 votes.textContent = movies[i].votes + ' '+"votes"

 card.appendChild(votes)
 const button = document.createElement('button')
 button.classList = 'button'
 button.textContent= "👍 Vote"
 button.style.padding = "3px 6px"
 button.style.border = "1px solid rgb(106,90,205)"
 button.style.borderRadius = "4px"
 button.style.backgroundColor = "rgb(106,90,205)"
 
button.dataset.movieId  = movies[i].id



button.addEventListener('click', ()=> {
  const filmTrouve  = movies.find(filmTrouve  => filmTrouve .id ===movies[i].id)
  filmTrouve .votes++


  localStorage.setItem(
    "votesF",
    `${filmTrouve.votes}`
  );
const VotesFinale = localStorage.getItem("votesF");


  votes.textContent = VotesFinale + ' ' +"votes"
})


 card.appendChild(button)
 container.appendChild(card)
}


function tableauVote(){
   for(let x =0; x < movies.length; x++){
    createCard(x)
   }
}

tableauVote()


//  const voteBtn = document.querySelectorAll('.button')

// voteBtn.forEach((button) => {

//   button.addEventListener('click', (e) => {
//     const id = 
//   })
// })

// penser a ajouter fonction pour rajouter nouveau filme 
// penser a crere une fonction pour choisir les film a mettre en sondage

 