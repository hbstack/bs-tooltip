import Tooltip from "js/bootstrap/src/tooltip";

(() => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
        new Tooltip(el)
    })
})()
