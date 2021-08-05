let tema;
let modo;
let lugares;
let opciones;
let turno = 1;
let vidas = 3;
let vidas_jugador1 = 3;
let vidas_jugador2 = 3;
let eleccion;
let contador = 1;
let contador_jugador1 = 0;
let contador_jugador2 = 0;

let acierto;
let opcion_correcta;

let bandera_numero;
let bandera_numero1;
let bandera_numero2;
let bandera_numero3;

let bandera_elegida1;
let bandera_elegida2;
let bandera_elegida3;

let opcion_numero;
let opcion_numero1;
let opcion_numero2;
let opcion_numero3;

let opcion_elegida;
let opcion_elegida1;
let opcion_elegida2;
let opcion_elegida3;
let opcion_elegida4;

let nombre_jugador1 = "j1";
let nombre_jugador2 = "j2";

function titulo(){
	document.location.href = "index.html";
}

function comenzar(){
	lugares = ["canada", "bolivia", "brasil", "chile", "guatemala", "mexico", "paraguay", "peru", "uruguay", "venezuela", "belice", "colombia", "costarica", "ecuador", "elsalvador", "estadosunidos", "guayanafrancesa", "honduras", "nicaragua", "panama", "surinam"];
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];
	tema = "america";

	if (turno % 2 != 0){
		document.getElementById("nombre_jugador1").style.color="yellow";
		document.getElementById("nombre_jugador2").style.color="black"; 
	} else{
		document.getElementById("nombre_jugador2").style.color="yellow";
		document.getElementById("nombre_jugador1").style.color="black";
	}

	elec_vidas();
	elegir_bandera();
	elegir_opcion_correcta();
	elegir_bandera1_incorrecta();
	elegir_opcion1_incorrecta();
	elegir_bandera2_incorrecta();
	elegir_opcion2_incorrecta();
	elegir_bandera3_incorrecta();
	elegir_opcion3_incorrecta();
}

function elec_vidas(){
	modo = "2jugadores";
	if (modo == "1jugador"){
		console.log("1")
		document.getElementById("vidas_1jugador").style.display = "block";
		document.getElementById("vidas_primer_jugador").style.display = "none";
		document.getElementById("vidas_segundo_jugador").style.display = "none";
	} else{
		if (modo == "2jugadores"){
			console.log("2")
			document.getElementById("vidas_1jugador").style.display = "none";
			document.getElementById("vidas_primer_jugador").style.display = "block";
			document.getElementById("vidas_segundo_jugador").style.display = "block";
			document.getElementById("nombre_jugador1").innerHTML = nombre_jugador1;
			document.getElementById("nombre_jugador2").innerHTML = nombre_jugador2;
		} else{
			console.log(1)
		}
	}
}

function elegir_bandera(){
	bandera_numero = lugares.length;
	bandera_elegida = Math.floor(Math.random()*bandera_numero);
	document.getElementById("bandera").innerHTML = "<img src=img/" + tema + "/" + lugares[bandera_elegida] + ".png>";
	console.log("la bandera correcta es:" + lugares[bandera_elegida]);
}

function elegir_opcion_correcta(){
	opcion_numero = opciones.length;
	opcion_elegida1 = Math.floor(Math.random()*opcion_numero);
	if (opciones[opcion_elegida1] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida];
	} else{
		if (opciones[opcion_elegida1] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida];
		} else{
			if (opciones[opcion_elegida1] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida];
			}
		}
	}
	console.log("la opcion correcta es:" + opciones[opcion_elegida1]);	
}

function elegir_bandera1_incorrecta(){
	lugares.splice(bandera_elegida, 1);
	bandera_numero1 = lugares.length;
	bandera_elegida1 = Math.floor(Math.random()*bandera_numero1);
}

function elegir_opcion1_incorrecta(){
	opciones.splice(opcion_elegida1, 1);
	opcion_numero1 = opciones.length;
	opcion_elegida2 = Math.floor(Math.random()*opcion_numero1);
	if (opciones[opcion_elegida2] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida1];
	} else{
		if (opciones[opcion_elegida2] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida1];
		} else{
			if (opciones[opcion_elegida2] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida1];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida1];
			}
		}
	}	
}

function elegir_bandera2_incorrecta(){
	lugares.splice(bandera_elegida1, 1);
	bandera_numero2 = lugares.length;
	bandera_elegida2 = Math.floor(Math.random()*bandera_numero2);
}

function elegir_opcion2_incorrecta(){
	opciones.splice(opcion_elegida2, 1);
	opcion_numero2 = opciones.length;
	opcion_elegida3 = Math.floor(Math.random()*opcion_numero2);
	if (opciones[opcion_elegida3] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida2];
	} else{
		if (opciones[opcion_elegida3] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida2];
		} else{
			if (opciones[opcion_elegida3] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida2];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida2];
			}
		}
	}
}

function elegir_bandera3_incorrecta(){
	lugares.splice(bandera_elegida2, 1);
	bandera_numero3 = lugares.length;
	bandera_elegida3 = Math.floor(Math.random()*bandera_numero3);
}

function elegir_opcion3_incorrecta(){
	opciones.splice(opcion_elegida3, 1);
	opcion_numero3 = opciones.length;
	opcion_elegida4 = Math.floor(Math.random()*opcion_numero3);
	if (opciones[opcion_elegida4] == "opcion_1"){
		document.getElementById("opcion_1").innerHTML = lugares[bandera_elegida3];
	} else{
		if (opciones[opcion_elegida4] == "opcion_2"){
			document.getElementById("opcion_2").innerHTML = lugares[bandera_elegida3];
		} else{
			if (opciones[opcion_elegida4] == "opcion_3"){
				document.getElementById("opcion_3").innerHTML = lugares[bandera_elegida3];
			} else{
				document.getElementById("opcion_4").innerHTML = lugares[bandera_elegida3];
			}
		}
	}	
	console.log(vidas);
}

