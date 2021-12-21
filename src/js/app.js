import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  // const button = document.querySelector(".button");
  // button.addEventListener("click", () => {
  //   alert("💣");
  // });
  
    const body = document.querySelector('body');
    const article = document.querySelectorAll('article');
    document.body.addEventListener('onClick',() => {
     for(let i = 0;i <=5;i++){
       const article = document.createElement("article");
       article.classList.add('message');
       document.body.appendChild(article);
     }
     article.forEach(item => {
       item.textContent = 'msg';
     })
     
      })
    
});
