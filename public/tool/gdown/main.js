const input = document.querySelector("#gdshare")
const btn = document.querySelector("#gen")
const text = document.querySelector("textarea")

let gdout = document.querySelector("#gd-out")

const cp = document.querySelector("#cp")

function getFileId(url) {
  const regex = /\/d\/(.+?)\/view/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}



btn.addEventListener("click", () => {

  if (input.value != "") {
    const url = input.value
    const fileId = getFileId(url);


    if (fileId == null) {
      alert("invalid Google Drive Share Link.")
      input.value = ""
      gdout.style.display = "none"
    }

    else {
      text.value = `https://drive.google.com/uc?id=${fileId}`
      gdout.style.display = "flex"
      input.value = null
    }




  }



})



cp.addEventListener("click", () => {
  navigator.clipboard.writeText(text.value)


  cp.innerHTML = `<i class="fa-solid fa-check"></i>`

  setInterval(() => {
    cp.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`
  }, 2000)




})