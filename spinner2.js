let delay = 100;
let chars = '|/-\\|/-\\';

for (let char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);

  delay += 200;
}