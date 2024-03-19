function search() {
  
   let word = document.querySelectorAll('#towns>li');
   let arrr = [...word];
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');
   let arr= [];
   let sum=0;
   for (const iterator of word) {
      if ((iterator.textContent).toLowerCase().includes(input.toLocaleLowerCase())){
         iterator.style.fontWeight='bold';
         iterator.style.textDecoration='underline';
         sum++;
      }else {
         iterator.style.fontWeight=' ';
         iterator.style.textDecoration='none'
      }
   }

  
   result.textContent = `${sum}`;

}
