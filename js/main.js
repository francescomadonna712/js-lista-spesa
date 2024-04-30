const spesa = [
    'pane', 'acqua', 'pasta', 'farina', 
    'prosciutto', 'formaggio', 'fanta', 'sugo', 
  ];


  let i = 0;

while (i < spesa.length){
  prodotti = spesa[i];
  document.getElementById('list').innerHTML +=`<li> ${prodotti} </li>`;
  console.log(spesa[i]);
  i++;
}