let empleo = document.querySelector("#empleo")
let horas = document.querySelector("#horas")
let anti = document.querySelector("#anti")

empleo.onclick = () => { calcular() }
horas.oninput = () => { calcular() }
anti.oninput = () => { calcular() }

const calcular = () => {
  document.querySelector("#vhoras").innerHTML = horas.value;
  document.querySelector("#vanti").innerHTML = anti.value;
  let e = empleo.value;
  let h = parseFloat(horas.value)
  let a = parseFloat(anti.value)
  let sxh = 0;
  switch (e) {
    case "gerente":
      sxh = 200;
      break;
    case "jefe":
      sxh = 150;
      break;
    case "cajero":
      sxh = 100;
      break;
  }
  let sb = 0;
  let extra = 0
  if (h > 40) {
    sb = 40 * sxh
    extra = (h - 40) * 3 * sxh;
  } else {
    sb = h * sxh;
  }

  let p = document.querySelector("#perce")
  p.innerHTML = `<table class="w-100">
 <tr>
 <td>SUELDO BASE</td>
 <td>$ ${sb.toFixed(2)}</td>
 </tr>
 
  <tr>
 <td>ANTIGUEDAD</td>
 <td>$ ${(a*200).toFixed(2)}</td>
 </tr>
 
  <tr>
  <td>ESTIMULO</td>
  <td>$ ${(sb*0.02).toFixed(2)}</td>
  </tr>
  
   <tr>
   <td>CANASTA BÁSICA</td>
   <td>$ ${(sb*0.045).toFixed(2)}</td>
   </tr>
 
   <tr>
   <td>EXTRA</td>
   <td>$ ${(sb*0.045).toFixed(2)}</td>
   </tr>
<tr>
   <td class="bg-warning text-white h2">TOTAL PERCEPCIONES</td>
   <td class="h2">$ ${(sb+(sb*0.02)+(sb*0.045)+extra+(a*200)).toFixed(2)}</td>
 </tr>
 </table>
 `
 let d = document.querySelector("#dedu");
 d.innerHTML=`<table class="w-100">
<tr>
<td>ISR</td>
<td> $ ${(sb*1.16).toFixed(2)}</td>
</tr>

<tr>
<td>SALUD</td>
<td> $ ${(sb*0.0456).toFixed(2)}</td>
</tr>

<tr>
<td>SINDICATO</td>
<td> $ ${(sb*0.011).toFixed(2)}</td>
</tr>
 
<tr>
<td>AFORE</td>
<td> $ ${(sb*0.061).toFixed(2)}</td>
</tr>
 
<tr>
<td>CAP. IND</td>
<td> $ ${(sb*0.014).toFixed(2)}</td>
</tr>

<tr>
<td class="bg-warning text-white h2">TOTAL DEDUCCION</td>
<td class="h2"> $ ${((sb*1.16)+(sb*0.0465)+(sb*0.01)+(sb*0.061)+(sb*0.014)).toFixed(2)}</td>
</tr>
 
 </table>
 ` 

 let n =document.querySelector("#neto");
 n.innerHTML=`<table class="w-100">
 <tr>
 <td class="h1">$ ${((sb+(sb*0.02)+(sb*0.045)+extra+(a*200))-((sb*1.16)+(sb*0.0465)+(sb*0.01)+(sb*0.061)+(sb*0.014))).toFixed(2)}</td> 
 <tr>
 <table>
 `
}

document.querySelector("#reset").onclick=()=>{
  empleo.value="gerente"
  horas.value=1;
  anti.value=1;
  calcular();
}