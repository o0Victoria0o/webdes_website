document.addEventListener("DOMContentLoaded", function() {

    const mainPageText = document.querySelector('.main-page-text h1');
    
    if (mainPageText) {
        const currentHour = new Date().getHours();
        let timeStatus = "";
    
        if (currentHour < 12) {
            timeStatus = "[ Morning Scouting Run ]";
        } else if (currentHour < 18) {
            timeStatus = "[ Daytime Tuning Session ]";
        } else {
            timeStatus = "[ Nighttime Touge Expedition ]";
        }
    
        const statusElement = document.createElement('h3');
        statusElement.style.color = "#ff3333";
        statusElement.style.marginBottom = "10px";
        statusElement.style.textTransform = "uppercase";
        statusElement.style.letterSpacing = "2px";
        statusElement.innerText = timeStatus;
        
        mainPageText.parentNode.insertBefore(statusElement, mainPageText);
    }

    const joinForm = document.querySelector('.driver-candidate-form form');
    
    if (joinForm) {
        joinForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name').value.trim();
            const positionSelect = document.getElementById('position').value;
    
            if (nameInput.length < 3) {
                event.preventDefault();
                alert("Error: Ryosuke's data terminal requires a valid name (at least 3 characters).");
            } 
            else if (!positionSelect) {
                event.preventDefault();
                alert("Error: Please select a valid expedition position.");
            } 
        });
    }

    const footerText = document.querySelector('.footer-container p');
    
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${currentYear} Ultimate Racing Experience. All rights reserved.`;
    }

});