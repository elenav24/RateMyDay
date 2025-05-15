document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('submit');
    const rating = document.getElementById('rating');
    const note = document.getElementById('note');
});



const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
};

