document.addEventListener("DOMContentLoaded", () => {
    // Горизонтальний маркі-слайдер (плавний рух)
    const horizontalTrack = document.getElementById("horizontal-marquee");
    if (horizontalTrack) {
        let scrollX = 0;
        const speedH = 0.8; // Зменш значення (наприклад, до 0.5), якщо хочеш ще плавніше

        function scrollHorizontalMarquee() {
            scrollX -= speedH;
            
            // Половина ширини треку для безшовного циклу
            const halfWidth = horizontalTrack.scrollWidth / 2;
            
            if (Math.abs(scrollX) >= halfWidth) {
                scrollX = 0;
            }
            
            horizontalTrack.style.transform = `translateX(${scrollX}px)`;
            requestAnimationFrame(scrollHorizontalMarquee);
        }
        
        scrollHorizontalMarquee();
    }
    
    // Модальне вікно
    window.openModal = function(tourTitle = "Загальний підбір туру") {
        const modal = document.getElementById("booking-modal");
        const tourInput = document.getElementById("tour-name-input");
        tourInput.value = tourTitle;
        modal.style.display = "flex";
    };

    window.closeModal = function() {
        const modal = document.getElementById("booking-modal");
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        const modal = document.getElementById("booking-modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
// Фільтрація турів на сторінці tours.html
    window.filterTours = function(category) {
        const cards = document.querySelectorAll('.tour-card');
        const buttons = document.querySelectorAll('.filter-btn');

        // Зміна активної кнопки
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // Відображення відповідних карток
        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Обробка форми на сторінці контакти
    const feedbackForm = document.getElementById("feedback-form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Дякуємо! Ваше повідомлення успішно надіслано. Ми відповімо вам найближчим часом.");
            feedbackForm.reset();
        });
    }


    // Обробка форми
    const form = document.getElementById("booking-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Дякуємо! Ваша заявка прийнята. Менеджер зв'яжеться з вами найближчим часом.");
            closeModal();
            form.reset();
        });
    }
})



// Перехід на англійську версію поточної сторінки
function switchToEnglish() {
    let currentPath = window.location.pathname;
    
    // Якщо це головна (коренева або index.html)
    if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
        window.location.href = 'index-en.html';
        return;
    }
    
    // Для інших сторінок (tours.html -> tours-en.html)
    let newPath = currentPath.replace('.html', '-en.html');
    window.location.href = newPath;
}

// Перехід назад на українську версію
function switchToUkrainian() {
    let currentPath = window.location.pathname;
    
    if (currentPath.endsWith('index-en.html')) {
        window.location.href = 'index.html';
        return;
    }
    
    let newPath = currentPath.replace('-en.html', '.html');
    window.location.href = newPath;
}
   

 