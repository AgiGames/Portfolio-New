const consoleApp = document.getElementById("console");  // the entire console with all its contents
const consoleBtn = document.getElementById("console-button");  // the button that opens the console
const consoleCloseBtn = document.getElementById("console-close-button") // the button that closes the console
const terminal = document.querySelector('.terminal'); // the terminal inside the console
const input = document.getElementById('terminal-input'); // one line of the terminal
const aboutMe = document.getElementById("about-me"); // the about me app
const aboutMeCloseBtn = document.getElementById("about-me-close-button"); // about me app's close button
const portfolio = document.getElementById("portfolio"); // the portfolio app
const portfolioCloseBtn = document.getElementById("portfolio-close-button"); // portfolio app's close button
const contact = document.getElementById("contact") // the contact app
const contactCloseBtn = document.getElementById("contact-close-button") // contact app's close button

let isDragging = false;
let activeDragTarget = null;
let consoleOffsetX, consoleOffsetY;
let zIndexCounter = 1000;

let aboutMeOffsetX, aboutMeOffsetY;
let portfolioOffsetX, portfolioOffsetY
let contactOffsetX, contactOffsetY

// functions that starts the dragging of current window, when mouse down is pressed or touch is started
// offsetX is how much "in" along the x axis the cursor is in the window
// offsetY is how much "in" along the y axis the cursor is in the window
// iframes prevent dragging for some reason so we disable all iframe pointer events while dragging
consoleApp.addEventListener("mousedown", (e) => {

    if (e.clientY <= consoleApp.offsetTop + 30 && e.clientX <= consoleApp.offsetLeft + consoleApp.offsetWidth) {
        isDragging = true;
        consoleOffsetX = e.clientX - consoleApp.offsetLeft;
        consoleOffsetY = e.clientY - consoleApp.offsetTop;
        activeDragTarget = consoleApp;

        consoleApp.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});

consoleApp.addEventListener("touchstart", (e) => {

    if (e.clientY <= consoleApp.offsetTop + 30 && e.clientX <= consoleApp.offsetLeft + consoleApp.offsetWidth) {
        isDragging = true;
        const touch = e.touches[0];
        consoleOffsetX = touch.clientX - consoleApp.offsetLeft;
        consoleOffsetY = touch.clientY - consoleApp.offsetTop;
        activeDragTarget = consoleApp;

        consoleApp.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});

aboutMe.addEventListener("mousedown", (e) => {

    if (e.clientY <= aboutMe.offsetTop + 30 && e.clientX <= aboutMe.offsetLeft + aboutMe.offsetWidth) {
        isDragging = true;
        aboutMeOffsetX = e.clientX - aboutMe.offsetLeft;
        aboutMeOffsetY = e.clientY - aboutMe.offsetTop;
        activeDragTarget = aboutMe;

        aboutMe.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});

aboutMe.addEventListener("touchstart", (e) => {

    if (e.clientY <= aboutMe.offsetTop + 30 && e.clientX <= aboutMe.offsetLeft + aboutMe.offsetWidth) {
        isDragging = true;
        const touch = e.touches[0];
        aboutMeOffsetX = touch.clientX - aboutMe.offsetLeft;
        aboutMeOffsetY = touch.clientY - aboutMe.offsetTop;
        activeDragTarget = aboutMe;

        aboutMe.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});

portfolio.addEventListener("mousedown", (e) => {

    if (e.clientY <= portfolio.offsetTop + 30 && e.clientX <= portfolio.offsetLeft + portfolio.offsetWidth) {
        isDragging = true;
        portfolioOffsetX = e.clientX - portfolio.offsetLeft;
        portfolioOffsetY = e.clientY - portfolio.offsetTop;
        activeDragTarget = portfolio;

        portfolio.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});

portfolio.addEventListener("touchstart", (e) => {

    if (e.clientY <= portfolio.offsetTop + 30 && e.clientX <= portfolio.offsetLeft + portfolio.offsetWidth) {
        isDragging = true;
        const touch = e.touches[0];
        portfolioOffsetX = touch.clientX - portfolio.offsetLeft;
        portfolioOffsetY = touch.clientY - portfolio.offsetTop;
        activeDragTarget = portfolio;

        portfolio.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});

contact.addEventListener("mousedown", (e) => {

    if (e.clientY <= contact.offsetTop + 30 && e.clientX <= contact.offsetLeft + contact.offsetWidth) {
        isDragging = true;
        contactOffsetX = e.clientX - contact.offsetLeft;
        contactOffsetY = e.clientY - contact.offsetTop;
        activeDragTarget = contact;

        contact.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});

contact.addEventListener("touchstart", (e) => {

    if (e.clientY <= contact.offsetTop + 30 && e.clientX <= contact.offsetLeft + contact.offsetWidth) {
        isDragging = true;
        const touch = e.touches[0];
        contactOffsetX = touch.clientX - contact.offsetLeft;
        contactOffsetY = touch.clientY - contact.offsetTop;
        activeDragTarget = contact;

        contact.style.zIndex = ++zIndexCounter;

        document.querySelectorAll("iframe").forEach(iframe => {
            iframe.style.pointerEvents = "none";
        });
    }

});


// we have to actually animate the drag when the mouse or touch moves
// so call an animation frame while we move the window itself while dragging
let latestMouseX = 0
let latestMouseY = 0
document.addEventListener("mousemove", (e) => {

    if (!isDragging || !activeDragTarget) return;

    latestMouseX = e.clientX
    latestMouseY = e.clientY

    requestAnimationFrame(() => {
        updateDragPosition();
    });
});

document.addEventListener("touchmove", (e) => {

    if (!isDragging || !activeDragTarget) return;

    e.preventDefault();

    const touch = e.touches[0];
    latestMouseX = touch.clientX;
    latestMouseY = touch.clientY;

    requestAnimationFrame(() => {
        updateDragPosition();
    });

});

// function that updates the window position while dragging
function updateDragPosition() {
    let offsetX = 0, offsetY = 0;

    if (activeDragTarget === consoleApp) {
        offsetX = consoleOffsetX;
        offsetY = consoleOffsetY;
    } else if (activeDragTarget === aboutMe) {
        offsetX = aboutMeOffsetX;
        offsetY = aboutMeOffsetY;
    } else if (activeDragTarget === portfolio) {
        offsetX = portfolioOffsetX;
        offsetY = portfolioOffsetY;
    } else if (activeDragTarget === contact) {
        offsetX = contactOffsetX;
        offsetY = contactOffsetY;
    }

    // these two lines clamp the window from not going outside the view port
    const newLeft = Math.max(0, Math.min(window.innerWidth - activeDragTarget.offsetWidth, latestMouseX - offsetX));
    const newTop = Math.max(0, Math.min(window.innerHeight - activeDragTarget.offsetHeight, latestMouseY - offsetY));

    // update the positions
    activeDragTarget.style.left = `${newLeft}px`;
    activeDragTarget.style.top = `${newTop}px`;
}


// if mouse up or touch done then no dragging
// switch on all iframes' pointer events
document.addEventListener("mouseup", () => {

    isDragging = false;
    document.querySelectorAll("iframe").forEach(iframe => {
        iframe.style.pointerEvents = "auto";
    });

});

document.addEventListener("touchend", () => {

    isDragging = false;
    document.querySelectorAll("iframe").forEach(iframe => {
        iframe.style.pointerEvents = "auto";
    });

});


// action listener that executes a function on click on the console button
// removes hide class from the console and adds show class
consoleBtn.addEventListener("click", () => {

    consoleApp.classList.remove("hide");

    // allow style to apply before triggering transition
    requestAnimationFrame(() => {
        consoleApp.classList.add("show");
    });

});

// action listeners that executes a function on click on the respective app's close button
// removes show class from the app and adds hide class
consoleCloseBtn.addEventListener("click", () => {

    consoleApp.classList.remove("show");
    
    requestAnimationFrame(() => {
        consoleApp.classList.add("hide");
    });

});

aboutMeCloseBtn.addEventListener("click", () => {

    aboutMe.classList.remove("show");

    requestAnimationFrame(() => {
        aboutMe.classList.add("hide");
    })

})

portfolioCloseBtn.addEventListener("click", () => {

    portfolio.classList.remove("show");

    requestAnimationFrame(() => {
        portfolio.classList.add("hide");
    })

})

contactCloseBtn.addEventListener("click", () => {

    contact.classList.remove("show");

    requestAnimationFrame(() => {
        contact.classList.add("hide");
    })

})

// a function that attaches an action listener to a given input text field
function attachTerminalListener(input) {

    // the action listener listens for a keydown action
    input.addEventListener('keydown', (e) => {
        // if the pressed key is enter key
        if (e.key === 'Enter') {
            e.preventDefault(); // prevent form submission or newlines

            const command = input.value.trim();
            input.disabled = true; // freeze current input
            const commandResult = executeCommand(command)
            
            if (commandResult !== "") {
                const output_line = document.createElement('pre')
                output_line.textContent = commandResult
                output_line.classList.add('terminal-output')
                terminal.appendChild(output_line)
            }

            // create a new terminal line div and add its contents like how it exists in html
            const newLine = document.createElement('div');
            newLine.classList.add('terminal-line');

            const prompt = document.createElement('span');
            prompt.classList.add('prompt');
            prompt.textContent = 'portfolio:~$';

            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.classList.add('terminal-input');

            newLine.appendChild(prompt);
            newLine.appendChild(newInput);
            terminal.appendChild(newLine);

            newInput.focus(); // focus on the new line

            attachTerminalListener(newInput); // since we want the next line also to be able to spawn a new terminal line once enter is pressed, we recur the attach
                                              // function on the new input text field we made
        }

    });

}
attachTerminalListener(input);

function executeCommand(text) {

    if (text === "clear") {
        terminal.innerHTML="";
    }
    else if (text === "help") {
        return "command clear: clear the terminal\n\
command about me: to view about me\n\
command portfolio: to view portfolio\n\
command contact: to view contact details";
    }
    else if (text === "about me") {
        openAboutMe();
    }
    else if (text === "portfolio") {
        openPortfolio();
    }
    else if (text === "contact") {
        openContact();
    }
    else {
        return "INVALID COMMAND"
    }

    return "";

}

// functions that opens the respective apps
// removes hide class and adds show class
function openAboutMe() {

    aboutMe.classList.remove("hide");

    // allow style to apply before triggering transition
    requestAnimationFrame(() => {
        aboutMe.classList.add("show");
    });

}

function openPortfolio() {

    portfolio.classList.remove("hide");

    // allow style to apply before triggering transition
    requestAnimationFrame(() => {
        portfolio.classList.add("show");
    });

}

function openContact() {

    contact.classList.remove("hide");

    // allow style to apply before triggering transition
    requestAnimationFrame(() => {
        contact.classList.add("show");
    });

}