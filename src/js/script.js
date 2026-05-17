// Destacar link ativo no menu
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = '#d4af37';
    link.style.fontWeight = 'bold';
  }
});

// Envio do formulário de contato
const form = document.querySelector('.form-contato');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = form.querySelector('input[name="nome"]').value;
    alert('ありがとうございます, ' + nome + '! Sua mensagem foi recebida. A equipe do Kyoto Garden retornará em breve.');
    form.reset();
  });
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
