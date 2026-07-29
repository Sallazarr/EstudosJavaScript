console.log("Programa iniciado!");

// const timeoutId = setTimeout(() => {
//   console.log("3 segundos se passaram desde que o programa começou");
// }, 1000 * 3);

// clearTimeout(timeoutId);

let seconds = 0;

setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos`);
}, 1000 * 3);
