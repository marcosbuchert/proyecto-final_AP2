let tema;
let modo;
let modos;
let temas;
let lugares;
let acierto;

function titulo(){
	document.location.href = "index.html";
}

function modo1(){
	modo = "1 Jugador";
	document.getElementById("titulo_modo").innerHTML = "Modos de Juegos : " + modo;
	document.getElementById("segundo_jugador").style.display = "none";
	modos = 1;
}

function modo2(){
	modo = "2 Jugadores";
	document.getElementById("titulo_modo").innerHTML = "Modos de Juegos : " + modo;
	document.getElementById("segundo_jugador").style.display = "block";
	modos = 1;
}

function tema_provincias(){
	tema = "provincias";
	lugares = ["chubut", "cordoba", "formosa", "mendoza", "santafe", "rionegro", "tucuman", "sanjuan", "buenosaires"];
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	temas = 1;
}

function tema_america(){
	tema = "america";
	let lugares = ["canada", "bolivia", "brasil", "chile", "guatemala", "mexico", "paraguay", "peru", "uruguay", "venezuela"];
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	temas = 1;
}

function tema_europa(){
	tema = "europa";
	let lugares = ["alemania", "escocia", "españa", "francia", "gales", "holanda", "irlanda", "italia", "reinounido", "republicacheca"];
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	temas = 1;
}

function tema_asia(){
	tema = "asia";
	let lugares = ["", "", "", "", "", "", "", "", "", ""];
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	temas = 1;
}

function tema_africa(){
	tema = "africa";
	let lugares = ["", "", "", "", "", "", "", "", "", ""];
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	temas = 1;
}

function tema_oceania(){
	tema = "oceania";
	let lugares = ["", "", "", "", "", "", "", "", "", ""];
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	temas = 1;
}

function tema_mundo(){
	tema = "mundo";
	let lugares = ["", "", "", "", "", "", "", "", "", ""];
	document.getElementById("titulo_tema").innerHTML = "Tema : " + tema;
	temas = 1;
}

function datos(){
	var nombre_jugador1 = document.getElementById("nombre_jugador1").value;
	var nombre_jugador2 = document.getElementById("nombre_jugador2").value;
	if (modo = "1 Jugador"){
		if (nombre_jugador1 == ""){
		document.getElementById("nombre_jugador1").focus();
		} else{
				jugar();
				return 1;
			}
	} else{
		if (nombre_jugador1 == ""){
		document.getElementById("nombre_jugador1").focus();
		} else{
			if (nombre_jugador2 == ""){
			document.getElementById("nombre_jugador2").focus();
			} else{
				jugar();
				return 1;
			}
		}
	}
}

function jugar(){
	if (modos == 1 && temas == 1){
		document.location.href = "juego.html"
	} else{
		alert("Falta algun dato");
	}
}

