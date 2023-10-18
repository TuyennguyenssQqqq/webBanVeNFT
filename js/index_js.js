const header = document.querySelector('.header');

// Sự kiện scroll
window.addEventListener('scroll', () => {

    // Lấy vị trí scroll
    let scrollPos = window.scrollY;

    // Thêm/xóa class scroll
    if (scrollPos > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }

});
