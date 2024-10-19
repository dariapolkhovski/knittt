document.addEventListener('DOMContentLoaded', () => {
    const rowElement = document.getElementById('currentRow');
    const stitchElement = document.getElementById('currentStitch');
    const patternInput = document.getElementById('patternInput');
    const patternImage = document.getElementById('patternImage');
    const patternText = document.getElementById('patternText');

    // Load saved progress
    let currentRow = parseInt(localStorage.getItem('currentRow')) || 0;
    let currentStitch = parseInt(localStorage.getItem('currentStitch')) || 0;
    rowElement.textContent = currentRow;
    stitchElement.textContent = currentStitch;

    // Load saved pattern text
    patternText.value = localStorage.getItem('patternText') || '';

    // Load pattern image
    patternInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                patternImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle text input change
    patternText.addEventListener('input', () => {
        localStorage.setItem('patternText', patternText.value);
    });

    // Handle keyboard input
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                currentRow++;
                break;
            case 'ArrowDown':
                currentRow = Math.max(0, currentRow - 1);
                break;
            case 'ArrowRight':
                currentStitch++;
                break;
            case 'ArrowLeft':
                currentStitch = Math.max(0, currentStitch - 1);
                break;
        }
        rowElement.textContent = currentRow;
        stitchElement.textContent = currentStitch;

        // Save progress
        localStorage.setItem('currentRow', currentRow);
        localStorage.setItem('currentStitch', currentStitch);
    });
});
