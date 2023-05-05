const register = document.getElementById('register');
const formulaire = document.getElementById('formulaire');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const boutonx = document.getElementById('boutonx');
const dregister = document.getElementById('dregister');

register.addEventListener('click', () =>
{
    register.style.display='block';
    register.style.position='relative';
    formulaire.style.display='block';
    formulaire.style.position='absolute';
    formulaire.style.opacity='80%';
})


boutonx.addEventListener('click',() =>{ 
formulaire.style.display='none';
alert("bonjour" + nom.value +" "+ prenom.value + " "+ "!")
})

