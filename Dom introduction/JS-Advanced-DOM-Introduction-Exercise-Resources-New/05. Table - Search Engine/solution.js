function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   //  const rows = document.querySelectorAll('tbody tr');

   const body = document.querySelector('tbody');



   function onClick() {
      const input = document.querySelector('#searchField').value.toLowerCase();

      body.innerHtml = Array.from(body.children).map(function selectRow(row) {
         if (row.innerText.toLowerCase().includes(input)) {
            row.setAttribute('class', 'select')
         } else {
            row.removeAttribute('class');
         }
         return row
      });

      // for (let row of rows) {
      //    if (row.textContent.toLowerCase().includes(input)) {
      //       row.setAttribute('class', 'select')
      //    } else {
      //       row.removeAttribute('class');
      //    }
      // }

   }
}