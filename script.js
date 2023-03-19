let pageNo = 1;
let listItem = document.getElementById("show");
let page = document.querySelector('#pageNumber')
function Display(pageNumber) {
    let url = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            listItem.innerText = ""
            data.forEach(element => {
                let li = document.createElement('li')
                li.textContent = element.title;
                listItem.append(li);
                page.innerHTML = `Page Number ${pageNumber}`
            });
        })
        .catch((err) => console.log(err.message))
}
Display(pageNo)
function NextBtn() {
    pageNo++
    Display(pageNo)
}
function PrevBtn() {
    if (pageNo > 1) {
        pageNo--
        Display(pageNo)
    }
}