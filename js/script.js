document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher ---
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
    }
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    toggleSwitch.addEventListener('change', switchTheme);
    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const mobileBtnIcon = mobileBtn.querySelector('i');
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            mobileBtnIcon.classList.remove('fa-bars');
            mobileBtnIcon.classList.add('fa-times');
        } else {
            mobileBtnIcon.classList.remove('fa-times');
            mobileBtnIcon.classList.add('fa-bars');
        }
    });
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileBtnIcon.classList.remove('fa-times');
            mobileBtnIcon.classList.add('fa-bars');
        });
    });
    // --- Typewriter Effect ---
    const textElement = document.getElementById('typewriter');
    const texts = [
        'echo "Olá, Mundo!";',
        'print("Dados & Tech");',
        '<span>Power BI Lover...</span>',
        'while(studying) { evolve(); }'
    ];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let isDeleting = false;
    let typeSpeed = 100;
    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        if (isDeleting) {
            letter = currentText.slice(0, --index);
            typeSpeed = 50;
        } else {
            letter = currentText.slice(0, ++index);
            typeSpeed = 100;
        }
        // Handle HTML generated in text for typewriter (like the span)
        // Simple HTML stripping for typing effect or just innerHTML (risky but okay here for controlled strings)
        // For effect simplicity, we'll assign innerHTML.
        textElement.innerHTML = letter;
        if (!isDeleting && letter.length === currentText.length) {
            typeSpeed = 2000; // Wait before deleting
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typeSpeed = 500; // Wait before typing new
        }
        setTimeout(type, typeSpeed);
    }
    // Start Typewriter
    type();
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    });
    revealElements.forEach(el => revealObserver.observe(el));
    // --- Reset Animations on Navigation Click ---
    let isResetting = false; // Prevent multiple simultaneous resets
    function resetScrollRevealAnimations() {
        // Prevent multiple rapid clicks
        if (isResetting) return;
        isResetting = true;
        // Step 1: Disconnect observer to stop watching
        revealObserver.disconnect();
        // Step 2: Remove 'visible' class from all elements
        revealElements.forEach(el => {
            el.classList.remove('visible');
        });
        // Step 3: Wait for CSS transition to complete, then reconnect observer
        setTimeout(() => {
            // Reconnect observer to all elements
            revealElements.forEach(el => {
                revealObserver.observe(el);
            });
            isResetting = false;
        }, 300); // Small delay to ensure smooth reset
    }
    // Add click event to all navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            resetScrollRevealAnimations();
        });
    });
    // --- Copy Email to Clipboard (Optional - Element needs to vary) ---
    // const copyBtn = document.getElementById('copy-email-btn');
    // if(copyBtn) {
    //    const emailText = document.getElementById('email-text').innerText;
    //    const feedback = document.getElementById('copy-feedback');
    //
    //    copyBtn.addEventListener('click', () => {
    //        navigator.clipboard.writeText(emailText).then(() => {
    //            feedback.classList.remove('fade-out');
    //            feedback.classList.add('fade-in');
    //
    //            setTimeout(() => {
    //                feedback.classList.remove('fade-in');
    //                feedback.classList.add('fade-out');
    //           }, 2000);
    //        }).catch(err => {
    //            console.error('Falha ao copiar: ', err);
    //        });
    //    });
    // }
});
