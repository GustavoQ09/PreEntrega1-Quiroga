function verificarNumero(numero) {
  if (numero > 0) {
    alert("El número es positivo.");
  } else if (numero < 0) {
    alert("El número es negativo.");
  } else {
    alert("El número es cero.");
  }
}

const numeroIngresado = parseInt(prompt("Ingrese un número:"));
verificarNumero(numeroIngresado);

/* function imprimirNumeros() {           LO DEJO COMENTADO PARA QUE LUEGO LO PRUEBEN SOLO CON EL CONSOLE LOG, YA QUE AL TENER EL RESTO DE LA ENTREGA, NO LO EJECUTA BIEN Y DA ERROR.
  for (let i = 1; i <= 10; i++) {         TAMPOCO LE PONGO UN ALERT, PARA QUE VEA QUE FUNCIONA, PORQUE EN LA WEB NO ES MUY LINDO DE VER EL ALERT DESDE EL 1 AL 10.
    console.log();(i);
  }
} */

/* imprimirNumeros(); */ 12;

function juegoAdivinaNumero() {
  const numeroSecreto = 28;
  let intentos = 0;
  21;

  while (true) {
    const intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    intentos++;

    if (intento === numeroSecreto) {
      alert(`¡Felicidades! ¡Adivinaste el número en ${intentos} intento(s)!`);
      break;
    } else if (intento < numeroSecreto) {
      alert("El número es mayor. ¡Intenta de nuevo!");
    } else {
      alert("El número es menor. ¡Intenta de nuevo!");
    }
  }
}

juegoAdivinaNumero();
