const myDiv = document.getElementById('myDiv');
if (!myDiv) {
    console.error("Could not find myDiv");
}

const CURRENT_YEAR = 2026;

/** @type {HTMLButtonElement | null} */
let favoriteAnimalsButton = null;
/** @type {HTMLButtonElement | null} */
let sayHiButton = null;
/** @type {HTMLElement | null} */
let idkTextElement = null;
/** @type {HTMLElement | null} */
let animalImageElement = null;

const userState = {
    /** @type {"loggedOut" | "admin" | "tester" | "designer" | undefined} */
    _status: undefined,
    set status(newStatus) {
        this._status = newStatus;
        clearStuff();
        switch (newStatus) {
            case 'loggedOut':
                // logged out text
                idkTextElement = document.createElement('p');
                idkTextElement.textContent = "I don't know you.";
                myDiv.appendChild(idkTextElement);

                break;
            case 'admin':
                // display buttons hi and animal
                sayHiButton = document.createElement('button');
                sayHiButton.textContent = "Say Hi";
                sayHiButton.addEventListener('click', syaHi);
                myDiv.appendChild(sayHiButton);

                favoriteAnimalsButton = document.createElement('button');
                favoriteAnimalsButton.textContent = "Favorite Animals";
                favoriteAnimalsButton.addEventListener('click', favoriteAnimals);
                myDiv.appendChild(favoriteAnimalsButton);

                break;

            case 'tester':
            case 'designer':
                // display hi button
                sayHiButton = document.createElement('button');
                sayHiButton.textContent = "Say Hi";
                sayHiButton.addEventListener('click', syaHi);
                myDiv.appendChild(sayHiButton);

                break;

            default:
                console.error("Invalid status: " + newStatus);
        }
    },
    get status() {
        return this._status;
    }
}

// initial render
userState.status = 'loggedOut';

function clearStuff() {
    if (idkTextElement) {
        myDiv.removeChild(idkTextElement);
        idkTextElement = null;
    }
    if (sayHiButton) {
        myDiv.removeChild(sayHiButton);
        sayHiButton = null;
    }
    if (favoriteAnimalsButton) {
        myDiv.removeChild(favoriteAnimalsButton);
        favoriteAnimalsButton = null;
    }
    if (animalImageElement) {
        myDiv.removeChild(animalImageElement);
        animalImageElement = null;
    }
}

function syaHi() {
    // lang thing
    const languagePromptValue = prompt("Eng, Fr, De, Spa").toLowerCase();
    let greeting = "";
    switch (languagePromptValue) {
        case 'eng':
            greeting = "Hello";
            break;
        case 'fr':
            greeting = "Bonjour";
            break;
        case 'de':
            greeting = "Hallo";
            break;
        case 'spa':
            greeting = "Hola";
            break;
        default:
            greeting = "Sorry but I don't speak that language.";
    }
    alert(greeting);
}

function favoriteAnimals() {
    // other thing
    const birthYearPromptValue = prompt("What year were you born?");
    const age = CURRENT_YEAR - parseInt(birthYearPromptValue);
    if (isNaN(age)) {
        alert("That doesn't seem to be a valid year.");
    }

    if (age < 18) {
        alert("Content is restricted");
    } else if (age <= 55) {

        if (animalImageElement) {
            myDiv.removeChild(animalImageElement);
        }
        const favAnimalPrompt = prompt("What is your favorite animal?(cat, dog, frog, mouse)").toLowerCase();
        switch (favAnimalPrompt) {
            case 'cat':
                // put the cat image
                animalImageElement = document.createElement('img');
                animalImageElement.src = "public/cat.jpg";
                animalImageElement.alt = "A cat";
                myDiv.appendChild(animalImageElement);

                break;
            case 'dog':
                animalImageElement = document.createElement('img');
                animalImageElement.src = "public/dog.jpg";
                animalImageElement.alt = "A dog";
                myDiv.appendChild(animalImageElement);

                break;
            case 'frog':
                animalImageElement = document.createElement('img');
                animalImageElement.src = "public/frog.jpg";
                animalImageElement.alt = "A frog";
                myDiv.appendChild(animalImageElement);

                break;
            case 'mouse':
                animalImageElement = document.createElement('img');
                animalImageElement.src = "public/mouse.jpg";
                animalImageElement.alt = "A mouse";
                myDiv.appendChild(animalImageElement);

                break;
            default:
                alert("Sorry but I don't have an image for that animal.");
        }
    } else {
        myDiv.textContent = `“Much like mathematics,
    programming is a logico-deductive system. And I think the important point
    that I am making is that in a purely logico-deductive system there is no
    philosophy - everything is known. However, insofar as there is art in
    mathematics, there is philosophy in mathematics. Insofar as there is art in
    programming, there is philosophy in programming.”`
    }
}


const part2Login = function() {
    const userNamePromptValue = prompt("What is your username?").toLowerCase();
    let password = "";
    if (userNamePromptValue === 'admin') {
        password = generatePassword(6);
        alert(`Your password is: ${password}`);
    }

    let passwordTries = 0;
    const MAX_PASSWORD_TRIES = userNamePromptValue === 'admin' ? 2 : 3;
    const correctPassword = () => {
        if (userNamePromptValue === 'admin') {
            return password;
        } else if (userNamePromptValue === 'tester') {
            return "222"
        } else if (userNamePromptValue === 'designer') {
            return "111"
        } else {
            return null;
        }
    }

    // try the correct password to check if the user name is valid
    if (correctPassword() === null) {

        alert("Invalid username. Access denied.");
    } else {

        while (correctPassword() != prompt("What is your password?")) {
            passwordTries++;
            if (passwordTries >= MAX_PASSWORD_TRIES) {
                alert("Too many incorrect password attempts. Access denied.");
                return;
            }
        }
        userState.status = userNamePromptValue;
        alert(`You are now logged in as ${userState.status}.`);
    }

    if (userState.status === 'admin') {

        const agePromptValue = prompt("How old are you?");
        const yearOfAdmissionPromptValue = prompt("What year were you admitted?");

        alert(`You will be ${parseInt(agePromptValue) + 4} years old in ${parseInt(yearOfAdmissionPromptValue) + 4} when you graduate!`);
    } else if (userState.status === 'tester' || userState.status === 'designer') {
        const numberOfAvailablePortfoliosPromptValue = parseInt(prompt("How many portfolios do you have available?"));
        const yearOfBirthPromptValue = prompt("What year were you born?");
        const age = CURRENT_YEAR - parseInt(yearOfBirthPromptValue);

        const product = userState.status === 'designer' ? "Adobe XD" : "QAPro"

        if (14 <= age && age <= 18 && 5 <= numberOfAvailablePortfoliosPromptValue && numberOfAvailablePortfoliosPromptValue <= 10) {
            alert(`You get a 10% discount on ${product}!`);
        } else if (18 < age && 10 <= numberOfAvailablePortfoliosPromptValue && numberOfAvailablePortfoliosPromptValue <= 20) {
            alert(`You get a 7% discount on ${product}!`);
        }

    }
}

const loginButtonPart2 = document.getElementById('loginButton');
if (!loginButtonPart2) {
    console.error("Could not find login button in part 2");
}

loginButtonPart2.addEventListener('click', part2Login);


/**
 * @param {number} length
 * @returns {string}
 */
const generatePassword = function(length) {
    const characters = "0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
