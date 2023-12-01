let currentSlide = 0;

function showSlide(index) {
	const slides = document.querySelectorAll(".slide");
	const sliderContainer = document.querySelector(".slider-container");
	const images = [
		`url("https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/azjfmtzx6evxpubynfci/edit-page-11r2")`,
		`url("https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/m5ea1kpipv5tiflnfx8t/edited-p-12")`,
		`url("https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fuammgjubhjfvgcqleef/edit-image-056")`,
	];

	const backgroundPositions = ["top", "center", "center"];
	// Hide all slides
	slides.forEach((slide) => (slide.style.display = "none"));

	// Display the selected slide
	slides[index].style.display = "block";

	// Change the background color of the slider container
	sliderContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),${images[index]} center / cover`;

	sliderContainer.style.backgroundPosition = backgroundPositions[index];
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % 4; // Assuming 4 slides
	showSlide(currentSlide);
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + 3) % 4; // Assuming 4 slides
	showSlide(currentSlide);
}
