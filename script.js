let currentSlide = 0;
const carouselItems = document.querySelectorAll(".carousel-item");
const totalSlides = carouselItems.length;

function showSlide(index){
    carouselItems.forEach((item, i) =>{
        item.style.display = "none";
    });
    carouselItems[index].style.display = 'block';
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}   

function prevSlide(){
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}
 showSlide(currentSlide);

 setInterval(nextSlide, 5000);

 const modal = document.createElement('div');
 modal.classList.add('modal');
 document.body.appendChild(modal);

 const modalImage = document.createElement('img');
 modal.appendChild(modalImage);

 modal.addEventListener('click', function(){
    modal.style.display = 'none';
 });

 carouselItems.forEach(item =>{
    item.addEventListener('click', function(){
        const imageSrc = item.querySelector('img').src;
        openModal(imageSrc);
    });
 });

 const prevButton = document.createElement('button');
 prevButton.textContent = 'Previous';
 prevButton.classList.add('slider-btn', 'prev');
 document.querySelector('#projects').appendChild(prevButton);
 prevButton.addEventListener('click', prevSlide);

 const nextButton = document.createElement('button');
 nextButton.textContent = 'Next';
 nextButton.classList.add('slider-btn', 'next');
 document.querySelector('#projects').appendChild(nextButton);
 nextButton.addEventListener("click", nextSlide);