import fs from "fs";
import { accountWords } from "./index.js";
import treatErrors from "./errors/functionsErrors.js";

const pathOrigin = process.argv;
const link = pathOrigin[2];

const pathDestination = pathOrigin[3];

fs.readFile(link, "utf-8", (err, text) => {
    try {
        if (err) throw err;
        const result = accountWords(text);
        writeFile(result, pathDestination);

    } catch(err) {
        treatErrors(err)
    }
});

async function writeFile(listWords, path) {
    const file = `${path}/resultado.txt`;
    const text = JSON.stringify(listWords);

    try {
        await fs.promises.writeFile(file, text);
        console.log("Arquivo criado");

    } catch(err) {
        throw err;
    }
}