// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Set dark mode as default
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply the theme
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    // Dark mode is default
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Update the button icon
    if (document.body.classList.contains('light-theme')) {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // Add target="_blank" to external links
  document.querySelectorAll('a').forEach(link => {
    if (link.hostname !== window.location.hostname && link.hostname !== '') {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
  
  // Apply gradient to post cards on hover
  document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderImage = 'linear-gradient(90deg, var(--gradient-end), var(--gradient-middle), var(--gradient-start)) 1';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.borderImage = 'linear-gradient(90deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end)) 1';
    });
  });
});
