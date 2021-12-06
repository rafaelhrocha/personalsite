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
        
    
        var rep1 = document.querySelector("#rep1")
        var rep2 = document.querySelector("#rep2")
        var rep3 = document.querySelector("#rep3")

        rep1.innerHTML = res[0].name
        rep2.innerHTML = res[1].name
        rep3.innerHTML = res[3].name

        
        var rep1link = document.querySelector("#rep1link")
        var rep2link = document.querySelector("#rep2link")
        var rep3link = document.querySelector("#rep3link")

        rep1link.innerHTML = res[0].html_url
        rep2link.innerHTML = res[1].html_url
        rep3link.innerHTML = res[3].html_url

        var l1 = document.querySelector("#l1")
        var l2 = document.querySelector("#l2")
        var l3 = document.querySelector("#l3")

        l1.innerHTML = res[0].language
        l2.innerHTML = res[1].language
        l3.innerHTML = res[3].language
    }))

    var url_flw = res.followers_url
    fetch(url_flw).then(res => res.json().then(res => {


        var fotoflw = document.querySelector("#imgflw1")
        fotoflw.setAttribute("src",res[0].avatar_url)

        var login = document.querySelector("#loginflw1")
        login.innerHTML = res[0].login

        var fotoflw = document.querySelector("#imgflw2")
        fotoflw.setAttribute("src",res[1].avatar_url)

        var login = document.querySelector("#loginflw2")
        login.innerHTML = res[1].login

        var fotoflw = document.querySelector("#imgflw3")
        fotoflw.setAttribute("src",res[2].avatar_url)

        var login = document.querySelector("#loginflw3")
        login.innerHTML = res[2].login

        

    }))

    

}))


