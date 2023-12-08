document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('imageUrl');

    document.getElementById('uploadedImage').src = imageUrl;

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function() {
        const descriptionValue = document.getElementById('description').value;
        alert("upload..")

        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: imageUrl,
                description: descriptionValue
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                alert('upload successs');
            })
            .catch(error => {
                alert('upload fail');
            });
    });
});
