document.addEventListener("DOMContentLoaded", function () {
	// Anzahl der Karten, die erstellt werden sollen
	const numberOfCards = 20;

	// Container, in den die Karten eingefügt werden sollen
	const container = document.getElementById("container");

	// Schleife, um die Karten zu erstellen und einzufügen
	for (let i = 1; i <= numberOfCards; i++) {
		// Erstellen Sie ein neues Karten-Element
		const card = document.createElement("div");
		card.classList.add("wrapper");
		card.textContent = "Karte " + i;

		// Fügen Sie die Karte dem Container hinzu
		container.appendChild(card);
	}
});
