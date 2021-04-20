const fs = require('fs');
const readline = require('readline');
const mongoose = require('mongoose');
const stream = require('stream');
const { Question } = require('../models/questionModel');

let numberQuestionInPart = [0, 0, 0, 0, 0, 0, 0]
let currentPart = 0;
let question = {};
let questions = [];

function readLines() {
    const output = new stream.PassThrough({ objectMode: true });
    const rl = readline.createInterface(fs.createReadStream(__dirname + '/question_data.txt'));
    rl.on("line", line => { 
        output.write(line);
    });
    return output;
}

function createAnswer(line){
    if(line.split(' ')[0] === 'TRUE'){
        return {
            isTrue : true,
            content : line.slice(5)
        }
    }
    return {
        isTrue : false,
        content : line
    }
}
async function createQuestionFromFile(){
    await mongoose.connect('mongodb://localhost:27017/project_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    await Question.deleteMany({});
    for await (const line of readLines()) {
        console.log(line);
        let arr = line.split(' ');
        switch (arr[0]) {
            case "Part":
                currentPart = parseInt(arr[1]);
                console.log(currentPart);
                break;
            case "Question":
                numberQuestionInPart[currentPart]++; //tang so luong cau hoi thuoc part hien tai

                //luu question hien tai
                if (Object.keys(question).length) {
                    try {
                        let questiondoc = new Question(question);
                        await questiondoc.save();
                    }
                    catch (err) {
                        console.log('Can not import data!');
                    }
                }
                //khoi tao question moi
                question = {
                    part: currentPart,
                    number: numberQuestionInPart[currentPart],
                    imageURL: `${currentPart}_${numberQuestionInPart[currentPart]}.jpg`,
                    audioURL: `${currentPart}_${numberQuestionInPart[currentPart]}.mp3`,
                    answers: []
                };
                break;
            case "Type":
                question["type"] = line.slice(5);
                break;
            case "CONTENT":
                question["content"] = line.slice(8);
                break;
            default:
                question.answers.push(createAnswer(line));
                break;
        }
    }
    await mongoose.disconnect();
}

createQuestionFromFile()
