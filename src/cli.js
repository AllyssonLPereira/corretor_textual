import fs from "fs";
import path from "path";
import chalk from "chalk";
import { Command } from "commander";
import { accountWords } from "./index.js";
import { mountFileOutput } from "./helpers.js";
import treatErrors from "./errors/functionsErrors.js";

const program = new Command();

program
    .version("0.0.1")
    .option("-t, --text <string>", "caminho do texto a ser processado")
    .option("-d, --destination <string>", "caminho da pasta onde salvar o arquivo resultante do processamento")
    .action((options) => {
        const { text, destination } = options;

        if (!text || !destination) {
            console.error(chalk.red("error: favor inserir caminho de origem e destino"));
            program.help();
            return;
        }

        const textPath = path.resolve(text);
        const destinationPath = path.resolve(destination);

        try {
            processFile(textPath, destinationPath);
            console.log(chalk.green("texto processado com sucesso"));
        } catch (err) {
            console.error(chalk.red("ocorreu um erro no processamento"), err);
        }
    })

program.parse();

function processFile(text, destination) {
    fs.readFile(text, "utf-8", (err, text) => {
        try {
            if (err) throw err;
            const result = accountWords(text);
            writeFile(result, destination);

        } catch (err) {
            treatErrors(err);
        }
    });
}

async function writeFile(listWords, destination) {
    const file = `${destination}/resultado.txt`;
    const text = mountFileOutput(listWords);

    try {
        await fs.promises.writeFile(file, text);
        console.log(chalk.green("Arquivo criado"));

    } catch (err) {
        throw err;
    }
}