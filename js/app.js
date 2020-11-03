function mouseOverEffectTranslate() {
    const description = document.querySelector('.description');
    const div = description.querySelector(':scope > div');
    const animationText = function(e) {
        div.style.transform = "translateY(0)";
    }
    const animationTextReverse = function(e) {
        div.style.transform = "translateY(-25px)";
    }
    description.addEventListener('mouseover', (e) => { animationText(e); });
    description.addEventListener('mouseout', (e) => { animationTextReverse(e); });
}

function mouseOverEffectDuplicate() {
    const links = document.querySelectorAll('.navigation nav div a');
    const duplicateTexts = document.querySelectorAll('.navigation nav div p.text-effect');
    const hoverEffect = function(e, el) {
        el.style.bottom = "-5px";
    }
    const hoverEffectReverse = function(e, el) {
        el.style.bottom = "0";
    }
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function(e) { hoverEffect(e, duplicateTexts[i]); });
        links[i].addEventListener('mouseout', function(e) { hoverEffectReverse(e, duplicateTexts[i]); });
    }
}

mouseOverEffectTranslate();
mouseOverEffectDuplicate();