(() => {
    const spaceship = document.getElementById('spaceship');
    let moveBy = 10;

    window.addEventListener('load', () => {
        spaceship.style.position = 'absolute';
        spaceship.style.left = 0;
        spaceship.style.top = 0;
    });

    window.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                spaceship.style.left = parseInt(spaceship.style.left) - moveBy + 'px';
                break;
            case 'ArrowRight':
                spaceship.style.left = parseInt(spaceship.style.left) + moveBy + 'px';
                break;
            case 'ArrowUp':
                spaceship.style.top = parseInt(spaceship.style.top) - moveBy + 'px';
                break;
            case 'ArrowDown':
                spaceship.style.top = parseInt(spaceship.style.top) + moveBy + 'px';
                break;
        }
    });


})();