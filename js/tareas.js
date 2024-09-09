document.addEventListener("DOMContentLoaded", function () {

	let imageCounter = 0

	const f = document.getElementById("card-form");
	f.addEventListener("submit", function (event) {
		event.preventDefault();

		/*  La imagen por defecto es aleatoria. El parámetro "random" evita que 
		se cachee, para asegurar que traiga siempre una imagen distinta. */
		const defaultImageURL = `https://picsum.photos/50?random=${imageCounter}`;
		
	    // Traer valores del formulario
		const v = {
			title: document.getElementById("card-title").value,
			description: document.getElementById("card-description").value,
			imageUrl: document.getElementById("card-image").value || defaultImageURL,
			bgColor: document.getElementById("card-bg-color").value,
			borderColor: document.getElementById("card-border-color").value
		};
		
		// Mostrar por consola valores del formulario
		console.log(v);
	
		// Crear nueva card
		const newCard = document.createElement("div");
		newCard.className = "card";
		newCard.style.backgroundColor = v.bgColor;
		newCard.style.borderColor = v.borderColor;
	
		//Maquetar la card
		newCard.innerHTML = `
			<img src="${v.imageUrl}" alt="Imagen de la tarea">
			<div class="card-content">
				<h6>${v.title}</h6>
				<p>${v.description}</p>
			</div>
		`;

		// Si todavía se ve el texto de 'No hay tareas', lo oculta.
		if (imageCounter == 0)
 			document.getElementById("sin-tareas").style.cssText = 'display: none';

		//Añadir la nueva card al contenedor
		const cardContainer = document.getElementById("cards-container");
		cardContainer.appendChild(newCard);
				
		//Limpiar campos del formulario
		f.reset();
	
		imageCounter++;
	});

});
