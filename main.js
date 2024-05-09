document.getElementById('form-datas').addEventListener('submit', function (event) {
  event.preventDefault(); 
  let data1 = document.getElementById('data1').value;
  let data2 = document.getElementById('data2').value;

  compararDatas(data1, data2);
  calcularIntervalo(data1, data2);
  dataHoraAtual();
});

function compararDatas(data1, data2) {
  let date1 = new Date(data1);
  let date2 = new Date(data2);

  if (date1 < date2) {
    console.log("Data 2 é maior!!! ");
  } else if (date1 > date2) {
    console.log("Data 1 é maior!!!");
  } else {
    console.log("As datas são iguais!!!");
  }
}

function calcularIntervalo(data1, data2) {
  let date1 = new Date(data1);
  let date2 = new Date(data2);

  if (date1 > date2) {
      console.log("Erro: a primeira data não deve ser posterior à segunda data.");
      return;
  }

  let ano1 = date1.getFullYear();
  let mes1 = date1.getMonth();
  let dia1 = date1.getDate();

  let ano2 = date2.getFullYear();
  let mes2 = date2.getMonth();
  let dia2 = date2.getDate();


  let anosDiferenca = ano2 - ano1;

  if (mes2 < mes1 || (mes2 === mes1 && dia2 < dia1)) {
      anosDiferenca--;
  }

  let mesesDiferenca = mes2 - mes1;
  if (mesesDiferenca < 0) {
      mesesDiferenca += 12;
  }

  let diasDiferenca = dia2 - dia1;
  if (diasDiferenca < 0) {
      date2.setMonth(date2.getMonth() - 1);
      diasDiferenca += new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate();
      mesesDiferenca--; 
  }

  console.log("O intervalo entre as datas é de:", anosDiferenca, "anos,", mesesDiferenca, "meses e", diasDiferenca, "dias.");
}

function dataHoraAtual(){
  const data = new Date();

  const hora = data.getHours(); 
  const min = data.getMinutes();

   const dia =String(data.getDate()).padStart(2,'0');
   const mes =String(data.getMonth()+ 1).padStart(2,'0');
   const ano =data.getFullYear();
   const horaData = `${hora}:${min} - ${dia}/${mes}/${ano}.`;

   console.log(horaData);

}