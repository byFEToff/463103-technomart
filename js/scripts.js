    // Модальное окно обратной связи
    var WriteUsLink = document.querySelector(".btn-write-us");
    var WriteUs = document.querySelector(".modal-write-us");


    if(WriteUsLink && WriteUs) {

        var form = WriteUs.querySelector(".form-write-us");
        var form_name = WriteUs.querySelector(".write-us-name");
        var form_email = WriteUs.querySelector(".write-us-email");
        var form_text = WriteUs.querySelector(".write-us-text");

        var WriteUsClose = WriteUs.querySelector(".btn-modal-close");
        WriteUsLink.addEventListener("click", function(evt) {
            evt.preventDefault();
            WriteUs.classList.add("modal-show");
            form_name.focus();
        });
        WriteUsClose.addEventListener("click", function(evt) {
            evt.preventDefault();
            WriteUs.classList.remove("modal-show");
            WriteUs.classList.remove("modal-error");
        });
        form.addEventListener("submit", function (evt) {
            if (!form_name.value || !form_email.value || !form_text.value) {
              evt.preventDefault();
              WriteUs.classList.remove("modal-error");
              WriteUs.offsetWidth = WriteUs.offsetWidth;
              WriteUs.classList.add("modal-error");
            }
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

    // Модальное окно интерактивной карты
    var Maplink = document.querySelector(".contacts .map");
    var MapModal = document.querySelector(".modal-map"); // Модальное окно
    if(Maplink && MapModal) {
        Maplink.addEventListener("click", function(evt) {
            evt.preventDefault();
            MapModal.classList.add("modal-show");
        });
        var MapClose = MapModal.querySelector(".btn-modal-close"); // Конопка закрытия (Крестик)
        MapClose.addEventListener("click", function(evt) {
            evt.preventDefault();
            MapModal.classList.remove("modal-show");
        });
    }    
















    /* Ползунок цен (только саксимальная цена) */
    var sliderElem = document.querySelector('.bar-bg');
    var sliderLine = document.querySelector('.bar-line');
    var thumbMin = document.querySelector('.min-button');
    var thumbMax = document.querySelector('.max-button');
    if(sliderElem && sliderLine && thumbMin && thumbMax) {
        var sliderCoords = getCoords(sliderElem);
        var rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;

        var min = parseInt(getComputedStyle(thumbMin).left);
        var max = parseInt(getComputedStyle(thumbMax).left);
        sliderLine.style.width = (max - min) + "px";
        sliderLine.style.marginLeft = min + "px";
        document.getElementById('min-value').value = parseInt(min * 300);
        document.getElementById('max-value').value = parseInt(max * 300);

        thumbMin.onmousedown = function(e) {
            var thumbCoords = getCoords(thumbMin);
            var shiftX = e.pageX - thumbCoords.left;


            document.onmousemove = function(e) {
                var newLeft = e.pageX - shiftX - sliderCoords.left;

                //если вне слайдера
                if (newLeft < 0) {
                    newLeft = 0;
                }

                if (newLeft > max - thumbMin.offsetWidth / 2) {
                    newLeft = max - thumbMin.offsetWidth / 2;
                }

                min = newLeft;
                sliderLine.style.marginLeft = min + "px";
                sliderLine.style.width = (max - min) + "px";
                thumbMin.style.left = newLeft + 'px';
                document.getElementById('min-value').value = parseInt(newLeft * 300);
            }

            document.onmouseup = function() {
                console.log(getCoords(thumbMin));
                console.log(min);
                document.onmousemove = document.onmouseup = null;
            }

            return false;
        };
        thumbMax.onmousedown = function(e) {
            var thumbCoords = getCoords(thumbMax);
            var shiftX = e.pageX - thumbCoords.left;

            document.onmousemove = function(e) {
                var newLeft = e.pageX - shiftX - sliderCoords.left;
                //если вне слайдера
                if (newLeft < min + thumbMin.offsetWidth / 2) {
                    newLeft = min + thumbMin.offsetWidth / 2;
                }

                if (newLeft > rangeEnd) {
                    newLeft = rangeEnd;
                }
                max = newLeft;
                sliderLine.style.width = (max - min) +"px";
                thumbMax.style.left = newLeft + 'px';
                document.getElementById('max-value').value = parseInt(newLeft * 300);
            }

            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null;
            }

            return false;
        };
    }   
    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }