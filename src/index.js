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
    const count = paragraphs.flatMap((paragraph) => {
        if (!paragraph) return [];
        return checkDuplicateWords(paragraph);
    })

    console.log(count);
}

function cleanWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
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