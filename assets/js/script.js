const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");


const relogio = setInterval(() => {
   // inicializando a variável para o tipo data
   // para que seja possivel pegar a data atual

   // variável que guarda a data atual
   let dateToday = new Date();

   // variáveis com os valores das horas, minutos e segundos
   let hr = dateToday.getHours();
   let min = dateToday.getMinutes();
   let secun = dateToday.getSeconds();


   /* 
   Verificação para ver se está durante o dia ou noite
   exemplo:
   Dia = 09
   Noite = 21
   */
   if (hr < 10) {
      hr = '0' + hr;
   } else if (min < 10) {
      min = '0' + min;
   } else if (secun < 10) {
      secun = '0' + secun;
   }

   // como está sendo usando um span
   // o conteúdo não tem como pegar com o value
   // ai o conteúdo de texto vai ser exatamente o valor
   // das horas que foram capturadas anteriormente.
   horas.textContent = hr;
   minutos.textContent = min;
   segundos.textContent = secun;
});