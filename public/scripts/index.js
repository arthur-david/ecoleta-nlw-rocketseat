function hideSearch() {
    const modalHide = document.querySelector("#modal")

    modalHide.classList.toggle("hide")
}

const buttonSearch = document.querySelector("#page-home main a")

buttonSearch.addEventListener("click", hideSearch)

const closeSearch = document.querySelector("#modal .header a")

closeSearch.addEventListener("click", hideSearch)