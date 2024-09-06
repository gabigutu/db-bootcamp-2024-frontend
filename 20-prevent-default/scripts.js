const REDIRECT_BASE = 'http://127.0.0.1:5500/save-click.php?url=';

const linkElements = document.querySelectorAll('a');
for (link of linkElements) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(event);
        const target = event.target;
        console.log(target, target.attributes.href.value);
        const destionation = target.attributes.href.value;
        window.location.href = REDIRECT_BASE + destionation;
    })
}