const x = 10;

try {
  x = 2;
} catch (err) {
  console.log(`Erro: ${err}`); // returna o erro: "TypeError: Assignment to constant variable."
}
