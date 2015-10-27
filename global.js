(function() {

    var _controlsVisible = true;

    Reveal.addEventListener('ready', function(event) {
        Reveal.isInfoTextVisible = function() {
            var classList = document.body.classList;

            return (!classList.contains('text-hidden'));
        };

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
            var notesNodes = currentSlide.querySelectorAll('aside.notes');
            var bodyNode = document.getElementById('text-body');

            while (bodyNode.firstChild) {
                bodyNode.removeChild(bodyNode.firstChild);
            }

            if (notesNodes) {
                for (var i = 0; i < notesNodes.length; i++) {
                    console.log(notesNodes[i]);
                    var div = document.createElement('div');

                    div.innerHTML = notesNodes[i].innerHTML;

                    bodyNode.appendChild(div);
                }
            }

            document.getElementById('text-page-number').innerHTML = Math.floor(Reveal.getProgress() * (Reveal.getTotalSlides() - 1) + 1);
        };

        Reveal.toggleControls = function() {
            _controlsVisible = !_controlsVisible;

            document.getElementById('controls').style.visibility = (_controlsVisible) ? 'visible' : 'hidden';
        };

        Reveal.addEventListener('slidechanged', function(event) {
            Reveal.updateInfoText();
        });

        document.addEventListener('keydown', function(event) {
            if ((event.ctrlKey) || (event.altKey) || (event.metaKey)) {
                return;
            }

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

        var params = {};

        location.search.substr(1).split("&").forEach(function(item) {
            params[item.split("=")[0]] = item.split("=")[1];
        });

        if (params.transition == 'none') {
            // call by speaker notes, deactivate stuff
            if (Reveal.isInfoTextVisible()) {
                Reveal.toggleInfoText();
            }

            Reveal.toggleControls();
        }
    });
})();
