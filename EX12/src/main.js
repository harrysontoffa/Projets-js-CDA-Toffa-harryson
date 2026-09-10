import './style.css'


async function fetchUser() {
  const url = "https://randomuser.me/api/";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();
    return resultat.results[0];
  } catch (erreur) {
    console.error(erreur.message);
  }
}

function renderUser(user) {
  const photo = document.getElementById('photo');
  const nom = document.getElementById('nom')
  const experinece = document.getElementById('experience')
  const localisation = document.getElementById('localisation')

  photo.src = user.picture.large;
  photo.alt = `photo de ${user.name.first}`;

  nom.textContent = `${user.name.first} ${user.name.last}`;
  experinece.textContent = `📅 ${user.registered.age} ans d'expérience`;
  localisation.textContent = `📍 ${user.location.city}, ${user.location.country}`;
}

async function afficherProfil() {

  const user = await fetchUser();
  if(user) {
    renderUser(user)
  }
}
afficherProfil();

const boutonAleatoire = document.getElementById('aleatoire');

boutonAleatoire.addEventListener('click', function () {
  afficherProfil();
});
