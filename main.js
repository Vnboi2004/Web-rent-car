
const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')
const menuBtnIcon = menuBtn.querySelector('i')

// Xử lý sự kiện click vào 
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    
    const isOpen = menuBtn.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? "ri-close-line" :"ri-menu-line");
})

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', "ri-menu-line");
})


// Xử lý hiệu ứng chuyển content

const scrollRevalOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

ScrollReveal().reveal('.header__container h1', {
    ...scrollRevalOption,
});

ScrollReveal().reveal('.header__container form', {
    ...scrollRevalOption,
    delay: 500,
});

ScrollReveal().reveal('.header__container img', {
    ...scrollRevalOption,
    delay: 1000,
});

ScrollReveal().reveal('.range__card', {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal('.location__image img', {
    ...scrollRevalOption,
    origin: "right",
});

ScrollReveal().reveal('.location__content .section__header', {
    ...scrollRevalOption,
    delay: 500,
});

ScrollReveal().reveal('.location__content p', {
    ...scrollRevalOption,
    delay: 1000,
});

ScrollReveal().reveal('.location__content .location__btn', {
    ...scrollRevalOption,
    delay: 1500,
});


// Xử lý sự kiện vuốt content sang trái, phải
const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
    if (eventName === "slideChangeTransitionStart") {
        // realIndex: chỉ số thực của slide hiện tại, được lưu trong args[0].realIndex
        const index = args && args[0].realIndex;
        priceEl.innerText = price[index];
        selectCards.forEach((item) => {
            item.classList.remove("show__info");
        });
        selectCards[index].classList.add("show__info");
    } 
}

const swiper = new Swiper(".swiper", {
    loop: true, // Slide sẽ lặp lại, quay vòng vô hạn khi người dùng duyệt qua
    effect: "coverflow", // Hiệu ứng coverflow, giúp các slide hiển thị theo dạng xếp chồng và nghiêng.
    grabCursor: true, // Khi di chuột qua các slide, con trỏ chuột sẽ chuyển thành dạng "bàn tay" để tạo hiệu ứng kéo.
    centeredSlides: true,  // Slide hiện tại sẽ được căn giữa.
    slidesPerView: "auto",  // Số lượng slide hiển thị sẽ được điều chỉnh tự động.
    coverflowEffect: { 
        rotate: 0, // Không xoay slide.
        depth: 500, // Độ sâu giữa các slide.
        modifier: 1, 
        scale: 0.75, // Kích thước của các slide không phải là slide trung tâm sẽ được thu nhỏ lại 75%.
        slideShadows: false,
        stretch: -100, // Khoảng cách giữa các slide.
    },
    
    onAny(event, ...args) {
        updateSwiperImage(event, args);
    },
});


ScrollReveal().reveal('.story__card', {
    ...scrollRevalOption,
    interval: 500,
});


const banner = document.querySelector(".banner__wrapper");

// Lấy ra thẻ con banner__wrapper chuyển thành Array
const bannerContent = Array.from(banner.children);

// Thực hiện thêm vào cuối banner
bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});


ScrollReveal().reveal('.download__image img', {
    ...scrollRevalOption,
});

ScrollReveal().reveal('.download__content .section__header', {
    ...scrollRevalOption,
    delay: 500,
});

ScrollReveal().reveal('.download__links', {
    ...scrollRevalOption,
    delay: 1000,
});
