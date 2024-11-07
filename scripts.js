const slider = document.getElementById('slider');
const navList = document.getElementById('navList');
const sliderContainer = document.getElementById('sliderContainer');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupImage = document.getElementById('popupImage');

const memeData = [
    { title: "Monday Morning Blues", width: 400, height: 300 },
    { title: "When The Coffee Kicks In", width: 400, height: 300 },
    { title: "Meeting That Could've Been An Email", width: 400, height: 300 },
    { title: "Debugging Like...", width: 400, height: 300 },
    { title: "Friday Dance", width: 400, height: 300 },
    { title: "Weekend Loading...", width: 400, height: 300 },
    { title: "Back to Work Like", width: 400, height: 300 },
    { title: "When Code Works First Try", width: 400, height: 300 },
    { title: "404 Energy Not Found", width: 400, height: 300 },
    { title: "Stack Overflow Saves The Day", width: 400, height: 300 },
    { title: "Deadline Approaching", width: 400, height: 300 },
    { title: "Bug Fixed Successfully", width: 400, height: 300 },
    { title: "When Tests Pass", width: 400, height: 300 },
    { title: "Code Review Time", width: 400, height: 300 },
    { title: "Production Deploy Day", width: 400, height: 300 },
    { title: "Weekend Warrior", width: 400, height: 300 },
    { title: "Monday.exe Stopped Working", width: 400, height: 300 },
    { title: "Pizza Time!", width: 400, height: 300 },
    { title: "Git Push --Force", width: 400, height: 300 },
    { title: "npm Install Universe", width: 400, height: 300 },
    { title: "AI Taking Over", width: 400, height: 300 },
    { title: "Rubber Duck Debug", width: 400, height: 300 },
    { title: "CSS Position: Absolute", width: 400, height: 300 },
    { title: "Console.log Everything", width: 400, height: 300 }
];

const cardBackgrounds = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnpvNW84YTVrYmdrdGRiMmoxc2YzMGt2ZWd2MzV2dWs0dnZiNGtjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKpWNYDRZtChgs0/giphy.webp",    // Monday Morning Blues
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGk3b2IwYTFtcnN6enk0dHh2M29xdDNwNTgycnRpbmtzMHBma3c1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LBAv3HJDl2WwU/giphy.webp",     // When The Coffee Kicks In
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNrczVpMG1sZXQ4cTQ5OHA0MXgwZTZtczVhNXh4bGRtbmY0cjRqdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYN7mdvcZBBpEly/giphy.webp",    // Meeting That Could've Been An Email
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm5zdWI1ZTRsMmo5ZHc1dHh1cDFtd21wZTdrenNxY3BqbmNsdDBudSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6fJ3jNKx1coDEjRK/giphy.webp",         // Debugging Like...
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbThmbnV0OHJtcWpkOW5tNmNtdmp4YW1zb25iOXBwdHB5MXhvMDIyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGkgoPYGqJBB7brYIt/giphy.webp",    // Friday Dance
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExem8wZHpvdGppYTQxYXM4cHozdXJ6ZWt3bm9jcWwweDVrdDZkeG5sbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zEKfBVRSQHx1RY8APp/giphy.webp",     // Weekend Loading...
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW8wYm9mM3hqeGo2MWhoZmxpYzloNmVycnYxdDkyMjMyajdleXhvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYw0DsFJc0kU0Jq/giphy.webp",    // Back to Work Like
    "https://media.giphy.com/media/KEYbcgR8oKQzwYgK4b/giphy.gif",    // When Code Works First Try
    "https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif",    // 404 Energy Not Found
    "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",        // Stack Overflow Saves The Day
    "https://media.giphy.com/media/9u514UZd57mRhnBCEk/giphy.gif",    // Deadline Approaching
    "https://media.giphy.com/media/e6tJpLvjY8jXa/giphy.gif",         // Bug Fixed Successfully
    "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",    // When Tests Pass
    "https://media.giphy.com/media/xT9DPr4dTCYxjq4UPS/giphy.gif",    // Code Review Time
    "https://media.giphy.com/media/54U9iFZnEWZxYc22WG/giphy.gif",    // Production Deploy Day
    "https://media.giphy.com/media/3o7qDPfGhunRMZikI8/giphy.gif",    // Weekend Warrior
    "https://media.giphy.com/media/Rd6sPjQFVHOSwe5tYF/giphy.gif",    // Monday.exe Stopped Working
    "https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif",         // Pizza Time!
    "https://media.giphy.com/media/cFkiFMDg3iFoI/giphy.gif",         // Git Push --Force
    "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",    // npm Install Universe
    "https://media.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif",    // AI Taking Over
    "https://media.giphy.com/media/ZYWv9qRQPomHKf4CKR/giphy.gif",    // Rubber Duck Debug
    "https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif",        // CSS Position: Absolute
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"     // Console.log Everything
];

