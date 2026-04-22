














  const roles = [
        "Frontend Developer",
        "Systems Engineer",
        "Network Specialist",
        "Web Architect"
    ];

    const typingTextElement = document.getElementById("js-typing-text");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150; 
    let deleteSpeed = 75; 
    let pauseAfterWord = 2000; 

    function typeEffect() {
        if (!typingTextElement) return;

        const currentRole = roles[wordIndex];
        
        if (isDeleting) {
          
            typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = deleteSpeed; 
        } else {
            
            typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = roles[wordIndex].charAt(charIndex) === ' ' ? 200 : 150; 
        }

        
        if (!isDeleting && charIndex === currentRole.length) {
           
            isDeleting = true;
            typeSpeed = pauseAfterWord;
        } else if (isDeleting && charIndex === 0) {
           
            isDeleting = false;
            wordIndex = (wordIndex + 1) % roles.length; 
            typeSpeed = 500; 
        }

        setTimeout(typeEffect, typeSpeed);
    }

   
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(typeEffect, 500); 
    });