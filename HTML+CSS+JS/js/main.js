//Declarando variáveis
var btnContact = document.querySelector('.db-btn-contact');

//Page preloader

window.addEventListener('load', function (){
    var pagePreloader = this.document.querySelector('.db-preloader');
        pagePreloader.classList.add('db-fade-out');

    setTimeout(function(){
        pagePreloader.style.display = 'none'
    }, 1000);
});

//Abrindo e fechando informacoes de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.db-contatct-info');
    boxContact.classList.toggle('db-is-open');
    this.classList.toggle('db-change-icon');
});