const currentDay = new Date().getDate();

function updateHeading() {
    const h1 = document.querySelector('h1');
    h1.innerHTML = `Ho, Ho, Ho 🎅🏻<br>Heute ist der ${currentDay}. November`;
}


function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Add click handler for dismissal
    toast.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentElement) {
                toast.parentElement.removeChild(toast);
            }
        }, 300);
    });
    
    const container = document.getElementById('toastContainer');
    container.appendChild(toast);
    
    // Trigger reflow to enable animation
    toast.offsetHeight;
    
    // Add show class for animation
    toast.classList.add('show');
    
    // Still keep the auto-dismiss timer
    setTimeout(() => {
        if (toast.parentElement) {  // Check if toast still exists
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentElement) {
                    container.removeChild(toast);
                }
            }, 300);
        }
    }, duration);

    // Add tap feedback animation
    toast.addEventListener('touchstart', () => {
        toast.style.transform = 'scale(0.98)';
    });

    toast.addEventListener('touchend', () => {
        toast.style.transform = 'scale(1)';
    });
}

function getTimeUntilUnlock(targetDay) {
    const now = new Date();
    const currentDay = now.getDate();
    const currentHour = now.getHours();
    
    const daysLeft = targetDay - currentDay;
    const hoursLeft = 24 - currentHour;
    
    if (daysLeft === 1) {
        return `🎅🏻  Opens in ${hoursLeft} hours`;
    } else {
        return `🎄 Opens in ${daysLeft} days and ${hoursLeft} hours`;
    }
}

// Modified card creation loop
for (let i = 1; i <= 24; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    // Only set GIF background for unlocked cards (today and past days)
    if (i <= currentDay) {
        card.style.backgroundImage = `url(${cardBackgrounds[i-1]})`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
    } else {
        // For locked cards, use a simple background
        card.style.backgroundColor = '#f5f5f5';
    }
    
    // Create content div for the number
    const content = document.createElement('div');
    content.className = 'content';
    content.textContent = i;
    card.appendChild(content);
    
    if (i > currentDay) {
        card.classList.add('locked');
        // Add lock emoji
        const lockIcon = document.createElement('div');
    }
    
    if (i === currentDay) {
        card.classList.add('today');
    }
    
    card.id = `card${i}`;
    
    if (i <= currentDay) {
        card.addEventListener('click', () => showPopup(i - 1));
    } else {
        card.addEventListener('click', () => {
            const timeMessage = getTimeUntilUnlock(i);
            showToast(timeMessage);
        });
    }
    
    slider.appendChild(card);

    // Create nav button
    const button = document.createElement('button');
    button.className = 'nav-button';
    if (i === currentDay) {
        button.classList.add('active');
    }
    button.textContent = i;
    button.addEventListener('click', () => {
        const targetCard = document.getElementById(`card${i}`);
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        updateActiveButton(i);
    });
    navList.appendChild(button);
}

function showPopup(index) {
    const meme = memeData[index];
    popupTitle.textContent = meme.title;
    popupImage.src = `/api/placeholder/${meme.width}/${meme.height}`;
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

function updateActiveButton(activeIndex) {
    document.querySelectorAll('.nav-button').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === activeIndex);
    });
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cardNumber = parseInt(entry.target.textContent);
            updateActiveButton(cardNumber);
        }
    });
}, {
    root: sliderContainer,
    threshold: 0.5
});

document.querySelectorAll('.card').forEach(card => observer.observe(card));

function scrollToCurrentDay() {
    const todayCard = document.getElementById(`card${currentDay}`);
    if (todayCard) {
        setTimeout(() => {
            todayCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            const todayButton = navList.children[currentDay - 1];
            if (todayButton) {
                todayButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }, 100);
    }
}

window.addEventListener('load', scrollToCurrentDay);
window.addEventListener('load', updateHeading);