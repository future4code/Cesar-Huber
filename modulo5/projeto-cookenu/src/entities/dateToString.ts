export function dateToString(date: Date){
      const dia  = date.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (date.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = date.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}