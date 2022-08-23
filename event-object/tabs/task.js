const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tab.length; i++) {
    const tabActive = () => {
        tab.forEach(item => item.classList.remove('tab_active'));
        tabContent.forEach(item => item.classList.remove('tab__content_active'));
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    }

    tab[i].addEventListener('click', tabActive);
}