var overlay = document.querySelector('.db-overlay');
var frameImage = document.querySelector('.db-gallery-frame-image');
var frameCaontainer = document.querySelector('.db-gallery-frame-container');
var galleryImages = document.querySelectorAll('.db-thumb-img');
var closeGallery = document.querySelectorAll('.db-toggle-gallery');
var currCounter = document.querySelector('.db-current-slide');
var totalCounter = document.querySelector('.db-total-slide');

var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    }else{
        return n;
    }
}

totalCounter.innerHTML = counterFormatter(galleryImages.length);

const getImageSrc = function(){
    for(var i = 0; i < galleryImages.length; i++){
        galleryImages[i].addEventListener('click', function(){
            var imageSrc = this.getAttribute('data-src');
            var itemNum = this.getAttribute('data-item');
            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);
            overlay.classList.add('db-is-open');
            frameCaontainer.classList.add('db-is-open'); 

            currCounter.innerHTML = counterFormatter(itemNum);


        });
    }
}
getImageSrc();

for(var c = 0; c < closeGallery.length; c++){
    closeGallery[c].addEventListener('click', function(){
            overlay.classList.remove('db-is-open');
            frameCaontainer.classList.remove('db-is-open');
    });
}

var btnNext = document.querySelector('.db-item-next');
var btnPrev = document.querySelector('.db-item-prev');

const nextItem = function () {
    var currItemNum = frameImage.getAttribute('data-index');

    var nextItemNum = parseInt(currItemNum) + 1;

    for(var n = 0; n < galleryImages.length; n++){
        var item = galleryImages[n];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if(itemNum === nextItemNum){
            var nextSrc = item.getAttribute('data-src');
            var nextIndex = item.getAttribute('data-item');

            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);
            currCounter.innerHTML = counterFormatter(nextIndex);
        }
    }

}

const prevItem = function () {
    var currItemNum = frameImage.getAttribute('data-index');

    var prevItemNum = parseInt(currItemNum) - 1;

    for(var p = 0; p < galleryImages.length; p++){
        var item = galleryImages[p];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if(itemNum === prevItemNum){
            var prevSrc = item.getAttribute('data-src');
            var prevIndex = item.getAttribute('data-item');

            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);

            currCounter.innerHTML = counterFormatter(prevIndex);
        }
    }

}

btnNext.addEventListener('click', function(){
    nextItem();
})
btnPrev.addEventListener('click', function(){
    prevItem();
})
//Identificarmos o item atual no frame



//Definimos o numero do proximo item


//Fazemos o loop e identificamos qual item faz match com o numero do proximo item


//Capturamos o data-src


//passamos o data-src para a teg de img no frame