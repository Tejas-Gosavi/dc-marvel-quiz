var readlineSync = require('readline-sync');
var chalk = require('chalk')
var highScorer = {
  'Name': 'Tejas',
  'Score': 10,
}

console.log('\n\n')
dc = chalk.bgKeyword('white')(chalk.hex('#00a9d9').bold('DC'))
marvel = chalk.white.bgRedBright.bold('Marvel')
console.log(dc + marvel + " Quiz")
console.log('If you are true DC and/or Marvel, then this Quiz for you....come on give it a try!!!')
console.log('\n')

var question1 = 
{
    'Question': 'Batman is also known as? ',
    'Options': {
                'A': 'Son of Krypton',
                'B': "The Demon's Head",
                'C': 'The Terminator',
                'D': 'Caped Cruseder',
              },
    'Answer': 'D',
}
var question2 = 
{
    'Question': "Wolverine/Logan's claws are made up of which Metal? ",
    'Options': {
                'A': 'Vibranium',
                'B': 'Adamantium',
                'C': 'Titanium',
                'D': 'URU',
              },
    'Answer': 'B',
}
var question3 = 
{
    'Question': 'Who is father of Raven? ',
    'Options': {
                'A': 'Lex Luthor',
                'B': 'Black Adam',
                'C': 'Darkseid',
                'D': 'Trigon',
              },
    'Answer': 'D',
}
var question4 = 
{
    'Question': 'Which of the following pair is Right? ',
    'Options': {
                'A': 'Captain America - Bucky Barnes',
                'B': 'Iron Man - Howard Stark',
                'C': 'Mr.Fantastic - Reed Richards',
                'D': 'Wolverine - Wade Wilson',
              },
    'Answer': 'C',
}
var question5 = 
{
    'Question': " Who is World's Greatest Assassin? ",
    'Options': {
                'A': 'Deadshot',
                'B': 'Bane',
                'C': 'Lobo',
                'D': 'Deathstroke',
              },
    'Answer': 'D',
}
var question6 = 
{
    'Question': 'Who is father of Carnage? ',
    'Options': {
                'A': 'Venom',
                'B': 'Riot',
                'C': 'Anti-Venom',
                'D': 'Knull',
              },
    'Answer': 'A',
}
var question7 = 
{
    'Question': "Fill in the blanks - \nIn brightest day, in blackest night, no evil shall escape my sight. Let those who worship evil's might, beware my power, ____'s light",
    'Options': {
                'A': 'Green Lantern',
                'B': 'Red Lantern',
                'C': 'Blue Lantern',
                'D': 'Yellow Lantern',
              },
    'Answer': 'A',
}
var question8 = 
{
    'Question': 'Real indetity of Daredevil? ',
    'Options': {
                'A': 'Matt Murdock',
                'B': 'Frank Castle',
                'C': 'Luke Cage',
                'D': 'Danny Rand',
              },
    'Answer': 'A',
}
var question9 = 
{
    'Question': 'Real indetity of Red Hood? ',
    'Options': {
                'A': 'Slade Wilson',
                'B': 'Dick Grayson',
                'C': 'Jason Todd',
                'D': 'Tim Drake',
              },
    'Answer': 'C',
}
var question10 = 
{
    'Question': 'According to comics, Who killed entire Marvel Universe? ',
    'Options': {
                'A': 'Deadpool',
                'B': 'Galactus',
                'C': 'Blackbolt',
                'D': 'Punisher',
              },
    'Answer': 'D',
}
var questions = [question1, question2, question3, question4, question5,                       question6, question7, question8, question9, question10];
var score = 0;

for (i = 0; i < questions.length; i++)
{
    var currentQuestion = questions[i];
    console.log((i+1) + ". " +currentQuestion.Question);
    currentOptions = currentQuestion.Options
    temp = ['A', 'B', 'C', 'D']
    for (j = 0; j < temp.length; j++)
    {
        console.log("\t" + temp[j] + ")" + currentOptions[temp[j]])
    }
    var userAnswer = readlineSync.question('Answer: ');
    if (currentQuestion.Answer.toUpperCase()=== userAnswer.toUpperCase())
    {
        console.log(chalk.greenBright.bold('Right answer!!! '));
        score++;
    }
    else
    {
        console.log(chalk.redBright.bold('Wrong answer!!! '));
        console.log('Right answer is ' + currentQuestion.Answer + ")"               + chalk.underline(currentOptions                                        [currentQuestion.Answer])
                   );
    }
    console.log("\n")
}

console.log('Your final score: ' + score + '/10')
if (score == highScorer.Score)
{
    console.log('You are true Nerd, well done.')
    console.log('You are now current Highscorer. ')
}
else
{
    console.log('You failed to set new highscore. ')
    console.log('Current Highscorer is ', highScorer.Name)
    console.log('Sorry, You are not true Nerd.')
}