document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('submit');
    const rating = document.getElementById('rating');
    const note = document.getElementById('note');

    button.addEventListener('click', async () => {
        const ratingValue = parseInt(rating.value);
        const noteValue = note.value;
        
        if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
            alert('Please enter a valid rating between 1 and 5.');
            return;
        }

        const payload = {
            rating: ratingValue,
            note: noteValue
        };

        try {
            const response = await fetch('http://localhost:8000/rate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
                
            });

            const data = await response.json();
            alert(data.message);



        } catch (error) {
            console.error('Submission Error:', error);
            alert('An error occurred while submitting your rating.');
        }

        // Clear the input fields after submission
        rating.value = '';
        note.value = '';

    });

});

const stars = document.querySelectorAll('.stars .star-btn');

stars.forEach(star => {
    star.addEventListener('mouseenter', () => {
        const value = parseInt(star.getAttribute('data-value'));
        highlightStars(value);
});

    star.addEventListener('mouseleave', () => {
        highlightStars(0); // Clear preview
});

    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        fillStars(value);
    });
});

    function highlightStars(value) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('hover', starValue <= value);
    });
}

    function fillStars(value) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= value);
    });
}

