const fs = require('fs');
const treatErrors = require("./errors/functionsErrors");

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, "utf-8", (err, text) => {
    try {
        if (err) throw err;
        accountWords(text);

    } catch(err) {
        treatErrors(err)

    }
});

function accountWords(text) {
    const paragraphs = extractParagraphs(text);
    const count = paragraphs.flatMap((paragraph) => {
        if (!paragraph) return [];
        return checkDuplicateWords(paragraph);
    })

    console.log(count);
}

function extractParagraphs(text) {
    return text.toLowerCase().split("\n");
}

function cleanWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function checkDuplicateWords(text) {
    const listWords = text.split(" ");
    const result = {};

    listWords.forEach(word => {
        if (word.length >= 3) {
            const wordClean = cleanWords(word);
            result[wordClean] = (result[wordClean] || 0) + 1
        }

    });

    return result;
};