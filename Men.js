  
// new  idia start  
  
  var a;
  var p;
  var f;
  
  var b1 = 0;
  var b2 = 1;
  var b3 = 2;
  var b4 = 3;
  var b5 = 4;
  var b6 = 5;
  var b7 = 6;
  var b8 = 7;
  var b9 = 8;
  var b10 = 9;
 
 
 
  for (var o = 0; o < 10; o++) {
  
  
    if (o == b1) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoU34G2eV7TXMtizhE3bhNIYAm7RBUFBDpfg&usqp=CAU';
  
      p = 'perfect Two';
      
      f = 'ta(q)';
    }
  
    if (o == b2) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhsASSwzUrebQWELM0_hYJiCQu4otCS5Jwg&usqp=CAU';
  
      p = 'thunder ';
      
      f = 'ta(w)';
    }
  
    if (o == b3) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkU5xZX5cUlsLOZbihs4nf1E9W881ynXJKvw&usqp=CAU';
  
      p = 'meduza';
      
      f = 'ta(e)';
    }
  
    if (o == b4) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9FEWVd6RfCCxAPmosXREZAiQQVMX7EN-nQ&usqp=CAU';
  
      p = 'rauf and faik';
      
      f = 'ta(r)';
    }
  
    if (o == b5) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYsC0d5kwUhVSozffB0efnjRXkC5mc5VTyQ&usqp=CAU';
  
      p = 'Enemy';
      
      f = 'ta(t)';
    }
  
    if (o == b6) {
      a = 'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/2f/2c/55/2f2c551e-7f7f-eedb-a096-b668307bd302/0.jpg/200x200bb.jpg';
  
      p = 'Dame';
      
      f = 'ta(y)';
    }
  
   if (o == b7) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVYTqguGJuPemxB_BFwLP6RqCxMSdhiKi4Q&usqp=CAU';
  
      p = 'Roses';
      
      f = 'ta(u)';
    }
  
    if (o == b8) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHuL0FN4nK17HmWdc_mY-9NqsMh8AoabCNw&usqp=CAU';
  
      p = 'Go Down Deh';
      
      f = 'ta(i)';
    }
  
    if (o == b9) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToh0IiwwK8HKH9r-VzjWIbonQW6mIvPfpnOQ&usqp=CAU';
  
      p = 'Awara Hoon';
  
      f = 'ta(o)';
    }
  
    if (o == b10) {
      a = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaf4H-ccU6H8TtkdlAA-mNCqY-QFnl9gM_BA&usqp=CAU';
  
      p = 'Fed Up Slowed';
  
      f = 'ta(p)';
    }
  
  
  
  
    for (var i = 0; i < 1; i++) {
  
  
  
      var box = document.getElementById('card_box');
  
      box.innerHTML += `
  <div class="c_box" onclick="${f}">
      <img src="${a}" alt=""/>
      <p>${p}</p>
    </div>`
  
  
  
    }
  
  
  
  }
  
  
  