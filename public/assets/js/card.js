const comment = document.querySelector("#comment");
const labelComment = document.querySelector(".label-comment");
comment.addEventListener('keypress', (e) => {
    labelComment.innerHTML = "";
})
comment.addEventListener("input", () => {
    const value = comment.value.trim()
    if (value == ""){
        labelComment.innerHTML = "Join the discussion";
    }
})