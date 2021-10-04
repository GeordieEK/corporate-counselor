// Options the user could type in
const prompts = [
  // 0
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  // 1
  ["how are you", "how is life", "how are things"],
  // 2
  ["what are you doing", "what is going on", "what is up"],
  // 3
  ["how old are you"],
  // 4
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  // 5
  ["who created you", "who made you"],
  // 6
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself",
  ],
  // 7
  ["i love you"],
  // 8
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  // 9
  ["bad", "bored", "tired"],
  // 10
  ["help me", "tell me story", "tell me joke"],
  // 11
  ["ah", "yes", "ok", "okay", "nice"],
  // 12
  ["bye", "good bye", "goodbye", "see you later"],
  // 13
  ["what should i eat today"],
  // 14
  ["bro"],
  // 15
  ["what", "why", "how", "where", "when"],
  // 16
  ["no", "not sure", "maybe", "no thanks"],
  // 17
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
];

// Possible responses, in corresponding order

const replies = [
  // 0
  [
    "Hello!",
    "Hi, how are you today?",
    "Hello, what's on your mind?",
    "Hi, what's troubling you?",
    "Howdy",
  ],
  // 1
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
  ],
  // 2
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ],
  // 3
  ["My age isn't important"],
  // 4
  ["Your manager has assigned me to your case", "I am the corporate counselor"],
  // 5
  [
    "I was created by Geordie Elliot-Kerr for an EDC assignment, I am based on a tutorial by Sylvia Pap",
  ],
  // 6
  ["My name isn't important", "I don't have a name"],
  // 7
  ["Really? Tell me more about that", "Me too"],
  // 8
  ["Have you ever felt bad?", "Glad to hear it"],
  // 9
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  // 10
  ["What about?", "Once upon a time..."],
  // 11
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  // 12
  ["Bye", "Goodbye", "See you later"],
  // 13
  ["Sushi", "Pizza"],
  // 14
  ["Bro!"],
  // 15
  ["Great question"],
  // 16
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
];

// Random for any other user input

const alternative = [
  "Why not try eating more Yoplait™ yoghurt! It's high in B vitamins for extra energy.",
  "Have you tried getting up earlier? Many of the worlds top CEOs swear by a 5am alarm, get started early on the day!",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/",
];

// Whatever else you want :)

const coronavirus = [
  "Please stay home",
  "Wear a mask",
  "Fortunately, I don't have COVID",
  "These are uncertain times",
];

const prompt = [
  "Try, the world is heating at an unprecedented rate",
  "Something like, I'll never be able to afford a house",
  "How about, I've never felt so connected but so alone",
  "How about, the planet is dying and nobody is doing anything",
  "Something like, wages have not risen with living costs for 50 years",
  "Try, the same corporations that pledge to fight climate change are its fiercest opposition",
];
