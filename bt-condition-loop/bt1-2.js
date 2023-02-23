
let a = "123";
function printCreen(a) {
    return document.write(a);
}

for (let i = 0; i < 10; i++) {
    document.write(` ${printCreen(a)} - `)
}