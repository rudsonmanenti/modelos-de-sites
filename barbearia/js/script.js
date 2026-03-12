 // Atualiza o ano automaticamente no rodapé
    document.getElementById('year').textContent = new Date().getFullYear();


 const hamb = document.getElementById('hamb');
  const nav = document.getElementById('nav');

  hamb.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamb.classList.toggle('open'); // adiciona classe ao botão
  });

  document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamb.classList.remove('open'); // volta o ícone para ☰
    });
  });

