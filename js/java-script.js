    document.addEventListener("DOMContentLoaded", function() {
    let menu_img2 = document.querySelector('.menu_img2');
    
    if (menu_img2) {
        menu_img2.onmousedown = function(e) {
            e.preventDefault();

            let shiftX = e.clientX - menu_img2.getBoundingClientRect().left;
            let shiftY = e.clientY - menu_img2.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                menu_img2.style.left = pageX - shiftX + 'px';
                menu_img2.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(e) {
                moveAt(e.pageX, e.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            menu_img2.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                menu_img2.onmouseup = null;
            };

            menu_img2.ondragstart = function() {
                return false;
            };
        };
    } else {
        console.log('.menu_img2 not found');
    }
});



