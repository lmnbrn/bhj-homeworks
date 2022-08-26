const clickAction = e => {
    Array.from(
        e.target.closest('li').getElementsByClassName('interest__check')
    ).forEach(checkBox => {
        checkBox.checked = e.target.checked;
        checkBox.indeterminate = false;
    });
    const checkCategory = checkBox => {
        let parent = checkBox.parentElement.closest('li');
        let itemCheckbox = checkBox.parentElement.firstElementChild.firstElementChild.firstElementChild;
        if (parent) {
            let checked = itemCheckbox.checked;
            let checkIndeterminate = itemCheckbox.indeterminate;
            Array.from(checkBox.parentElement.children).forEach(item => {
                let checkboxItem = item.firstElementChild.firstElementChild;
                if (checkboxItem.checked != checked || checkboxItem.indeterminate) {
                    checkIndeterminate = true;
                }
            });
            let parentCheckbox = parent.firstElementChild.firstElementChild;
            if (checkIndeterminate) {
                parentCheckbox.indeterminate = true;
            } else {
                parentCheckbox.indeterminate = false;
                parentCheckbox.checked = checked;
            }
            checkCategory(parent);
        }
    };
    checkCategory(e.target.closest('li'));
};

Array.from(document.getElementsByClassName('interest__check')).forEach(
    checkBox => {
        checkBox.addEventListener('click', clickAction, false);
    }
);