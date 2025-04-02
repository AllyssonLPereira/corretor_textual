const fs = require('fs');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, "utf-8", (err, text) => {
    breakParagraphs(text)
});

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

function breakParagraphs(text) {
    const paragraphs = text.toLowerCase().split("\n");
    const count = paragraphs.map((paragraph) => {
        return checkDuplicateWords(paragraph);
    });

    console.log(count);
}

function checkDuplicateWords(text) {
    const listWords = text.split(" ");
    const result = {};

    listWords.forEach(word => {
        result[word] = (result[word] || 0) + 1
    });

    return result;
};