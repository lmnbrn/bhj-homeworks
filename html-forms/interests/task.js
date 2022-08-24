const interestCheck = document.querySelectorAll(".interest__check");

for (let item of interestCheck) {
    const subItems = item.closest(".interest").querySelectorAll(".interest__check");
    item.addEventListener('change', () => {
        if (item.checked) {
            if (subItems) {
                for (let subItem of subItems) {
                    subItem.checked = true;
                }
            }
        } else {
            if (subItems) {
                for (let subItem of subItems) {
                    subItem.checked = false;
                }
            }
        }
    }
    );
}