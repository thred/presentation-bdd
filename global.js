(function() {

    var controlsVisible = true;

    Reveal.addEventListener('ready', function(event) {
        Reveal.toggleInfoText = function() {
            var classList = document.body.classList;

            Reveal.updateInfoText();

            if ((!classList.contains('text-shown')) && (!classList.contains('text-hidden'))) {
                classList.add('text-shown');
            } else {
                classList.toggle('text-shown');
                classList.toggle('text-hidden');
            }

            Reveal.updateInfoText();
            Reveal.sync();
        };

        Reveal.updateInfoText = function() {
            var currentSlide = Reveal.getCurrentSlide();
            var notesNode = currentSlide.querySelector('aside.notes');
            var bodyNode = document.getElementById('text-body');

            while (bodyNode.firstChild) {
                bodyNode.removeChild(bodyNode.firstChild);
            }

            if (notesNode) {
                bodyNode.innerHTML = notesNode.innerHTML;
            }
        };

        Reveal.toggleControls = function() {
            controlsVisible = !controlsVisible;

            document.getElementById('controls').style.visibility = (controlsVisible) ? 'visible' : 'hidden';
        };

        Reveal.addEventListener('slidechanged', function(event) {
            Reveal.updateInfoText();
        });

        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 84) {
                event.preventDefault();
                Reveal.toggleInfoText();
            }

            if (event.keyCode === 67) {
                event.preventDefault();
                Reveal.toggleControls();
            }

        }, false);

        Reveal.updateInfoText();
    });
})();
