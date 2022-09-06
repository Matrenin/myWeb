let boxPeopleEls = document.querySelectorAll(".quote__box-people");

document.querySelector(".quote__link").addEventListener("click", event => {
    if (!event.target.classList.contains("quote__btn")) {
        return;
    }
    for (let el of boxPeopleEls) {
        if (event.target.dataset.quote == el.dataset.quote) {
            el.classList.remove("hidden-quote");
        } else {
            el.classList.add("hidden-quote");
        }
    }
});