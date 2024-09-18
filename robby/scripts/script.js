document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const card = carousel.querySelector(".card");
    const cardWidth = card.offsetWidth;
    const numCardsToShow = 2; // Aantal kaarten om te laten zien bij elke klik
    const arrowBtns = document.querySelectorAll(".wrapper button");
  
    // Bereken de breedte van de kaarten die getoond moeten worden
    const cardsToScrollWidth = numCardsToShow * cardWidth;
  
    // Voeg event listeners toe voor de pijlknoppen om de carousel naar links en rechts te scrollen
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.id == "left") {
          if (carousel.scrollLeft <= 0) {
            // Als we aan het begin zijn, scroll naar het einde.
            carousel.scrollLeft = carousel.scrollWidth;
          } else {
            carousel.scrollLeft -= cardsToScrollWidth;
          }
        } else {
          if (carousel.scrollLeft + carousel.clientWidth + cardsToScrollWidth >= carousel.scrollWidth) {
            // Als we aan het einde zijn, ga terug naar het begin.
            carousel.scrollLeft = 0;
          } else {
            carousel.scrollLeft += cardsToScrollWidth;
          }
        }
      });
    });
  });