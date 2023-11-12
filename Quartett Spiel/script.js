$(document).ready(function () {
	$.getJSON("./data.json", function (jsonData) {
		const container = $("#container"); // Ersetze '#container' mit dem Selektor deines Containers

		//so viele wir in der json haben
		const numberOfCards = jsonData.length;

		//Input für die Karten
		let inputCard = [
			"years",
			"speed",
			"height",
			"number_teeth",
			"iq",
			"number_eggs",
		];
		let inputCardName = ["years", "speed", "height", "teeth", "iq", "eggs"];

		//Durchetarieren durch die Daztenbank
		for (let i = 0; i < numberOfCards; i++) {
			// Erstellen Sie ein neues Karten-Element mit der ge	wünschten Struktur
			const card = $("<div id='wrapper'></div>");

			//1. Daten werden eingefügt vom 1. Grid
			const h2 = $("<h2></h2>").text(jsonData[i].group_letter);

			const description = $("<div class='description'></div>");

			const h3 = $("<h3></h3>").text(jsonData[i].name);
			const h4 = $("<h4></h4>").text(jsonData[i].group);
			const img = $(
				"<img id='image' src='./img/image.jpg' alt='" +
					jsonData[i].name +
					"'>"
			);

			const article = $("<article id='wrapper2'></article>");

			// 2. Daten werden eingefügt aus dem 2. Grid

			for (let j = 1; j <= 12; j++) {
				const section = $(
					"<section class='card' id='karte-" + j + "'></section>"
				);

				if (j % 2 === 0) {
					const icon = $(
						"<img class='icon' src='./img/icon.png' alt='Icon'>"
					);
					section.append(icon);
				} else {
					//Korrektur Index Zahlen
					const inputIndex = Math.floor((j - 1) / 2);
					const h4Stature = $("<h4></h4>").text(
						inputCardName[inputIndex]
					);
					const dataWerte = jsonData[i][inputCard[inputIndex]];
					const h5Dimensions = $("<h5></h5>").text(dataWerte);
					section.append(h4Stature, h5Dimensions);
				}
				article.append(section);

				//array oder so was welches bestimmt was als nächsten in den Kästchen  rein soll
			}

			// Elemente werden Karten un Container hinzugefügt
			card.append(h2, description, img, article);
			description.append(h3, h4);
			container.append(card);
		}
	});
});
