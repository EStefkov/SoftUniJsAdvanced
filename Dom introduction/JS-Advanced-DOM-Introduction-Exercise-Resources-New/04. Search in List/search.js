function search() {
   const listItems = document.querySelectorAll('#towns>li'); //#id .class
   const input = document.querySelector('input').value;
   const result = document.getElementById('result');
   let sum =0;

   for (const li of listItems) {
      if ((li.textContent).toLowerCase().includes(input.toLowerCase()) &&input!=='' ) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++
      }else {
         li.style.fontWeight='';
         li.style.textDecoration = '';
      }

   }
   result.textContent = `${sum} matches found`
}
