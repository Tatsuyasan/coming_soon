import '../css/app.scss'

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
        el.style.bottom = "-3px";
    }
    const hoverEffectReverse = function(e, el) {
        el.style.bottom = "0";
    }
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function(e) { hoverEffect(e, duplicateTexts[i]); });
        links[i].addEventListener('mouseout', function(e) { hoverEffectReverse(e, duplicateTexts[i]); });
    }
}

function colorEffect() {
    const indexColor = {
        light: 0,
        dark: 1
    }
    const documentEl = document.documentElement;
    const buttons = document.querySelectorAll('.container-color-mode div');

    const changeColor = function(e, el) {
        if (el.classList.value == "light") {
            documentEl.style.setProperty("--main-background-color", "white");
            documentEl.style.setProperty("--main-typo-color", "black");
        } else if (el.classList.value == "black") {
            documentEl.style.setProperty("--main-background-color", "black");
            documentEl.style.setProperty("--main-typo-color", "white");
        }
    }

    const animationToggle = function(e, index) {
        for (let k = 0; k < buttons.length; k++) {
            if (index == indexColor.light) {
                buttons[index].style.transform = "translateY(20px)";
                buttons[indexColor.dark].style.transform = "translateY(-15px)";
            } else if (index == indexColor.dark) {
                buttons[index].style.transform = "translateY(0px)";
                buttons[indexColor.light].style.transform = "translateY(0px)";
            }
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            changeColor(e, buttons[i]);
            animationToggle(e, i);
        });
    }
}

mouseOverEffectTranslate();
mouseOverEffectDuplicate();
colorEffect();