(function() {

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 73) {
            event.preventDefault();
            toggleText();
        }
    }, false);

    function toggleText() {
        var classList = document.body.classList;

        classList.toggle('text-shown');
        classList.toggle('text-hidden');
    }

    Reveal.addEventListener('ready', function(event) {
        Reveal.addEventListener('slidechanged', function(event) {
            var notesNode = event.currentSlide.querySelector('aside.notes');
            var bodyNode = document.getElementById('notes-content');

            while (bodyNode.firstChild) {
                bodyNode.removeChild(bodyNode.firstChild);
            }

            if (notesNode) {
                bodyNode.innerHTML = notesNode.innerHTML;
            }
        });
    });
})();
