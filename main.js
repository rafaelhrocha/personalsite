fetch("https://api.github.com/users/rafaelhrocha").then(res => res.json().then(res => {
    var elementimg = document.querySelector("#img")
    elementimg.setAttribute("src",res.avatar_url)
    
    var desc = document.querySelector("#desc")
    desc.innerHTML = res.login

    var company = document.querySelector("#company")
    company.innerHTML = res.company

    var followers = document.querySelector("#follow")
    followers.innerHTML = res.followers

    var jsonRepo = res.repos_url
    fetch(jsonRepo).then(res => res.json().then(res => {
        
        console.log(res)

        var rep1 = document.querySelector("#rep1")
        var rep2 = document.querySelector("#rep2")
        var rep3 = document.querySelector("#rep3")

        rep1.innerHTML = res[0].name
        rep2.innerHTML = res[1].name
        rep3.innerHTML = res[2].name

        
        var rep1link = document.querySelector("#rep1link")
        var rep2link = document.querySelector("#rep2link")
        var rep3link = document.querySelector("#rep3link")

        rep1link.innerHTML = res[0].html_url
        rep2link.innerHTML = res[1].html_url
        rep3link.innerHTML = res[2].html_url

    }))

    console.log(res.repos_url)
}))


