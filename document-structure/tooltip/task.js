const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if (item.childNodes.length > 1) {
            item.removeChild(item.childNodes[1]);
        } else {
            hasTooltip.forEach((link => {
                if (link.childNodes.length > 1) link.removeChild(link.childNodes[1]);
            }));
            let location = String(item.offsetLeft) + 'px';
            const tip = document.createElement('div');
            tip.style.marginLeft = location;
            tip.style.position = 'absolute';
            tip.textContent = item.getAttribute('title');
            tip.classList.add('tooltip');
            tip.classList.add('tooltip_active');
            item.appendChild(tip);
        }
    })
})