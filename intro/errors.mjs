import { readFile } from 'fs';

process.on('uncaughtException', (e) => {
    console.error(e);
});

try {
    const result = readFile(new URL('index.html', import.meta.url), 'utf-8');
} catch (e) {
    // console.error(e);
}

const result = readFile(new URL('index.htm', import.meta.url), 'utf-8');
console.log('continued');