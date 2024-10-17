document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const modal = document.getElementById('roleModal');
    const closeModal = document.querySelector('.close');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('show');
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
        setTimeout(() => {
            slides[index].classList.add('show');
        }, 20); // Pequeno delay para garantir que a transição seja visível
    }

    function openModal() {
        modal.style.display = 'flex';
        currentSlide = 0;
        showSlide(currentSlide);
    }

    function closeModalFunc() {
        modal.style.display = 'none';
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeModal.addEventListener('click', closeModalFunc);
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModalFunc();
        }
    };
});
