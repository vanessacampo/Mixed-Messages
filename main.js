const content = readFileSync("main.js");
let randomMsg = {
    // array of greetings.
    first : ["Hey there", "Hello", "Good morning", "Good evening", "Good afternoon'"],
    // array of characters.
    second : ["Sir", "Lady", "Dear", "Lovely", "Mom", "Dad", "sis"],
    // array of sentence.
    third : ["Some coffee?",
            "Wanna play?",
            "Are you hungry?",
            "Are you okay?",
            "Are you thirsty?"
            "Ready to go?"
            "Let's watch a movie!"],
    // method random messages.        
    generateMeth () {
        const a = this.first[Math.floor(Math.random() * this.first.length)];
        const b = this.second[Math.floor(Math.random() * this.second.length)];
        const c = this.third[Math.floor(Math.random() * this.third.length)];

        return `${a}, ${b}. ${c}`;
    }
};

console.log(randomMsg.generateMeth());
