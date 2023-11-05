document.addEventListener("DOMContentLoaded", function () {
	// Anzahl der Karten, die erstellt werden sollen
	const numberOfCards = 20;

	// Container, in den die Karten eingefügt werden sollen
	const container = document.getElementById("container");

	for (let i = 1; i <= numberOfCards; i++) {
		// Erstellen Sie ein neues Karten-Element mit der gewünschten Struktur
		const card = document.createElement("div");
		card.id = "wrapper";

		const h2 = document.createElement("h2");
		h2.textContent = "B3";

		const description = document.createElement("div");
		description.classList.add("description");

		const h3 = document.createElement("h3");
		h3.textContent = "Parasaurrolophus";

		const h4 = document.createElement("h4");
		h4.textContent = "Quartett";

		const img = document.createElement("img");
		img.id = "image";
		img.src = "./img/image.jpg";
		img.alt = "Parasaurrolophus";

		const article = document.createElement("article");
		article.id = "wrapper2";

		// Erstellen Sie die 12 Abschnitte (sections) innerhalb von article
		for (let j = 1; j <= 12; j++) {
			const section = document.createElement("section");
			section.classList.add("card");
			section.id = "karte-" + j;

			if (j % 2 === 0) {
				const icon = document.createElement("img");
				icon.classList.add("icon");
				icon.src = "./img/icon.png";
				icon.alt = "Icon";
				section.appendChild(icon);
			} else {
				const h4Stature = document.createElement("h4");
				h4Stature.textContent = "Stature";

				const h5Dimensions = document.createElement("h5");
				h5Dimensions.textContent = "83*33";

				section.appendChild(h4Stature);
				section.appendChild(h5Dimensions);
			}

			article.appendChild(section);
		}

		// Fügen Sie die erstellten Elemente zur Karte hinzu
		card.appendChild(h2);
		card.appendChild(description);
		description.appendChild(h3);
		description.appendChild(h4);
		card.appendChild(img);
		card.appendChild(article);

		// Fügen Sie die Karte dem Container hinzu
		container.appendChild(card);
	}
});
