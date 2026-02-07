const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = menuBtn.querySelector("i"); // Untuk ganti icon

menuBtn.addEventListener("click", () => {
    // Cek apakah menu sedang terbuka
    const isOpen = mobileMenu.classList.contains("translate-y-0");

    if (isOpen) {
        // Tutup Menu
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
        // Balikkan icon ke bars
        menuIcon.classList.replace("fa-times", "fa-bars");
    } else {
        // Buka Menu
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
        // Ganti icon ke "X" (tanda tutup)
        menuIcon.classList.replace("fa-bars", "fa-times");
    }
});

// Fungsi Pesan WA tetap sama...
function pesanWA(produk) {
    const noWA = "6285648783485";
    const pesan = encodeURIComponent(`Halo kak, saya mau pesan ${produk}`);
    window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
}

function HubungiWa() {
  const noWA = "6285648783485";
  const pesan = encodeURIComponent(`Halo kak, saya mau pesan`);
  window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
}
