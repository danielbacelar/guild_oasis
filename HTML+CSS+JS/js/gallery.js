var overlay = document.querySelector('.db-overlay');
var frameImage = document.querySelector('.db-gallery-frame-image');
var frameCaontainer = document.querySelector('.db-gallery-frame-container');
var galleryImages = document.querySelectorAll('.db-thumb-img');
var closeGallery = document.querySelectorAll('.db-toggle-gallery');

const getImageSrc = function(){
    for(var i = 0; i < galleryImages.length; i++){
        galleryImages[i].addEventListener('click', function(){
            var imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute('src', imageSrc);

            overlay.classList.add('db-is-open');
            frameCaontainer.classList.add('db-is-open'); 


        });
    }
}
for(var c = 0; c < closeGallery.length; c++){
    closeGallery[c].addEventListener('click', function(){
            overlay.classList.remove('db-is-open');
            frameCaontainer.classList.remove('db-is-open');
    });
}



getImageSrc();