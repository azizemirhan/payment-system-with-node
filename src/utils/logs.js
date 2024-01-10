// logları oluşturur
import fs from "fs"
import path from "path"
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

export const logFile = (filename, data) => {
    const dir = path.join(__dirname, `../logs/${filename}.json`);
    const writeData = JSON.stringify(data, null, 4);
    fs.writeFileSync(dir, writeData);

} 

logFile("test", {
    test:1,
    name: "Can"
});