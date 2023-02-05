//Declarando variáveis
var btnContact = document.querySelector('.db-btn-contact');
var toggleModal = document.querySelectorAll('.db-toggle-modal');
var toggleMenu= document.querySelectorAll('.db-toggle-menu');
var menuMobile = document.querySelector('.db-menu-mob');
var btnMenuMobIcon = document.querySelector('.db-btn-menu-mob ion-icon');


//Page preloader

window.addEventListener('load', function (){
    var pagePreloader = this.document.querySelector('.db-preloader');
        pagePreloader.classList.add('db-fade-out');

    setTimeout(function(){
        pagePreloader.style.display = 'none'
    }, 1000);
});


//Abrindo e fechamdo o menu mobile

for(var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.db-menu-overlay');
        overlay.classList.toggle('db-is-open');
        menuMobile.classList.toggle('db-menu-is-close');
        menuMobile.classList.toggle('db-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if(icon === 'menu-outline'){
            btnMenuMobIcon.setAttribute('name', 'close-outline');
        } else{
            btnMenuMobIcon.setAttribute('name', 'menu-outline');
        }
    });

}


//Abrindo e fechando informacoes de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.db-contatct-info');
    boxContact.classList.toggle('db-is-open');
    this.classList.toggle('db-change-icon');
});

// Abrindo e fechando o modal orçamento

for(var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.db-overlay');
        var modalOrcamento = document.querySelector('#db-modal-orcamento');

        overlay.classList.toggle('db-is-open');
        modalOrcamento.classList.toggle('db-is-open');
        modalOrcamento.classList.toggle('db-slide-top-in');
    });

}

var postGalleryHeight = document.querySelector('.db-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGalleryHeight.style.height = (postGalleryHeight - 270) + 'px';

// Animando elemantos on Scroll com waypoints
var myScrolldown = document.querySelector('.db-scroll-down');
var waypoint = new Waypoint({
    element: myScrolldown,
    handler: function() {
      myScrolldown.classList.toggle('db-fade-out');
    },
    offset: '75%'
});

