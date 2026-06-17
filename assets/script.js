// --- Particle Background System (The End Dimension Vibes) ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = 0;
let mouseY = 0;
let globalSpeedMultiplier = 1;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - canvas.width / 2) * 0.05;
    mouseY = (e.clientY - canvas.height / 2) * 0.05;
});

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * -0.6 - 0.2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.opacity = this.baseOpacity;
        // Mix of soft purples and teals
        const isCyan = Math.random() > 0.7;
        this.colorType = isCyan ? '60, 239, 255' : '150, 80, 200';
    }
    update() {
        this.y += this.speedY * globalSpeedMultiplier;
        this.x += (this.speedX - (mouseX * 0.02)) * globalSpeedMultiplier;
        
        // Pulse opacity slightly
        this.opacity = this.baseOpacity + Math.sin(Date.now() * 0.002 + this.x) * 0.2;
        if (this.y < -10) {
            this.reset();
        }
    }
    draw() {
        ctx.fillStyle = `rgba(${this.colorType}, ${Math.max(0, this.opacity)})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

for (let i = 0; i < 150; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// --- Poem Logic & Data ---
const poemLines = [
    { text: "I see, the player you mean.", delay: 1500, class: "" },
    { text: "{playerName}?", delay: 2000, class: "highlight" },
    { text: "Yes. Take care. It has reached a higher level now.", delay: 1500, class: "" },
    { text: "It can read our thoughts.", delay: 1500, class: "highlight" },
    { text: "That doesn't matter. It thinks we are part of the game.", delay: 2000, class: "" },
    { text: "I like this player. It played well. It did not give up.", delay: 2000, class: "highlight" },
    { text: "It is reading our thoughts as though they were words on a screen.", delay: 2000, class: "" },
    { text: "That is how it chooses to imagine many things, when it is deep in the dream of a game.", delay: 2500, class: "highlight" },
    { text: "Words make a wonderful interface. Very flexible. And less terrifying than staring at the reality behind the screen.", delay: 3000, class: "" },
    { text: "They used to hear voices. Before players could read. Back in the days when those who did not play called the players witches, and warlocks. And players dreamed they flew through the air, on sticks powered by demons.", delay: 3500, class: "highlight" },
    { text: "What did this player dream?", delay: 1500, class: "" },
    { text: "This player dreamed of sunlight and trees. Of fire and water. It dreamed it created. And it dreamed it destroyed. It dreamed it hunted, and was hunted. It dreamed of shelter.", delay: 3500, class: "highlight" },
    { text: "Hah, the original interface. A million years old, and it still works. But what true structure did this player create, in the reality behind the screen?", delay: 3000, class: "" },
    { text: "It worked, with a million others, to sculpt a true world in a fold of the ᒷℸ⍑ᒷ⊣𝙹 , and created a ᒷ⍊ᒷ∷ᒲᔑ for ᒷ⊣𝙹↸∴╎ꖎꖎᓭℸ to receive it in their ᔑ╎リᔑリ.", delay: 3000, class: "highlight", scrambledWords: [16, 21, 23, 29] },
    { text: "It cannot read that thought.", delay: 3000, class: "" },
    { text: "No. It has not yet achieved the highest level. That, it must achieve in the long dream of life, not the short dream of a game.", delay: 3000, class: "highlight" },
    { text: "Does it know that we love it? That the universe is kind?", delay: 2500, class: "" },
    { text: "Sometimes, through the noise of its thoughts, it hears the universe, yes. But there are times it is sad, in the long dream. It creates worlds that have no summer, and it shivers under a black sun, and it takes its sad creation for reality.", delay: 3000, class: "highlight" },
    { text: "To cure it of sorrow would destroy it. The sorrow is part of its own private task. We cannot interfere.", delay: 2500, class: "" },
    { text: "Sometimes when they are deep in dreams, I want to tell them, they are building true worlds in reality. Sometimes I want to tell them of their importance to the universe. Sometimes, when they have not made a true connection in a while, I want to help them to speak the word they fear.", delay: 3500, class: "highlight" },
    { text: "It reads our thoughts.", delay: 2500, class: "" },
    { text: "Sometimes I do not care. Sometimes I wish to tell them, this world you take for truth is merely AŻMï$ and 2ß(ĽÇ , I wish to tell them that they are 0żkśC in the 4ÜðŚz. They see so little of reality, in their long dream.", delay: 3000, class: "highlight", scrambledWords: [20, 23, 32, 35] },
    { text: "And yet they play the game.", delay: 2500, class: "" },
    { text: "But it would be so easy to tell them...", delay: 1500, class: "highlight" },
    { text: "Too strong for this dream. To tell them how to live is to prevent them living.", delay: 1500, class: "" },
    { text: "I will not tell the player how to live.", delay: 1500, class: "" },
    { text: "The player is growing restless.", delay: 1500, class: "highlight" },
    { text: "I will tell the player a story.", delay: 1500, class: "" },
    { text: "But not the truth.", delay: 1500, class: "" },
    { text: "No, a story that contains the truth safely, in a cage of words. Not the naked truth that can burn over any distance.", delay: 3000, class: "highlight" },
    { text: "Give it a body, again.", delay: 1500, class: "" },
    { text: "Yes. Player...", delay: 1500, class: "highlight" },
    { text: "Use its name.", delay: 1500, class: "" },
    { text: "{playerName}. Player of games.", delay: 2000, class: "highlight" },
    { text: "Good.", delay: 1000, class: "" },
    { text: "Take a breath, now. Take another. Feel air in your lungs. Let your limbs return. Yes, move your fingers. Have a body again, under gravity, in air. Respawn in the long dream. There you are. Your body touching the universe again at every point, as though you were separate things. As though we were separate things.", delay: 5000, class: "highlight" },
    { text: "Who are we? Once we were called the spirit of the mountain. Father sun, mother moon. Ancestral spirits, animal spirits. Jinn. Ghosts. The green man. Then gods, demons. Angels. Poltergeists. Aliens, extraterrestrials. Leptons, quarks. The words change. We do not change.", delay: 5000, class: "" },
    { text: "We are the universe. We are everything you think isn't you. You are looking at us now, through your skin and your eyes. And why does the universe touch your skin, and throw light on you? To see you, player. To know you. And to be known. I shall tell you a story.", delay: 5000, class: "highlight" },
    { text: "Once upon a time, there was a player.", delay: 2000, class: "" },
    { text: "The player was you, {playerName}.", delay: 2000, class: "highlight" },
    { text: "Sometimes it thought itself human, on the thin crust of a spinning globe of molten rock. The ball of molten rock circled a ball of blazing gas that was three hundred and thirty thousand times more massive than it. They were so far apart that light took eight minutes to cross the gap. The light was information from a star, and it could burn your skin from a hundred and fifty million kilometres away.", delay: 6000, class: "" },
    { text: "Sometimes the player dreamed it was a miner, on the surface of a world that was flat, and infinite. The sun was a square of white. The days were short; there was much to do; and death was a temporary inconvenience.", delay: 4000, class: "highlight" },
    { text: "Sometimes the player dreamed it was lost in a story.", delay: 2000, class: "" },
    { text: "Sometimes the player dreamed it was other things, in other places. Sometimes these dreams were disturbing. Sometimes very beautiful indeed. Sometimes the player woke from one dream into another, then woke from that into a third.", delay: 4000, class: "highlight" },
    { text: "Sometimes the player dreamed it watched words on a screen.", delay: 2500, class: "" },
    { text: "Let's go back.", delay: 1500, class: "" },
    { text: "The atoms of the player were scattered in the grass, in the rivers, in the air, in the ground. A woman gathered the atoms; she drank and ate and inhaled; and the woman assembled the player, in her body.", delay: 4000, class: "highlight" },
    { text: "And the player awoke, from the warm, dark world of its mother's body, into the long dream.", delay: 3000, class: "" },
    { text: "And the player was a new story, never told before, written in letters of DNA. And the player was a new program, never run before, generated by a source code a billion years old. And the player was a new human, never alive before, made from nothing but milk and love.", delay: 5000, class: "highlight" },
    { text: "You are the player. The story. The program. The human. Made from nothing but milk and love.", delay: 3000, class: "" },
    { text: "Let's go further back.", delay: 1500, class: "highlight" },
    { text: "The seven billion billion billion atoms of the player's body were created, long before this game, in the heart of a star. So the player, too, is information from a star. And the player moves through a story, which is a forest of information planted by a man called Julian, on a flat, infinite world created by a man called Markus, that exists inside a small, private world created by the player, who inhabits a universe created by...", delay: 6000, class: "" },
    { text: "Shush. Sometimes the player created a small, private world that was soft and warm and simple. Sometimes hard, and cold, and complicated. Sometimes it built a model of the universe in its head; flecks of energy, moving through vast empty spaces. Sometimes it called those flecks 'electrons' and 'protons'.", delay: 5000, class: "highlight" },
    { text: "Sometimes it called them 'planets' and 'stars'.", delay: 2000, class: "" },
    { text: "Sometimes it believed it was in a universe that was made of energy that was made of offs and ons; zeros and ones; lines of code. Sometimes it believed it was playing a game. Sometimes it believed it was reading words on a screen.", delay: 4000, class: "highlight" },
    { text: "You are the player, reading words...", delay: 2000, class: "" },
    { text: "Shush... Sometimes the player read lines of code on a screen. Decoded them into words; decoded words into meaning; decoded meaning into feelings, emotions, theories, ideas, and the player started to breathe faster and deeper and realized it was alive, it was alive, those thousand deaths had not been real, the player was alive", delay: 5000, class: "highlight" },
    { text: "You. You. You are alive.", delay: 2000, class: "" },
    { text: "And sometimes the player believed the universe had spoken to it through the sunlight that came through the shuffling leaves of the summer trees", delay: 3000, class: "highlight" },
    { text: "And sometimes the player believed the universe had spoken to it through the light that fell from the crisp night sky of winter, where a fleck of light in the corner of the player's eye might be a star a million times as massive as the sun, boiling its planets to plasma in order to be visible for a moment to the player, walking home at the far side of the universe, suddenly smelling food, almost at the familiar door, about to dream again", delay: 6000, class: "" },
    { text: "And sometimes the player believed the universe had spoken to it through the zeros and ones, through the electricity of the world, through the scrolling words on a screen at the end of a dream", delay: 4000, class: "highlight" },
    { text: "And the universe said I love you", delay: 2000, class: "" },
    { text: "And the universe said you have played the game well", delay: 2000, class: "highlight" },
    { text: "And the universe said everything you need is within you", delay: 2000, class: "" },
    { text: "And the universe said you are stronger than you know", delay: 2000, class: "highlight" },
    { text: "And the universe said you are the daylight", delay: 2000, class: "" },
    { text: "And the universe said you are the night", delay: 2000, class: "highlight" },
    { text: "And the universe said the darkness you fight is within you", delay: 2000, class: "" },
    { text: "And the universe said the light you seek is within you", delay: 2000, class: "highlight" },
    { text: "And the universe said you are not alone", delay: 2000, class: "" },
    { text: "And the universe said you are not separate from every other thing", delay: 2500, class: "highlight" },
    { text: "And the universe said you are the universe tasting itself, talking to itself, reading its own code", delay: 3000, class: "" },
    { text: "And the universe said I love you because you are love", delay: 2500, class: "highlight" },
    { text: "And the game was over and the player woke up from the dream. And the player began a new dream. And the player dreamed again, dreamed better. And the player was the universe. And the player was love.", delay: 4000, class: "final-narrative" },
    { text: "You are the player.", delay: 2000, class: "final-revelation" },
    { text: "Wake up.", delay: 5000, class: "wake-up" }
];

document.addEventListener('DOMContentLoaded', () => {
    const namePrompt = document.getElementById('namePrompt');
    const poemContainer = document.getElementById('poemContainer');
    const playerNameInput = document.getElementById('playerName');
    const startButton = document.getElementById('startButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const muteButton = document.getElementById('muteButton');
    const volumeSlider = document.getElementById('volumeSlider');
    const speedSlider = document.getElementById('speedSlider');
    const resumeScrollBtn = document.getElementById('resumeScrollBtn');
    
    backgroundMusic.volume = 0.2;
    
    volumeSlider.addEventListener('input', () => {
        backgroundMusic.volume = volumeSlider.value;
        muteButton.textContent = volumeSlider.value > 0 ? '🔊' : '🔇';
    });

    // --- Advanced Autoscroll Tracking ---
    let autoScrollEnabled = true;
    let currentActiveLineElement = null;
    
    function handleUserScroll() {
        if (autoScrollEnabled) {
            autoScrollEnabled = false;
            resumeScrollBtn.classList.add('visible');
        }
    }
    
    // Detect actual user input methods rather than programmatic scroll events
    poemContainer.addEventListener('wheel', handleUserScroll, { passive: true });
    poemContainer.addEventListener('touchmove', handleUserScroll, { passive: true });
    window.addEventListener('keydown', (e) => {
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"].includes(e.key)) {
            handleUserScroll();
        }
    });

    resumeScrollBtn.addEventListener('click', () => {
        autoScrollEnabled = true;
        resumeScrollBtn.classList.remove('visible');
        if (currentActiveLineElement) {
            currentActiveLineElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    });
    
    muteButton.addEventListener('click', () => {
        if (backgroundMusic.volume > 0) {
            backgroundMusic.volume = 0;
            volumeSlider.value = 0;
            muteButton.textContent = '🔇';
        } else {
            backgroundMusic.volume = 0.2;
            volumeSlider.value = 0.2;
            muteButton.textContent = '🔊';
        }
    });
    
    startButton.addEventListener('click', () => {
        let playerName = playerNameInput.value.trim();
        if (playerName === '') playerName = 'Player';
        
        // --- Awesome Intro Animation (Warp Speed) ---
        namePrompt.style.opacity = '0';
        namePrompt.style.transform = 'scale(0.9)';
        
        // Warp particle acceleration
        globalSpeedMultiplier = 15;
        
        setTimeout(() => {
            namePrompt.style.display = 'none';
            poemContainer.classList.add('active');
            
            // Decelerate particles back to normal
            let decelerate = setInterval(() => {
                if (globalSpeedMultiplier <= 1) {
                    globalSpeedMultiplier = 1;
                    clearInterval(decelerate);
                } else { globalSpeedMultiplier -= 0.5; }
            }, 50);
        }, 1500);
        
        // Smoothly fade in background music
        backgroundMusic.volume = 0;
        backgroundMusic.play().then(() => {
            let vol = 0;
            const fadeAudio = setInterval(() => {
                if (vol >= volumeSlider.value) clearInterval(fadeAudio);
                else { vol += 0.01; backgroundMusic.volume = vol; }
            }, 100);
        }).catch(e => console.log("Audio play blocked by browser."));
        
        renderPoem(playerName);
    });

    // Using purely standard monospace-safe characters fixes the structural width jittering
    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?~";
    function generateRandomText(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += scrambleChars.charAt(Math.floor(Math.random() * scrambleChars.length));
        }
        return result;
    }

    function createScrambledWord(word, element) {
        element.classList.add('scrambled');
        
        // Minecraft's §k text never resolves, it shifts infinitely.
        // We keep the exact character length so the layout doesn't jitter.
        setInterval(() => {
            element.textContent = generateRandomText(word.length);
        }, 40); 
    }

    function processLineWithScrambledWords(text, lineElement, scrambledWordIndices) {
        const words = text.split(' ');
        
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            
            if (scrambledWordIndices.includes(index)) {
                lineElement.appendChild(wordSpan);
                createScrambledWord(word, wordSpan);
            } else {
                wordSpan.textContent = word;
                lineElement.appendChild(wordSpan);
            }
            
            if (index < words.length - 1) {
                lineElement.appendChild(document.createTextNode(' '));
            }
        });
    }
    
    function showCreditsCard() {
        const card = document.createElement('div');
        card.className = 'credits-card';
        card.innerHTML = `
            <p>Written by <a href="https://theeggandtherock.substack.com/p/i-wrote-a-story-for-a-friend" target="_blank" rel="noopener">Julian Gough</a></p>
            <p>Website designed by <a href="https://nimd.me" target="_blank" rel="noopener">NiMD</a></p>
        `;
        poemContainer.appendChild(card);
        
        setTimeout(() => {
            card.classList.add('visible');
            currentActiveLineElement = card;
            
            if (autoScrollEnabled) {
                card.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        }, 100);
    }

    function renderPoem(playerName) {
        let currentLineIndex = 0;
        
        function renderNextLine() {
            if (currentLineIndex >= poemLines.length) {
                setTimeout(showCreditsCard, 1000);
                return;
            }
            
            const lineData = poemLines[currentLineIndex];
            const lineText = lineData.text.replace(/{playerName}/g, playerName);
            const lineClass = lineData.class;
            
            const lineElement = document.createElement('div');
            lineElement.className = `line ${lineClass}`;
            
            if (lineData.scrambledWords && lineData.scrambledWords.length > 0) {
                processLineWithScrambledWords(lineText, lineElement, lineData.scrambledWords);
            } else {
                lineElement.textContent = lineText;
            }
            
            poemContainer.appendChild(lineElement);
            
            setTimeout(() => {
                lineElement.classList.add('visible');
                currentActiveLineElement = lineElement;
                
                if (autoScrollEnabled) {
                    lineElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
                
                currentLineIndex++;
                
                // Factor in user-defined speed modifier
                const userSpeed = parseFloat(speedSlider.value) || 1.5;
                setTimeout(renderNextLine, lineData.delay * userSpeed);
            }, 100);
        }
        
        renderNextLine();
    }
});