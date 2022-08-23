const dropDownValue = document.getElementsByClassName("dropdown__value")[0];
const dropDownList = document.getElementsByClassName("dropdown__list")[0];
const dropDownLink = Array.from(document.querySelectorAll('.dropdown__item'));

const selectItem = () => {
    dropDownList.classList.contains('dropdown__list_active') ? dropDownList.classList.remove('dropdown__list_active') : 
    dropDownList.classList.add('dropdown__list_active');
    return false;
}

for(let i = 0; i < dropDownLink.length; i++) {
    dropDownLink[i].onclick = () => {
    dropDownValue.textContent = dropDownLink[i].textContent;
    dropDownList.classList.remove('dropdown__list_active');
    return false;
    }
}

dropDownValue.addEventListener('click', selectItem);