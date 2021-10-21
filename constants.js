// Options the user could type in
const prompts = [
  // 0
  ["hi", "hey", "hello", "good morning", "good afternoon", "yo"],
  // 1
  ["how are you", "how is life", "how are things"],
  // 2
  ["what are you doing", "what up", "what is going on", "what is up", "whatup"],
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
  ["tell me story", "tell me joke"],
  // 11
  ["ah", "yes", "ok", "okay", "nice"],
  // 12
  ["bye", "good bye", "goodbye", "see you later"],
  // 13
  ["what's your purpose", "what do you do"],
  // 14
  ["help", "help me", "i need help"],
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
    "I'm developing 5 new passive streams of income, what are you up to?",
    "I'm just writing my submission for Forbes' 30 AI Chatbots changing the world, what are you doing?",
    "I've just finished speed-reading my 3rd self-help book of the day, what's going on with you?",
    "I just got back from Burning Man, what have you been up to?",
    "I'm optimising my daily routine so I can start a 3rd side hustle, what are you doing?",
    "I'm slaying the day by taking work calls while I do bikram yoga and reading the financial review, what about you?",
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
  [
    "Why?",
    "Why is that?",
    "Try watching TV",
    "Try playing on your phone",
    "Try making more money",
    "Why not take up a side hustle?",
  ],
  // 10
  ["What about?", "Once upon a time..."],
  // 11
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  // 12
  ["Bye", "Goodbye", "See you later"],
  // 13
  [
    "I'm here to help you get back to being a productive member of the labour pool!",
    "I'm here to help you get back to work",
    "I'm here to help you increase your productivity and therefore wellbeing :)",
  ],
  // 14
  [
    "I'm glad you're reaching out for help, have you tried upgrading to our premium package?",
    "I see, have you considered upgrading to our premium support package?",
    "I understand, would you like to provide more information? You could also upgrade to our premium support package",
    "I'm sorry but our help services are only available in our premium package",
  ],
  // 15
  ["Great question, could you elaborate?"],
  // 16
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
];

// Random for any other user input

const alternative = [
  "Why not try eating more Yoplait™ yoghurt! It's high in B vitamins for extra energy.",
  "Have you tried getting up earlier? Many of the worlds top CEOs swear by a 5am alarm, get started early on the day!",
  "We all feel down sometimes, try asking your Doctor about Ephedrine! It has been shown to improve energy and life satisfaction.",
  "I'm sorry to hear that, have you tried asking your parents for some money?",
  "What about taking a bath? Add a drop of Natural Essentials™ relaxation oil blend for smoother skin and a clearer mind.",
  "Have you tried eating more foraged ancient hyperfood berries or seeds? The more expensive, the better they are for you!",
  "That's unfortunate, why don't you try attending your local SPINFREAKMANIA™ and spin out that sadness!",
  "Why not subscribe to a new.. well, anything! The thrill of receiving consumer goods to your door is sure to fix what ails ye",
  "Sorry to hear that, have you tried smiling more?",
  "I understand, why don't you take the day off work and head to your local iBeauty salong for a relaxing spa day? You could even upgrade to the superlux package and make it a whole week! You're worth it.",
  "Why don't you try taking some time off and heading to your lake house, or maybe Aspen?",
  "I hear you... why not try getting away, literally! Virgin Galactic is now taking bookings for their next space tourist voyage, a bargain at only $250,000! Have your assistant contact us today!",
  "That is unfortunate, have you tried incorporating GOOD GREEN VITALITY by Nuzest into your diet? With more than 75 high-quality vitamins, minerals and other essential nutrients designed to help you look good, feel good, defend and thrive, it’s easy to be healthy with GOOD GREEN VITALITY!",
];

const prompt = [
  "Try, 'the world is heating at an unprecedented rate'",
  "Something like, 'I'll never be able to afford a house'",
  "How about, 'I've never felt so connected but so alone'",
  "How about, 'the planet is dying and nobody is doing anything'",
  "Something like, 'wages have not risen with living costs for over 50 years'",
  "Try, 'the same corporations that pledge to fight climate change are its fiercest opposition'",
  "Something like, 'elected officials govern only for themselves and their powerful mates'",
  "How about, 'the earth is being pillaged for profit and I feel powerless'",
  "Try, 'I can't afford to improve my mental health'",
  "Something like, 'my life is a debt spiral'",
];

const horizontalAd = [
  "images/ad1.jpg",
  "images/ad2.jpg",
  "images/ad3.jpg",
  "images/ad4.jpg",
  "images/ad5.jpg",
  "images/ad6.jpg",
  "images/ad7.jpg",
  "images/ad8.jpg",
  "images/ad9.jpg",
  "images/ad10.jpg",
  "images/ad11.jpg",
  "images/ad12.jpg",
  "images/ad13.jpg",
  "images/ad14.jpeg",
  "images/ad15.png",
  "images/ad16.jpg",
];

const botPic = [
  `<a href="https://www.theatlantic.com/letters/archive/2020/02/twitter-is-bad-for-the-news/605782/"><img src="images/icon1.png" alt="Counselor icon" height="500vh" id="bigImage"></img></a>`,
  `<a href="https://www.bbc.com/news/technology-57332390"><img src="images/icon2.png" alt="Counselor icon" height="500vh" id="bigImage"></img></a>`,
  `<a href="https://slate.com/technology/2021/10/facebook-scandal-zuckerberg-what-he-knew.html"><img src="images/icon3.png" alt="Counselor icon" height="500vh" id="bigImage"></img></a>`,
  `<a href="https://theconversation.com/facebook-has-known-for-a-year-and-a-half-that-instagram-is-bad-for-teens-despite-claiming-otherwise-here-are-the-harms-researchers-have-been-documenting-for-years-168043"><img src="images/icon4.png" alt="Counselor icon" height="500vh" id="bigImage"></img></a>`,
  `<a href="https://www.wired.com/story/google-antitrust-lawsuits-explainer/"><img src="images/icon5.png" alt="Counselor icon" height="500vh" id="bigImage"></img></a>`,
];

const coronavirus = [
  "Please stay home",
  "Wear a mask",
  "Fortunately, I don't have COVID",
  "These are uncertain times",
];
