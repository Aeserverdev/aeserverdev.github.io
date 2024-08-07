function checkVisibility() {
    const images = document.querySelectorAll('.image-container img');
    const texts = document.querySelectorAll('.text-overlay');
    const windowHeight = window.innerHeight;
    
    images.forEach((img, index) => {
        const imgTop = img.getBoundingClientRect().top;
        const imgBottom = img.getBoundingClientRect().bottom;
        const text = texts[index];
        
        if (imgTop < windowHeight && imgBottom > 0) {
            img.classList.add('visible');
            img.classList.remove('hidden-up', 'hidden-down');
            text.classList.add('visible');
            text.classList.remove('hidden-up', 'hidden-down');
        } else if (imgTop > windowHeight) {
            img.classList.remove('visible');
            img.classList.add('hidden-down');
            text.classList.remove('visible');
            text.classList.add('hidden-down');
        } else if (imgBottom < 0) {
            img.classList.remove('visible');
            img.classList.add('hidden-up');
            text.classList.remove('visible');
            text.classList.add('hidden-up');
        }
    });
}

window.addEventListener('scroll', checkVisibility);

// Initial check on page load
checkVisibility();