// Mobile Menu Logic
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("translate-y-0");
    if (isOpen) {
        mobileMenu.classList.remove(
            "translate-y-0",
            "opacity-100",
            "pointer-events-auto"
        );
        mobileMenu.classList.add(
            "-translate-y-full",
            "opacity-0",
            "pointer-events-none"
        );
        menuIcon.classList.replace("fa-times", "fa-bars");
    } else {
        mobileMenu.classList.remove(
            "-translate-y-full",
            "opacity-0",
            "pointer-events-none"
        );
        mobileMenu.classList.add(
            "translate-y-0",
            "opacity-100",
            "pointer-events-auto"
        );
        menuIcon.classList.replace("fa-bars", "fa-times");
    }
});

// WhatsApp Functions
function pesanWA(produk) {
    const noWA = "6285648783485";
    const pesan = encodeURIComponent(
        `Halo Shuut Food, saya mau tanya-tanya tentang paket ${produk}.`
    );
    window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
}

function HubungiWa() {
    const noWA = "6285648783485";
    const pesan = encodeURIComponent(
        `Halo Shuut Food, saya mau konsultasi pemesanan catering.`
    );
    window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
}

// Close mobile menu on click link
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add(
            "-translate-y-full",
            "opacity-0",
            "pointer-events-none"
        );
        menuIcon.classList.replace("fa-times", "fa-bars");
    });
});
