//find elements
const showPrevBtn = document.getElementById('show-prev-btn');
const showNextBtn = document.getElementById('show-next-btn');
const slideImage = document.getElementById('slide-img')

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create images array
let imageUrls = [];
imageUrls.push('https://avatars.mds.yandex.net/i?id=277aecc176eda1be323768391019d926_sr-5351088-images-thumbs&n=13');
imageUrls.push('https://avatars.mds.yandex.net/i?id=8a06b1425d4c2ab8d609cb74946f792f-3548820-images-thumbs&n=13');
imageUrls.push('https://avatars.mds.yandex.net/i?id=0f64de5c845b734d45007fdb86c59295-4872385-images-thumbs&n=13');
imageUrls.push('https://avatars.mds.yandex.net/i?id=7bdaded0deedacaec441a5fb2581b790_sr-6907564-images-thumbs&n=13');

let currentImageIndex = 0;

// slideImage.src = imageUrls[currentImageIndex];
slideImage.src = imageUrls[currentImageIndex];
showPrevBtn.disabled = true;


//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imageUrls[currentImageIndex];
    showNextBtn.disabled = false;

    //disable prev button if need
    if(currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imageUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    //diable next button if need
    if(currentImageIndex === (imageUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}