    // Модальное окно обратной связи
    var WriteUsLink = document.querySelector(".btn-write-us");
    var WriteUs = document.querySelector(".modal-write-us");
    if(WriteUsLink && WriteUs) {
        var WriteUsClose = WriteUs.querySelector(".btn-modal-close");
        WriteUsLink.addEventListener("click", function(evt) {
            evt.preventDefault();
            WriteUs.classList.add("modal-show");
        });
        WriteUsClose.addEventListener("click", function(evt) {
            evt.preventDefault();
            WriteUs.classList.remove("modal-show");
        });
    }

    // Модальное окно добавления в корзину
    var CartLink = document.querySelectorAll(".btn-buy"); // Кнопка "Купить"
    var Cart = document.querySelector(".modal-cart"); // Модальное окно
    if(CartLink && Cart) {
        var CartClose = Cart.querySelector(".btn-modal-close"); // Конопка закрытия (Крестик)
        var CartContinue = Cart.querySelector(".modal-cart .continue"); // Кнопка закрытия (Продолжить покупки)
        for(var i = 0; i < CartLink.length; i++) {
            CartLink[i].addEventListener("click", function(evt) {
                evt.preventDefault();
                Cart.classList.add("modal-show");
            });
        }
        CartClose.addEventListener("click", function(evt) {
            evt.preventDefault();
            Cart.classList.remove("modal-show");
        });
        CartContinue.addEventListener("click", function(evt) {
            evt.preventDefault();
            Cart.classList.remove("modal-show");
        });
    }

    // Слайдер сервисов
    var ServiceSlides = document.querySelectorAll(".service-slider button"); // Кнопки слайдера
    var ServiceSlide = document.querySelectorAll(".service-slide"); // Сами слайды
    // Перебираем все кнопки сладера
    for(var i = 0; i < ServiceSlides.length; i++) {
        // Если нажать на кнопку слайдера
        ServiceSlides[i].addEventListener("click", function() {
            // Слайду под тем же номером добавляем класс active
            ServiceSlide[i].classList.add("active");
        });
    }




