//Portfolio Slider

//Declaração das variáveis do slider
var sliderContainer = document.querySelector('.db-slider-container');
var sliderList = document.querySelector('.db-slider-list');
var sliderItem = document.querySelectorAll('.db-slider-item');
var sliderListWidth = null;
const sliderTotalItems = sliderItem.length;
var prevItem = document.querySelector('.db-item-prev');
var nextItem = document.querySelector('.db-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.db-current-slide');
var totalSlide = document.querySelector('.db-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.db-item-navigator a'); 
var navCounter = document.querySelector('.db-navigator-counter span');




//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;


//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth+'px';

for(var p = 0; p < sliderItem.length; p++){
    sliderItem[p].style.width = containerWidth+'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth+ 'px';

//Fazendo Animação onClick

//Handlers


//Next Slider Animação
var nextSlideAnim = function(){
    var lastItem = sliderListWidth - containerWidth;

    if ((-1*(sliderPos) === lastItem)) {
        return;
    }

    sliderPos -= containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Prev Slider Animação
var prevSlideAnim = function(){
         
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos
    });
}

//Counter Formater
var counterFormatter = function(n){
    if(n < 10){
        return '0'+n;
    }else {
        return n;
    }
}

//Ciunter Add

var counterAdd = function (){
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)){
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove
var counterRemove = function (){
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)){
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Set Active Nav 

var setActiveNav = function (){
    for(var nv = 0; nv < navItems.length; nv++){
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
        if(myNavNum === currentCounter){
            navItems[nv].classList.add('db-item-active');

            anime({
                targets: '.db-item-active',
                width: 90
            });

        }
    }
}

var changeActive = function (){
    for(var rm = 0; rm < navItems.length; rm++){
        navItems[rm].classList.remove('db-item-active');
        anime({
            targets: navItems[rm],
            width: 20
        });
    }
    setActiveNav();
}


//Active
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
    targets: '.db-item-active',
    width: 90
});

nextItem.addEventListener('click', function(){
    nextSlideAnim();
    counterAdd();
    changeActive();

});

prevItem.addEventListener('click', function(){
    prevSlideAnim();
    counterRemove();
    changeActive();
});