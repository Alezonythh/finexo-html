function showDetails(package) {
    const details = {
        basic: "Fitur: Responsive design, 3 halaman (Home, About, Contact). Waktu pengerjaan: 1 minggu.",
        standard: "Fitur: Responsive design, 5 halaman (Home, About, Contact, Blog, Gallery). Waktu pengerjaan: 2 minggu.",
        premium: "Fitur: Responsive design, 10+ halaman, e-commerce, SEO, dan support 1 tahun. Waktu pengerjaan: 4 minggu."
    };

    // Hide all details
    document.querySelectorAll('.details').forEach(div => {
        div.classList.remove('show');
    });

    // Show selected details with animation
    const detailDiv = document.getElementById(`details-${package}`);
    detailDiv.innerText = details[package];
    detailDiv.classList.add('show');
}