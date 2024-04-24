let copyCss = (text) => {

  navigator.clipboard.writeText(allData[text].css)

};


let copyJS = (text) => {

  navigator.clipboard.writeText(allData[text].js)

};




let stylesSec = document.querySelector(".styles-sec");

Array.from(allData).forEach((e, i) => {
  let element = `<div class="style">
      <img src="${e.img}" alt="style 1">
      <p>${e.name}</p>
      
      <div class="copy">
      
        <button onClick="copyCss(${i})"><i class="fa-brands fa-css3-alt"></i> CSS Code <i class="fa-regular fa-clipboard text-light"></i></button>
        
        
        
        <button onClick="copyJS(${i})"><i class="fa-brands fa-js"></i> JS Code <i class="fa-regular fa-clipboard text-light"></i></button>
      </div>
    </div>`;
  stylesSec.innerHTML += element;
});




let buttons = document.querySelector(".styles-sec").querySelectorAll("button")

Array.from(buttons).forEach((e) => {

  e.addEventListener("click", () => {
    let store = e.innerHTML
    e.innerHTML = `<i class="fa-solid fa-check"></i> Copied`


    setTimeout(() => {
      e.innerHTML = store
    }, 2000)


  })



})