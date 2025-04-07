import fs from "fs";
import { accountWords } from "./index.js";
import treatErrors from "./errors/functionsErrors.js";

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