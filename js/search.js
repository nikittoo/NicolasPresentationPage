// Search functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('form[role="search"]');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = e.target.querySelector('input[type="search"]').value.toLowerCase().trim();
      let targetPage = '';

      if (query.includes('sobre') || query.includes('mi') || query.includes('about')) {
        targetPage = 'Pages/Page1.html';
      } else if (query.includes('equipo') || query.includes('team')) {
        targetPage = 'Pages/Page2.html';
      } else if (query.includes('aspiraciones') || query.includes('aspirations')) {
        targetPage = 'Pages/Page3.html';
      } else if (query.includes('proyectos') || query.includes('projects')) {
        targetPage = 'Pages/Page4.html';
      } else if (query.includes('bootstrap')) {
        targetPage = 'Pages/Page5.html';
      } else {
        alert('No se encontraron resultados para: ' + query);
        return;
      }

      // Adjust path if on a page in Pages/
      const currentPath = window.location.pathname;
      if (currentPath.includes('/Pages/')) {
        targetPage = targetPage.replace('Pages/', '');
      }

      window.location.href = targetPage;
    });
  }
});