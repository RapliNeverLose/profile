/* ===== Smooth Scroll untuk Navbar ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===== Modal Preview Sertifikat ===== */
const certImages = document.querySelectorAll('#certificates img');
const modal = document.createElement('div');
modal.classList.add(
  'fixed', 'inset-0', 'bg-black', 'bg-opacity-70', 'hidden',
  'flex', 'items-center', 'justify-center', 'z-50'
);
modal.innerHTML = `
  <div class="relative max-w-3xl w-full p-4">
    <span id="closeModal" 
          class="absolute top-2 right-4 text-white text-3xl cursor-pointer">&times;</span>
    <img id="modalImg" src="" class="rounded-lg max-h-[80vh] mx-auto shadow-lg">
  </div>
`;
document.body.appendChild(modal);

certImages.forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modalImg').src = img.src;
    modal.classList.remove('hidden');
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  modal.classList.add('hidden');
});

/* ===== Dark Mode Toggle Manual ===== */
const darkToggle = document.createElement('button');
darkToggle.innerText = "🌙/☀️";
darkToggle.className = "fixed bottom-5 right-5 bg-gray-700 text-white px-4 py-2 rounded-full shadow hover:bg-gray-800";
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle("dark-mode");
});
