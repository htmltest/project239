window.onload = function() {
    var html = document.documentElement;

    var fontsfile = document.createElement('link');
    fontsfile.href = pathTemplate + 'css/fonts.css';
    fontsfile.rel = 'stylesheet';
    document.head.appendChild(fontsfile);

    if (sessionStorage.fontsLoaded) {
        html.classList.add('fonts-loaded');
        window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
    } else {
        var script = document.createElement('script');
        script.src = pathTemplate + 'js/fontfaceobserver.js';
        script.async = true;

        script.onload = function () {
            var Montserrat400 = new FontFaceObserver('Montserrat', {
                weight: 'normal'
            });
            var Montserrat500 = new FontFaceObserver('Montserrat', {
                weight: '500'
            });
            var Montserrat600 = new FontFaceObserver('Montserrat', {
                weight: '600'
            });
            var Montserrat700 = new FontFaceObserver('Montserrat', {
                weight: 'bold'
            });
            var Montserrat800 = new FontFaceObserver('Montserrat', {
                weight: '800'
            });
            var Montserrat900 = new FontFaceObserver('Montserrat', {
                weight: '900'
            });
            var NotoSans400 = new FontFaceObserver('NotoSans', {
                weight: 'normal'
            });
            var NotoSans500 = new FontFaceObserver('NotoSans', {
                weight: '500'
            });
            var NotoSans700 = new FontFaceObserver('NotoSans', {
                weight: 'bold'
            });

            Promise.all([
                Montserrat400.load(),
                Montserrat500.load(),
                Montserrat600.load(),
                Montserrat700.load(),
                Montserrat800.load(),
                Montserrat900.load(),
                NotoSans400.load(),
                NotoSans500.load(),
                NotoSans700.load()
            ]).then(function () {
                html.classList.add('fonts-loaded');
                sessionStorage.fontsLoaded = true;
                window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
            });
        };
        document.head.appendChild(script);
    }
}