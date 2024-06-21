const listFullSidebar = document.querySelector('#listFullSidebar');
const listSmallSidebar = document.querySelector('#listSmallSidebar');
const fullSidebar = document.querySelector('.fullSidebar');
const smallSidebar = document.querySelector('.smallSidebar');

listSmallSidebar.addEventListener('click', () => {
    fullSidebar.classList.remove('hidden');
    smallSidebar.classList.add('hidden');
})

listFullSidebar.addEventListener('click', () => {
    fullSidebar.classList.add('hidden');
    smallSidebar.classList.remove('hidden');
})