function opcion_1(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
		if (opciones[opcion_elegida1] == "opcion_1") {
			contador_jugador1++
			comenzar();
		} else{
			if (vidas_jugador1 > 1){
				vidas_jugador1--;
				comenzar();
			} else{
				alert("PERDISTE!");
				vidas_jugador1 = 3;
				contador_jugador1 = 0;
				comenzar();
			}
		}
	} else{
		if (opciones[opcion_elegida1] == "opcion_1") {
			if (turno % 2 != 0){
				contador_jugador1++
			} else{
				contador_jugador2++
			}
			turno++;
			comenzar();
		} else{
			if (turno % 2 != 0){
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					turno++;
					comenzar();
				} else{
					vidas_jugador1 = 3;
					vidas_jugador2 = 3;
					contador_jugador1 = 0;
					contador_jugador2 = 0;
					comenzar();
					turno = 1;
					alert(nombre_jugador2 + " GANOOO!");
				}
			} else{
				if (vidas_jugador2 > 1){
					vidas_jugador2--;
					turno++;
					comenzar();
				} else{
					vidas_jugador1 = 3;
					vidas_jugador2 = 3;
					contador_jugador1 = 0;
					contador_jugador2 = 0;
					comenzar();
					turno = 1;
					alert(nombre_jugador1 + " GANOOO!");
				}
			}
		}
	}
		
	document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
	document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
	document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
	document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
	document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
	document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
}

function opcion_2(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
			if (opciones[opcion_elegida1] == "opcion_2") {
				contador_jugador1++
				comenzar();
			} else{
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					comenzar();
				} else{
					alert("PERDISTE!");
					vidas_jugador1 = 3;
					contador_jugador1 = 0;
					comenzar();
				}
			}
		} else{
			if (opciones[opcion_elegida1] == "opcion_2") {
				if (turno % 2 != 0){
					contador_jugador1++
				} else{
					contador_jugador2++
				}
				turno++;
				comenzar();
			} else{
				if (turno % 2 != 0){
					if (vidas_jugador1 > 1){
						vidas_jugador1--;
						turno++;
						comenzar();
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						comenzar();
						turno = 1;
						alert(nombre_jugador2 + " GANOOO!");
					}
				} else{
					if (vidas_jugador2 > 1){
						vidas_jugador2--;
						turno++;
						comenzar();
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						comenzar();
						turno = 1;
						alert(nombre_jugador1 + " GANOOO!");
					}
				}
			}
		}
			
		document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
}

function opcion_3(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
			if (opciones[opcion_elegida1] == "opcion_3") {
				contador_jugador1++
				comenzar();
			} else{
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					comenzar();
				} else{
					alert("PERDISTE!");
					vidas_jugador1 = 3;
					contador_jugador1 = 0;
					comenzar();
				}
			}
		} else{
			if (opciones[opcion_elegida1] == "opcion_3") {
				if (turno % 2 != 0){
					contador_jugador1++
				} else{
					contador_jugador2++
				}
				turno++;
				comenzar();
			} else{
				if (turno % 2 != 0){
					if (vidas_jugador1 > 1){
						vidas_jugador1--;
						turno++;
						comenzar();
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						comenzar();
						turno = 1;
						alert(nombre_jugador2 + " GANOOO!");
					}
				} else{
					if (vidas_jugador2 > 1){
						vidas_jugador2--;
						turno++;
						comenzar();
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						comenzar();
						turno = 1;
						alert(nombre_jugador1 + " GANOOO!");
					}
				}
			}
		}
			
		document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
}

function opcion_4(){
	opciones = ["opcion_1", "opcion_2", "opcion_3", "opcion_4"];

	if (modo == "1jugador"){
			if (opciones[opcion_elegida1] == "opcion_4") {
				contador_jugador1++
				comenzar();
			} else{
				if (vidas_jugador1 > 1){
					vidas_jugador1--;
					comenzar();
				} else{
					alert("PERDISTE!");
					vidas_jugador1 = 3;
					contador_jugador1 = 0;
					comenzar();
				}
			}
		} else{
			if (opciones[opcion_elegida1] == "opcion_4") {
				if (turno % 2 != 0){
					contador_jugador1++
				} else{
					contador_jugador2++
				}
				turno++;
				comenzar();
			} else{
				if (turno % 2 != 0){
					if (vidas_jugador1 > 1){
						vidas_jugador1--;
						turno++;
						comenzar();
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						comenzar();
						turno = 1;
						alert(nombre_jugador2 + " GANOOO!");
					}
				} else{
					if (vidas_jugador2 > 1){
						vidas_jugador2--;
						turno++;
						comenzar();
					} else{
						vidas_jugador1 = 3;
						vidas_jugador2 = 3;
						contador_jugador1 = 0;
						contador_jugador2 = 0;
						comenzar();
						turno = 1;
						alert(nombre_jugador1 + " GANOOO!");
					}
				}
			}
		}
			
		document.getElementById("vidas_jugador1").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador1").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador").innerHTML = vidas_jugador1 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador").innerHTML = contador_jugador1 + " " + "<img class=contadores src=img/bien.png>";
		document.getElementById("vidas_jugador2").innerHTML = vidas_jugador2 + " " + "<img class=contadores src=img/corazon.png>";
		document.getElementById("contador_jugador2").innerHTML = contador_jugador2 + " " + "<img class=contadores src=img/bien.png>";
}
