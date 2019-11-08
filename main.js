function cambiarMes(mes) {
	if (mes == "octubre") {
		$("#septiembre").hide();
		$("#octubre").show()
	} else if (mes == "septiembre") {
		$("#octubre").hide()
		$("#septiembre").show();

	}

}



function mostrarPagina(pagina) {
	if (pagina == "home") {
		$("#game-info").hide()
		$("#contact").hide();
		$("#home").show()
	}

	if (pagina == "game-info") {
		$("#home").hide()
		$("#contact").hide();
		$("#game-info").show()
	}

	if (pagina == "contact") {
		$("#home").hide()
		$("#game-info").hide();
		$("#contact").show()

	}
}


	$("#octubre").hide()
	$("#septiembre").show();

	$("#home").hide()
	$("#contact").hide()
	$("#game-info").show();


