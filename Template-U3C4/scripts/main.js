async function apiCall(url) {
    //add api call logic here
try{
    let ans=await fetch (url)
    let articles = await ans.json()
    return articles
}
catch(err){
    console.log("err:", err)
}

}


function appendArticles(articles, main) {

    //add append logic here
articles.forEach((elem)=> {
    let div =document.createElement("div")
    let h=document.createElement("h2")
    h.textContent= elem.title
    let img=document.createElement("img")
    img.src=elem.urlToImage
    let cont=document.createElement("p")
    cont.textContent=`Cont: ${elem.content}`

    div.append(h,img,cont)
    div.onclick=() =>{
        localStorage.setItem("article",JSON.stringify(elem))
        window.location.href = "news.html"
    }
    main.append(div)
})

}

export { apiCall, appendArticles }