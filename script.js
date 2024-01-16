// ... Kode lainnya ...

// Fungsi untuk menampilkan slide selanjutnya
function showSlide(slideNumber) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideNumber - 1].style.display = "block";

    // Menambahkan logika untuk tombol "Pencet sini cepetan"
    if (slideNumber === 1) {
        var button = document.getElementById("button-box");
        button.style.display = "block"; // Menampilkan kotak
    } else {
        var button = document.getElementById("button-box");
        button.style.display = "none"; // Menyembunyikan kotak
    }
}
