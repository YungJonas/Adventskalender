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

const currentDay = new Date().getDate();


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



// Modify the card creation loop
// Then replace your existing card creation loop with this updated version:
for (let i = 1; i <= 24; i++) {
const card = document.createElement('div');
card.className = 'card';

// Create video element
const video = document.createElement('video');
video.muted = true;
video.autoplay = true;
video.loop = true;
video.playsinline = true; // This is the key for iOS
video.setAttribute('playsinline', ''); // Belt and suspenders approach

// Add source to video
const source = document.createElement('source');
source.src = `https://nhzckxawdevezyjsyhiw.supabase.co/storage/v1/object/public/previews/scenes/quWVclasypm/preview.webm`; // Replace with your video source
source.type = 'video/mp4';
video.appendChild(source);

// Create content div for the number
const content = document.createElement('div');
content.className = 'content';
content.textContent = i;

if (i > currentDay) {
card.classList.add('locked');
video.style.opacity = '0.7';
}

if (i === currentDay) {
card.classList.add('today');
}

card.id = `card${i}`;

// Append video and content to card
card.appendChild(video);
card.appendChild(content);

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