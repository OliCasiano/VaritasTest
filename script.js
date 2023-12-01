document.addEventListener('mousemove', (e) => {
    const customCursor = document.getElementById('custom-cursor');
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = e.clientX - star.clientWidth / 2 + 'px';
    star.style.top = e.clientY - star.clientHeight / 2 + 'px';
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 400); // Elimina la estrella después de un segundo

    customCursor.style.left = e.clientX - customCursor.clientWidth / 2 + 25 +'px';
    customCursor.style.top = e.clientY - customCursor.clientHeight / 2 + 25 +'px';
    
});



