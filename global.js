(function() {


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
