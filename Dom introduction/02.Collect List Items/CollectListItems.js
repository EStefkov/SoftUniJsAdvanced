function extractText() {
   const liElements = document.getElementsByTagName('li')
   const arr = [...liElements].map(e=>e.textContent)

   const textarea = document.getElementById('result')
   textarea.value = arr.join('\n');
   return arr;
}