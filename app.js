const openModale = document.querySelector('.open-modale');
const contentModale = document.querySelector('.content-modale');
const closeModale = document.querySelector('.close-modale');

openModale.addEventListener('click', function (e) {
  contentModale.classList.add('show-modale');
});

closeModale.addEventListener('click', function (e) {
  contentModale.classList.remove('show-modale');
});
