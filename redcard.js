const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalInner = document.getElementById("modalInner");
const modalVideo = document.getElementById("modalVideo");
const videoContainer = document.getElementById("videoContainer");
const closeBtn = document.getElementById("closeBtn");

/* OPEN MODAL */
cards.forEach(card => {
    card.addEventListener("click", () => {

        modalVideo.pause();
        modalVideo.src = "";

        modalImg.src = card.querySelector("img").src;
        modalTitle.textContent = card.dataset.title || "";
        modalText.textContent = card.dataset.text || "";

        if (card.dataset.video) {
            videoContainer.style.display = "block";
            modalVideo.src = card.dataset.video;
            modalVideo.load();
        } else {
            videoContainer.style.display = "none";
        }

        modal.classList.add("active");
        modalInner.classList.remove("flipped");
    });
});

/* FLIP CARD (TAP / CLICK) */
modalInner.addEventListener("click", (e) => {
    if (e.target.closest("video") || e.target === closeBtn) return;

    e.stopPropagation();

    modalInner.classList.toggle("flipped");

    if (modalInner.classList.contains("flipped") && modalVideo.src) {
        modalVideo.play().catch(() => {});
    } else {
        modalVideo.pause();
    }
});

/* CLOSE MODAL */
function closeModal(e) {
    if (e) e.stopPropagation();

    modal.classList.remove("active");
    modalInner.classList.remove("flipped");

    modalVideo.pause();
    modalVideo.src = "";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
