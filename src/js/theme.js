const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
localStorage.setItem('theme', JSON.stringify(theme));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs ={ 
    input: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  
}

refs.input.addEventListener('change', switchTheme)
function switchTheme(event) { 
    event.preventDefault();
    refs.body.classList.add('light-theme') 
    if (event.currentTarget.checked) {
      
        refs.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('Theme', Theme.DARK);
    } else { refs.body.classList.replace('dark-theme','light-theme', );    localStorage.setItem('Theme', Theme.LIGHT);  } 
}

const saveTheme = localStorage.getItem("Theme");
if (saveTheme === Theme.DARK) { 
    refs.body.classList.add('dark-theme')
    refs.input.checked = true; 
    }
