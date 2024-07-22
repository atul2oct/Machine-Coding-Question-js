document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    let selectedStars = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', handleMouseOver);
        star.addEventListener('mouseout', handleMouseOut);
        star.addEventListener('click', handleClick);
    })

    function handleMouseOver(event) {
        const value = event.target.getAttribute('data-value');
        highlightStars(value);
    }

    function handleMouseOut(event) {
        highlightStars(selectedStars);
    }

    function handleClick(event) {
        selectedStars = event.target.getAttribute('data-value');
        highlightStars(selectedStars);
    }

    function highlightStars(value) {
        stars.forEach(star => {
            if(star.getAttribute('data-value') <= value){
                star.classList.add('hover')
            }else{
                star.classList.remove('hover')
            }
        })
    }
})