//Declarando variáveis
var btnContact = document.querySelector('.db-btn-contact');
var toggleModal = document.querySelectorAll('.db-toggle-modal');

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

// Animando elemantos on Scroll com waypoints
var myScrolldown = document.querySelector('.db-scroll-down');
var waypoint = new Waypoint({
    element: myScrolldown,
    handler: function() {
      myScrolldown.classList.toggle('db-fade-out');
    },
    offset: '75%'
});

