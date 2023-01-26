var btnContact = document.querySelector('.db-btn-contect');

btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.db-contact-info');
    boxContact.classList.toggle('db-is-open');
    this.classList.toggle('db-change-icon');
});