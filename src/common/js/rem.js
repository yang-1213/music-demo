    (function (document, window) {
        function autoRootFontSize() {
            var width = Math.min(screen.width, document.documentElement.getBoundingClientRect().width);
            if (width > 750) {
                width = 750;
            }
            document.documentElement.style.fontSize = width / 750 * 100 + 'px';
        }
        window.addEventListener('resize', autoRootFontSize);
        autoRootFontSize();
    })(document, window);