const quizQuestions = [
  {
    id: 0,
    question: "What is the capital of France?",
    answer: "Paris",
    mul: "B",
    subject: "Geography",
    choices: "A: Madrid, B: Paris, C: London, D: Berlin"
  },
  {
    id: 1,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    mul: "A",
    subject: "Art",
    choices: "A: Leonardo da Vinci, B: Leonardo Dicaprio, C: Michelangelo, D: Garnacho"
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    mul: "B",
    subject: "Science",
    choices: "A: Saturn, B: Your Mother, C: The Sun, D: Jupiter"
  },
  {
    id: 3,
    question: "What year did World War II end?",
    answer: "1945",
    mul: "C",
    subject: "History",
    choices: "A: 1943, B: 1944, C: 1945, D: 1946"
  },
  {
    id: 4,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    mul: "A",
    subject: "Chemistry",
    choices: "A: Au, B: O, C: H, D: Na"
  },
  {
    id: 5,
    question: "Who wrote the novel 'Pride and Prejudice'?",
    answer: "Jane Austen",
    mul: "B",
    subject: "Literature",
    choices: "A: Bob Lazzar, B: Jane Austen, C: J.K Rowling, D: William Dong"
  },
  {
    id: 6,
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria",
    mul: "C",
    subject: "Biology",
    choices: "A: DNA, B: Nucleus, C: Mitochondria, D: RNA"
  },
  {
    id: 7,
    question: "Which country won the FIFA World Cup in 2018?",
    answer: "France",
    mul: "B",
    subject: "Sports",
    choices: "A: Brazil, B: France, C: Argentina, D: Germany"
  },
  {
    id: 8,
    question: "What is the formula for the area of a circle?",
    answer: "πr^2",
    mul: "D",
    subject: "Mathematics",
    choices: "A: LxW, B: L^2, C: 1/2(LxH), D: πr^2"
  },
  {
    id: 9,
    question: "Who invented the telephone?",
    answer: "Alexander Graham Bell",
    mul: "A",
    subject: "Inventions",
    choices: "A: Alexander Graham Bell, B: Thomas Edison, C: Benjamin Franklin, D: Albert Einstein"
  },
  {
    id: 10,
    question: "What is the largest ocean on Earth?",
    answer: "Pacific Ocean",
    mul: "A",
    subject: "Geography",
    choices: "A: Pacific Ocean, B: Atlantic Ocean, C: Indian Ocean, D: Arctic Ocean"
  },
  {
    id: 11,
    question: "Who is credited with the theory of general relativity?",
    answer: "Albert Einstein",
    mul: "C",
    subject: "Science",
    choices: "A: Isaac Newton, B: Galileo Galilei, C: Albert Einstein, D: Nikola Tesla"
  },
  {
    id: 12,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    mul: "B",
    subject: "Chemistry",
    choices: "A: O2, B: H2O, C: CO2, D: N2"
  },
  {
    id: 13,
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    mul: "D",
    subject: "Literature",
    choices: "A: Mark Twain, B: Charles Dickens, C: Jane Austen, D: William Shakespeare"
  },
  {
    id: 14,
    question: "What is the largest organ in the human body?",
    answer: "Skin",
    mul: "A",
    subject: "Biology",
    choices: "A: Skin, B: Penis, C: Brain, D: Heart"
  },
  {
    id: 15,
    question: "Which planet is known as the 'Red Planet'?",
    answer: "Mars",
    mul: "C",
    subject: "Science",
    choices: "A: Venus, B: Jupiter, C: Mars, D: Mercury"
  },
  {
    id: 16,
    question: "What is the currency of Japan?",
    answer: "Japanese Yen",
    mul: "D",
    subject: "Economics",
    choices: "A: US Dollar, B: Euro, C: British Pound, D: Japanese Yen"
  },
  {
    id: 17,
    question: "Who painted the famous ceiling of the Sistine Chapel?",
    answer: "Michelangelo",
    mul: "B",
    subject: "Art",
    choices: "A: Leonardo da Vinci, B: Michelangelo, C: Vincent van Gogh, D: Pablo Picasso"
  },
  {
    id: 18,
    question: "In which year did the Berlin Wall fall?",
    answer: "1989",
    mul: "C",
    subject: "History",
    choices: "A: 1987, B: 1988, C: 1989, D: 1990"
  },
  {
    id: 19,
    question: "What is the chemical symbol for oxygen?",
    answer: "O",
    mul: "A",
    subject: "Chemistry",
    choices: "A: O, B: C, C: H, D: N"
  },
  {
    id: 20,
    question: "Which country hosted the 2016 Summer Olympics?",
    answer: "Brazil",
    mul: "D",
    subject: "Sports",
    choices: "A: USA, B: China, C: Japan, D: Brazil"
  },
  {
    id: 21,
    question: "What is the value of π (pi) rounded to two decimal places?",
    answer: "3.14",
    mul: "B",
    subject: "Mathematics",
    choices: "A: 2.71, B: 3.14, C: 1.61, D: 4.29"
  },
  {
    id: 22,
    question: "Who invented the light bulb?",
    answer: "Thomas Edison",
    mul: "C",
    subject: "Inventions",
    choices: "A: Alexander Graham Bell, B: Isaac Newton, C: Thomas Edison, D: Nikola Tesla"
  },
  {
    id: 23,
    question: "Which river is the longest in the world?",
    answer: "Nile River",
    mul: "A",
    subject: "Geography",
    choices: "A: Nile River, B: Amazon River, C: Yangtze River, D: Mississippi River"
  },
  {
    id: 24,
    question: "What is the chemical symbol for carbon dioxide?",
    answer: "CO2",
    mul: "B",
    subject: "Chemistry",
    choices: "A: O2, B: CO2, C: H2O, D: N2"
  },
  {
    id: 25,
    question: "Who is the author of the 'Harry Potter' book series?",
    answer: "J.K. Rowling",
    mul: "D",
    subject: "Literature",
    choices: "A: Stephen King, B: J.R.R. Tolkien, C: George R.R. Martin, D: J.K. Rowling"
  },
  {
    id: 26,
    question: "What is the process by which plants make their own food?",
    answer: "Photosynthesis",
    mul: "A",
    subject: "Biology",
    choices: "A: Photosynthesis, B: Respiration, C: Transpiration, D: Fermentation"
  },
  {
    id: 27,
    question: "Which country won the UEFA Euro 2020?",
    answer: "Italy",
    mul: "B",
    subject: "Sports",
    choices: "A: England, B: Italy, C: France, D: North Korea"
  },
  {
    id: 28,
    question: "What is the formula for the volume of a sphere?",
    answer: "(4/3)πr^3",
    mul: "D",
    subject: "Mathematics",
    choices: "A: LxWxH, B: LxW, C: πr^2, D: (4/3)πr^3"
  },
  {
    id: 29,
    question: "Who is known as the 'Father of Modern Physics'?",
    answer: "Albert Einstein",
    mul: "C",
    subject: "Science",
    choices: "A: Isaac Newton, B: Galileo Galilei, C: Albert Einstein, D: Nikola Tesla"
  },
  {
    id: 30,
    question: "What is the largest species of shark?",
    answer: "Whale Shark",
    mul: "A",
    subject: "Biology",
    choices: "A: Whale Shark, B: Great White Shark, C: Tiger Shark, D: Hammerhead Shark"
  },
  {
    id: 31,
    question: "Which famous scientist formulated the three laws of motion?",
    answer: "Isaac Newton",
    mul: "A",
    subject: "Science",
    choices: "A: Isaac Newton, B: Galileo Galilei, C: Albert Einstein, D: Nicolaus Copernicus"
  },
  {
    id: 32,
    question: "Which gas is most abundant in Earth's atmosphere?",
    answer: "Nitrogen",
    mul: "A",
    subject: "Science",
    choices: "A: Nitrogen, B: Oxygen, C: Carbon Dioxide, D: Fart"
  },
  {
    id: 33,
    question: "Which novel has the line 'It was the best of times, it was the worst of times'?",
    answer: "A Tale of Two Cities",
    mul: "B",
    subject: "Literature",
    choices: "A: Pride and Prejudice, B: A Tale of Two Cities, C: To Kill a Mockingbird, D: 1984"
  },
  {
    id: 34,
    question: "What is the capital city of Canada?",
    answer: "Ottawa",
    mul: "C",
    subject: "Geography",
    choices: "A: Toronto, B: Vancouver, C: Ottawa, D: Montreal"
  },
  {
    id: 35,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    mul: "A",
    subject: "Chemistry",
    choices: "A: Au, B: Ag, C: Cu, D: Fe"
  },
  {
    id: 36,
    question: "Which planet is known as the 'Blue Planet'?",
    answer: "Earth",
    mul: "C",
    subject: "Science",
    choices: "A: Venus, B: Jupiter, C: Earth, D: Neptune"
  },
  {
    id: 37,
    question: "What is the largest country in the world by land area?",
    answer: "Russia",
    mul: "B",
    subject: "Geography",
    choices: "A: Canada, B: Russia, C: Your Mother, D: United States"
  },
  {
    id: 38,
    question: "Which novel features the characters Harry Potter and Hermione Granger?",
    answer: "Harry Potter and the Philosopher's Stone",
    mul: "D",
    subject: "Literature",
    choices: "A: The Great Gatsby, B: 1984, C: To Kill a Mockingbird, D: Harry Potter and the Philosopher's Stone"
  },
  {
    id: 39,
    question: "What is the largest type of penguin?",
    answer: "Emperor Penguin",
    mul: "B",
    subject: "Biology",
    choices: "A: King Penguin, B: Emperor Penguin, C: Gentoo Penguin, D: Adélie Penguin"
  },
  {
    id: 40,
    question: "Who is the author of the play 'Hamlet'?",
    answer: "William Shakespeare",
    mul: "D",
    subject: "Literature",
    choices: "A: Mark Twain, B: Charles Dickens, C: Jane Austen, D: William Shakespeare"
  },
  {
    id: 41,
    question: "What is the formula for the area of a rectangle?",
    answer: "Length x Width",
    mul: "A",
    subject: "Mathematics",
    choices: "A: Length x Width, B: πr^2, C: (1/2) x Base x Height, D: (4/3)πr^3"
  },
  {
    id: 42,
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answer: "Japan",
    mul: "D",
    subject: "Geography",
    choices: "A: China, B: South Korea, C: Vietnam, D: Japan"
  },
  {
    id: 43,
    question: "What is the chemical symbol for helium?",
    answer: "He",
    mul: "A",
    subject: "Chemistry",
    choices: "A: He, B: H, C: O, D: N"
  },
  {
    id: 44,
    question: "Who is the artist famous for painting the 'Starry Night'?",
    answer: "Vincent van Gogh",
    mul: "C",
    subject: "Art",
    choices: "A: Leonardo da Vinci, B: Michelangelo, C: Vincent van Gogh, D: Pablo Picasso"
  },
  {
    id: 45,
    question: "In which year did the American Civil War end?",
    answer: "1865",
    mul: "B",
    subject: "History",
    choices: "A: 1863, B: 1865, C: 1870, D: 1880"
  },
  {
    id: 46,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    mul: "B",
    subject: "Chemistry",
    choices: "A: O2, B: H2O, C: CO2, D: N2"
  },
  {
    id: 47,
    question: "Who is the author of the book 'To Kill a Mockingbird'?",
    answer: "Harper Lee",
    mul: "A",
    subject: "Literature",
    choices: "A: Harper Lee, B: J.D. Salinger, C: F. Scott Fitzgerald, D: William Faulkner"
  },
  {
    id: 48,
    question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answer: "Carbon Dioxide",
    mul: "A",
    subject: "Biology",
    choices: "A: Carbon Dioxide, B: Oxygen, C: Nitrogen, D: Hydrogen"
  },
  {
    id: 49,
    question: "Which country hosted the 2012 Summer Olympics?",
    answer: "United Kingdom",
    mul: "C",
    subject: "Sports",
    choices: "A: China, B: Japan, C: United Kingdom, D: Russia"
  },
  {
    id: 50,
    question: "What is the value of the mathematical constant 'e' (approximate)?",
    answer: "2.71",
    mul: "B",
    subject: "Mathematics",
    choices: "A: 3.14, B: 2.71, C: 1.61, D: 4.29"
  },
  {
    id: 51,
    question: "Who was the first person to walk on the moon?",
    answer: "Neil Armstrong",
    mul: "C",
    subject: "History",
    choices: "A: Buzz Aldrin, B: John Glenn, C: Neil Armstrong, D: Alan Shepard"
  },
  {
    id: 52,
    question: "Which instrument is used to measure atmospheric pressure?",
    answer: "Barometer",
    mul: "D",
    subject: "Science",
    choices: "A: Thermometer, B: Hygrometer, C: Anemometer, D: Barometer"
  },
  {
    id: 53,
    question: "What is the largest desert in the world?",
    answer: "Sahara Desert",
    mul: "A",
    subject: "Geography",
    choices: "A: Sahara Desert, B: Gobi Desert, C: Arabian Desert, D: Kalahari Desert"
  },
  {
    id: 54,
    question: "What is the chemical symbol for silver?",
    answer: "Ag",
    mul: "C",
    subject: "Chemistry",
    choices: "A: Au, B: Ag, C: Cu, D: Fe"
  },
  {
    id: 55,
    question: "Who wrote the novel '1984'?",
    answer: "George Orwell",
    mul: "B",
    subject: "Literature",
    choices: "A: Aldous Huxley, B: George Orwell, C: Ray Bradbury, D: Margaret Atwood"
  },
  {
    id: 56,
    question: "Which part of the plant holds it in the soil and helps in the absorption of water and minerals?",
    answer: "Roots",
    mul: "D",
    subject: "Biology",
    choices: "A: Leaves, B: Stems, C: Flowers, D: Roots"
  },
  {
    id: 57,
    question: "Which country won the FIFA World Cup in 2014?",
    answer: "Germany",
    mul: "A",
    subject: "Sports",
    choices: "A: Germany, B: Brazil, C: Argentina, D: Spain"
  },
  {
    id: 58,
    question: "What is the formula for the circumference of a circle?",
    answer: "2πr",
    mul: "D",
    subject: "Mathematics",
    choices: "A: LxW, B: L^2, C: πr^2, D: 2πr"
  },
  {
    id: 59,
    question: "Who is known for the theory of evolution by natural selection?",
    answer: "Charles Darwin",
    mul: "A",
    subject: "Science",
    choices: "A: Charles Darwin, B: Gregor Mendel, C: Alfred Wegener, D: Rosalind Franklin"
  },
  {
    id: 60,
    question: "What is the largest species of tiger?",
    answer: "Siberian Tiger",
    mul: "C",
    subject: "Biology",
    choices: "A: Bengal Tiger, B: Sumatran Tiger, C: Siberian Tiger, D: Malayan Tiger"
  },
  {
    id: 61,
    question: "Who is the author of the famous play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    mul: "D",
    subject: "Literature",
    choices: "A: Mark Twain, B: Charles Dickens, C: Jane Austen, D: William Shakespeare"
  },
  {
    id: 62,
    question: "What is the formula for the area of a triangle?",
    answer: "(1/2) x Base x Height",
    mul: "A",
    subject: "Mathematics",
    choices: "A: (1/2) x Base x Height, B: LxW, C: πr^2, D: (4/3)πr^3"
  },
  {
    id: 63,
    question: "Which country is known as the 'Land of the Midnight Sun'?",
    answer: "Norway",
    mul: "B",
    subject: "Geography",
    choices: "A: Sweden, B: Norway, C: Finland, D: Russia"
  },
  {
    id: 64,
    question: "What is the chemical symbol for nitrogen?",
    answer: "N",
    mul: "A",
    subject: "Chemistry",
    choices: "A: N, B: O, C: H, D: C"
  },
  {
    id: 65,
    question: "Who is the author of the 'Lord of the Rings' book series?",
    answer: "J.R.R. Tolkien",
    mul: "C",
    subject: "Literature",
    choices: "A: George R.R. Martin, B: J.K. Rowling, C: J.R.R. Tolkien, D: C.S. Lewis"
  },
  {
    id: 66,
    question: "What is the process by which green plants use sunlight to synthesize food?",
    answer: "Photosynthesis",
    mul: "D",
    subject: "Biology",
    choices: "A: Respiration, B: Transpiration, C: Fermentation, D: Photosynthesis"
  },
  {
    id: 67,
    question: "Which country hosted the 2008 Summer Olympics?",
    answer: "China",
    mul: "A",
    subject: "Sports",
    choices: "A: China, B: Japan, C: South Korea, D: Australia"
  },
  {
    id: 68,
    question: "What is the value of the mathematical constant 'π' (pi) rounded to two decimal places?",
    answer: "3.14",
    mul: "B",
    subject: "Mathematics",
    choices: "A: 2.71, B: 3.14, C: 1.61, D: 4.29"
  },
  {
    id: 69,
    question: "Who was the first woman to win a Nobel Prize?",
    answer: "Marie Curie",
    mul: "C",
    subject: "History",
    choices: "A: Mother Teresa, B: Rosa Parks, C: Marie Curie, D: Amelia Earhart"
  },
  {
    id: 70,
    question: "What is the chemical symbol for carbon?",
    answer: "C",
    mul: "A",
    subject: "Chemistry",
    choices: "A: C, B: O, C: H, D: N"
  },
  {
    id: 71,
    question: "Who wrote the novel 'The Great Gatsby'?",
    answer: "F. Scott Fitzgerald",
    mul: "B",
    subject: "Literature",
    choices: "A: Harper Lee, B: F. Scott Fitzgerald, C: George Orwell, D: Mark Twain"
  },
  {
    id: 72,
    question: "What is Neymar's full name?",
    answer: "Polar Bear",
    mul: "C",
    subject: "Biology",
    choices: "A: Neymar Jr, B: Ney Ney, C: Neymar Da Silva Santos Jr, D: Neymar Thiago Antony Jr"
  },
  {
    id: 73,
    question: "Who is the artist famous for painting the 'Mona Lisa'?",
    answer: "Leonardo da Vinci",
    mul: "A",
    subject: "Art",
    choices: "A: Leonardo da Vinci, B: Vincent van Gogh, C: Michelangelo, D: Pablo Picasso"
  },
  {
    id: 74,
    question: "In which year did the American Revolution begin?",
    answer: "1775",
    mul: "D",
    subject: "History",
    choices: "A: 1770, B: 1773, C: 1776, D: 1775"
  },
  {
    id: 75,
    question: "What is the chemical symbol for carbon monoxide?",
    answer: "CO",
    mul: "B",
    subject: "Chemistry",
    choices: "A: CO2, B: CO, C: H2O, D: N2"
  },
  {
    id: 76,
    question: "Who is the author of the book 'The Catcher in the Rye'?",
    answer: "J.D. Salinger",
    mul: "A",
    subject: "Literature",
    choices: "A: J.D. Salinger, B: Harper Lee, C: F. Scott Fitzgerald, D: George Orwell"
  },
  {
    id: 77,
    question: "Which part of the plant is responsible for photosynthesis?",
    answer: "Leaves",
    mul: "C",
    subject: "Biology",
    choices: "A: Roots, B: Stems, C: Leaves, D: Flowers"
  },
  {
    id: 78,
    question: "Which country won the FIFA World Cup in 2010?",
    answer: "Spain",
    mul: "B",
    subject: "Sports",
    choices: "A: Brazil, B: Spain, C: Germany, D: Argentina"
  },
  {
    id: 79,
    question: "What is the formula for the volume of a rectangular prism?",
    answer: "Length x Width x Height",
    mul: "A",
    subject: "Mathematics",
    choices: "A: Length x Width x Height, B: LxW, C: πr^2, D: (4/3)πr^3"
  },
  {
    id: 80,
    question: "Who is known for the theory of gravity?",
    answer: "Isaac Newton",
    mul: "D",
    subject: "Science",
    choices: "A: Albert Einstein, B: Galileo Galilei, C: Johannes Kepler, D: Isaac Newton"
  },
  {
    id: 81,
    question: "What is the largest species of kangaroo?",
    answer: "Red Kangaroo",
    mul: "C",
    subject: "Biology",
    choices: "A: Eastern Grey Kangaroo, B: Western Grey Kangaroo, C: Red Kangaroo, D: Antilopine Kangaroo"
  },
  {
    id: 82,
    question: "Who painted the famous mural on the ceiling of the Sistine Chapel?",
    answer: "Michelangelo",
    mul: "A",
    subject: "Art",
    choices: "A: Michelangelo, B: Leonardo da Vinci, C: Vincent van Gogh, D: Pablo Picasso"
  },
  {
    id: 83,
    question: "In which year did World War I begin?",
    answer: "1914",
    mul: "B",
    subject: "History",
    choices: "A: 1905, B: 1914, C: 1920, D: 1918"
  },
  {
    id: 84,
    question: "What is the chemical symbol for sodium?",
    answer: "Na",
    mul: "C",
    subject: "Chemistry",
    choices: "A: Na, B: K, C: H, D: C"
  },
  {
    id: 85,
    question: "Who is the author of the book 'Brave New World'?",
    answer: "Aldous Huxley",
    mul: "A",
    subject: "Literature",
    choices: "A: Aldous Huxley, B: George Orwell, C: Ray Bradbury, D: Margaret Atwood"
  },
  {
    id: 86,
    question: "What is the process by which plants release water vapor into the air?",
    answer: "Transpiration",
    mul: "D",
    subject: "Biology",
    choices: "A: Photosynthesis, B: Respiration, C: Fermentation, D: Transpiration"
  },
  {
    id: 87,
    question: "Which country hosted the 2004 Summer Olympics?",
    answer: "Greece",
    mul: "C",
    subject: "Sports",
    choices: "A: Italy, B: France, C: Greece, D: Spain"
  },
  {
    id: 88,
    question: "What is the value of the mathematical constant 'e' (approximate)?",
    answer: "2.71",
    mul: "B",
    subject: "Mathematics",
    choices: "A: 3.14, B: 2.71, C: 1.61, D: 4.29"
  },
  {
    id: 89,
    question: "Who was the first woman to win a Nobel Prize?",
    answer: "Marie Curie",
    mul: "C",
    subject: "History",
    choices: "A: Mother Teresa, B: Rosa Parks, C: Marie Curie, D: Amelia Earhart"
  },
  {
    id: 90,
    question: "What is the chemical symbol for carbon?",
    answer: "C",
    mul: "A",
    subject: "Chemistry",
    choices: "A: C, B: O, C: H, D: N"
  },
  {
    id: 91,
    question: "Who wrote the novel 'The Great Gatsby'?",
    answer: "F. Scott Fitzgerald",
    mul: "B",
    subject: "Literature",
    choices: "A: Harper Lee, B: F. Scott Fitzgerald, C: George Orwell, D: Mark Twain"
  },
  {
    id: 92,
    question: "What is the largest species of bear?",
    answer: "Polar Bear",
    mul: "C",
    subject: "Biology",
    choices: "A: Grizzly Bear, B: Brown Bear, C: Your Mother, D: Black Bear"
  },
  {
    id: 93,
    question: "Who is the artist famous for painting the 'Mona Lisa'?",
    answer: "Leonardo da Vinci",
    mul: "A",
    subject: "Art",
    choices: "A: Leonardo da Vinci, B: Vincent van Gogh, C: Michelangelo, D: Pablo Picasso"
  },
  {
    id: 94,
    question: "In which year was your mother born?",
    answer: "1775",
    mul: "D",
    subject: "History",
    choices: "A: 1770, B: 1773, C: 1776, D: 1775"
  },
  {
    id: 95,
    question: "What is the chemical symbol for carbon monoxide?",
    answer: "CO",
    mul: "B",
    subject: "Chemistry",
    choices: "A: CO2, B: CO, C: H2O, D: N2"
  },
  {
    id: 96,
    question: "Who is the author of the book 'The Catcher in the Rye'?",
    answer: "J.D. Salinger",
    mul: "A",
    subject: "Literature",
    choices: "A: J.D. Salinger, B: Harper Lee, C: F. Scott Fitzgerald, D: George Orwell"
  },
  {
    id: 97,
    question: "Which part of the plant is responsible for photosynthesis?",
    answer: "Leaves",
    mul: "C",
    subject: "Biology",
    choices: "A: Roots, B: Stems, C: Leaves, D: Flowers"
  },
  {
    id: 98,
    question: "Which country won the FIFA World Cup in 2010?",
    answer: "Spain",
    mul: "B",
    subject: "Sports",
    choices: "A: Brazil, B: Spain, C: Germany, D: Argentina"
  },
  {
    id: 99,
    question: "What is the formula for the volume of a rectangular prism?",
    answer: "Length x Width x Height",
    mul: "A",
    subject: "Mathematics",
    choices: "A: Length x Width x Height, B: LxW, C: πr^2, D: (4/3)πr^3"
  }
];


    
    
    
  
  
  module.exports = quizQuestions;