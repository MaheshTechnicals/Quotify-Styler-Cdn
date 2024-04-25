let obj = []

let getChangeLogs = async () => {

  let owner = "MaheshTechnicals"
  let repo = "Quotify-Styler-Cdn"

  let res = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`)
  let data = await res.json()


  await Array.from(data).forEach((e) => {

    let name = e.name
    let description = e.body
    let time = e.created_at.slice(0, 10)
    obj.push({ name, description, time })

  })
  console.log(obj)

}

getChangeLogs()