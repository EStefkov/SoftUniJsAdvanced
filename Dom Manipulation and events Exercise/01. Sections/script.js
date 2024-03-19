function create(words) {

   const output = document.getElementById('content');
 
   words.forEach(word => {
     output.appendChild(createArticle(word));
   });
 
   function createArticle(text) {
     const pEl = e('p', text);
     pEl.style.display = 'none';
 
     const divEl = е('div', pEl);
     divEl.addEventListener('click', () => {
       pEl.style.display = '';
     });
 
     return divEl;
   }
 
   function e(type, content) {
     const result = document.createElement(type);
 
     if (typeof content == 'string') {
       result.textContent = content;
     } else {
       result.appendChild(content);
     }
     return result;
   }
 
 }
 