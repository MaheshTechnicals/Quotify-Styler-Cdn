let allLogs = document.querySelector(".allLogs")

let getChangeLogs = async () => {

  let owner = "MaheshTechnicals"
  let repo = "Quotify-Styler-Cdn"

  let res = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`)
  let data = await res.json()
  allLogs.innerHTML = ""

  await Array.from(data).forEach((e) => {

    let name = e.name
    let description = e.body
    let time = e.created_at.slice(0, 10)


    let element = `<div class="log">
        <h4 class="mb-3">${name}</h4>
        <p class="mb-5 text-info"><i class="fa-regular fa-clock text-white"></i> ${time}</p>
        <pre class="text-light" >${description}</pre>
      </div>`

    allLogs.innerHTML += element

  })




}

getChangeLogs()