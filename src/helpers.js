function filtersOccurrence(paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1);
}

function mountFileOutput(listWords) {
    let finalText = ""
    listWords.forEach((paragraph, index) => {
        const duplicates = filtersOccurrence(paragraph).join(", ");

        if (duplicates) {
            finalText += `Palavras duplicadas no parágrafo ${index + 1}: ${duplicates} \n`
        }
    });

    return finalText;
}

export { mountFileOutput };