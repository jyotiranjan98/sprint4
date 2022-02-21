function storeSearchterm(term) {

    let input = document.getElementById("searchbar")
    input.addEventListener("keypress",(el) => {
      if(el.key=="Enter"){
        let i_val =document.getElementById("searchbar").value;
        localStorage.setItem("search_term", i_val);
        window.location.href="search.html"
      }
    })


}

export default storeSearchterm