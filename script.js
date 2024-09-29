document.addEventListener('DOMContentLoaded', function() {
    const switchButton = document.getElementById('switchButton');
    
    switchButton.addEventListener('click', function() {
        if (document.title === "Flower SVG") {
            window.location.href = "Purpleflower.html";
        } else {
            window.location.href = "index.html";
        }
    });
});