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

		let inputIcon = [
			"./img/years.png",
			"./img/speed.png",
			"./img/height.png",
			"./img/teeth.png",
			"./img/iq.png",
			"./img/eggs.png",
		];

		colorVariants = [
			"#f39ebd",
			"#7fadbb",
			"#8fbf9e",
			"#e4df8e",
			"#b587bf",
			"#e18c54",
			"#77c2c2",
			"#e8c9a5",
		];

		//Objekt mit den Color Keys
		const alphabetColors = {
			A: colorVariants[0],
			B: colorVariants[1],
			C: colorVariants[2],
			D: colorVariants[3],
			E: colorVariants[4],
			F: colorVariants[5],
			G: colorVariants[6],
			H: colorVariants[7],
		};

		//Durchetarieren durch die Daztenbank
		for (let i = 0; i < numberOfCards; i++) {
			// Erstellen Sie ein neues Karten-Element
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
					const inputIndexIcon = Math.floor((j - 1) / 2);
					const icon = $(
						"<img class='icon' src='" +
							inputIcon[inputIndexIcon] +
							"' alt='Icon'></img>"
					);
					section.append(icon);
				} else {
					// Korrektur Index Zahlen
					const inputIndex = Math.floor((j - 1) / 2);
					const h4Stature = $("<h4></h4>").text(
						inputCardName[inputIndex]
					);
					const dataWerte = jsonData[i][inputCard[inputIndex]];
					const h5Dimensions = $("<h5></h5>").text(dataWerte);

					// Erstelle eine Box mit der Klasse CardText und füge h4 und h5 hinzu
					const cardTextBox = $("<div></div>")
						.addClass("cardText")
						.append(h4Stature, h5Dimensions);
					// Füge die CardText-Box zu section hinzu
					//wichtig für andern css Style
					section.append(cardTextBox);
				}

				// Füge die abgerundeten Ecken für spezifische Karten hinzu
				if (j === 1) {
					section.addClass("topLeftRounded");
				} else if (j === 4) {
					section.addClass("topRightRounded");
				} else if (j === 9) {
					section.addClass("bottomLeftRounded");
				} else if (j === 12) {
					section.addClass("bottomRightRounded");
				}

				//Farben werden hinzugefügt
				//Variable für h2 Input
				const h2Text = h2.text();

				//Überprüft ob es existiert
				if (alphabetColors[h2Text]) {
					h2.css("background-color", alphabetColors[h2Text]);
				}
				article.append(section);
			}

			// Elemente werden Karten un Container hinzugefügt
			card.append(h2, description, img, article);
			description.append(h3, h4);
			container.append(card);
		}
	});
});
