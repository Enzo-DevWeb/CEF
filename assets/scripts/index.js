const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

let userData = null;

fetch("https://api.github.com/users/github-john-doe")
    .then(res => res.json())
    .then(data => {
        userData = data;
    });

openBtn.addEventListener("click", () => {
    if (!userData) return;

    document.getElementById("name").textContent = userData.name;
    document.getElementById("avatar").src = userData.avatar_url;
    document.getElementById("bio").textContent = userData.bio;
    document.getElementById("followers").textContent = "Followers : " + userData.followers;
    document.getElementById("repos").textContent = "Repos publics : " + userData.public_repos;

    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
});