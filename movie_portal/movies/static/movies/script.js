function toggleWatched(checkbox) {
    const title = checkbox.nextElementSibling;
    if (checkbox.checked) {
        title.classList.add('watched');
    } else {
        title.classList.remove('watched');
    }
}
