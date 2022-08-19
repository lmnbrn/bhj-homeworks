let menuLink = document.querySelectorAll('.menu__link');
for (let link of menuLink) {
    link.onclick = () => {
    let menuItem = link.closest('.menu__item');
        if (menuItem.querySelectorAll('ul').length > 0) {
            let parent = menuItem.querySelectorAll('ul');
            parent[0].classList.toggle('menu_active');
            return false;
        }
    }
}