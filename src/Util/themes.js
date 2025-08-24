function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function keepTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    if (storedTheme === 'theme-dark') {
      setTheme('theme-dark');
    } else if (storedTheme === 'theme-light') {
      setTheme('theme-light')
    }
  } else {
    setTheme('theme-dark')
  }
}

module.exports = { setTheme, keepTheme }