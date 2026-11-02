var tabSortes = ["coeur", "carreau", "pique", "trefle"];

//=================================================================
// Fournit un nombre aléatoire entier entre 0 et pMax - 1
function randNumber(pMax)
{
	return (Math.floor(pMax * Math.random()));
}

// Une fonction qui rend toutes les cartes blanches
function retirerLesClasses()
{
	let lesCartes = document.getElementsByTagName("li");

	for(let carte of lesCartes){
		carte.className = "";
	}
}

//=================================================================
function exemple1()
{
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	// Modifier le code pour appliquer le changement pour toutes les cartes
	// Il faut utiliser une boucle avec un index 
	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = "coeur13";
	}
}

//=================================================================
function exemple2()
{
	retirerLesClasses();
	
	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = ("pique" + (i + 1))
	}
}

//=================================================================
function exemple3()
{	
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = ("coeur" + (8 + i))
	}
}

//=================================================================
function exemple4()
{ 	
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		lesCartes[i].className = ("carreau" + (6 - i))
	}
}

//=================================================================
function exemple5()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){

		lesCartes[i].className = ("trefle" + (1 + (i * 2)))
	}
}
//=================================================================
function exemple6()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){

		lesCartes[i].className = tabSortes[1] + ((i % 3) + 1)

	}
}

//=================================================================
function exemple7()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){
		if(i % 2 == 0){
			lesCartes[i].className = tabSortes[2] + (i + 1)
		}
		else{
			lesCartes[i].className = tabSortes[0] + (i + 1)
		}
		

	}
}

//=================================================================
function exemple8()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){

		lesCartes[i].className = tabSortes[1] + (Math.floor(Math.random() * 13) + 1)

	}
}

//=================================================================
function exemple9()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	let nombre = Math.floor(Math.random() * 8) + 1

	for(let i = 0; i < lesCartes.length; i++){

		lesCartes[i].className = tabSortes[2] + (nombre + i)

	}

	
}

//=================================================================
function exemple10()
{   
	retirerLesClasses();

	let lesCartes = document.getElementsByTagName("li");

	for(let i = 0; i < lesCartes.length; i++){

		lesCartes[i].className = tabSortes[randNumber(4)] + (Math.floor(Math.random() * 13) + 1)

	}
}



//=================================================================
// Gestion des événements des boutons
// On obtient les boutons de la page
let liste = document.getElementsByTagName("button");

for(let button of liste){
	button.onclick = function() {
		// On utilise leur Id comme nom de fonction et on appel cette fonction!!
		// window permet d'appeler une fonction dont le nom est contenu dans une chaîne de caractères. 
		window[button.getAttribute("id")].call();
	};	
}
