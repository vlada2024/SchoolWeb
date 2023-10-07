
// подписываемся на события страницы, когда она полностью будет загружена
window.addEventListener("load", onWindowLoad);

// имя ключа в локальном хранилищи браузера, где будет хранится имя текущей пользовательсткой темы
const USER_THEME = "user-theme2";
const LIGHT = "light";
const DARK = "dark";
const AUTO = "auto";
const DEFAULT_THEME = LIGHT;
const BUTTON_ACTIVE = "active";
const DARK_THEME_BUTTON =  ".indicator-image-dark";
const LIGHT_THEME_BUTTON =  ".indicator-image-light";
const AUTO_THEME_BUTTON =  ".indicator-image-auto";
const EMPTY_THEME_BUTTON =  ".indicator-image-empty";

function onWindowLoad() {
  
  let savedUserTheme = getThemeFromStorage();

  const themes = [LIGHT, DARK, AUTO];
  const htmlBlock = document.documentElement;
  
  const darkThemeButton = document.querySelector(DARK_THEME_BUTTON)
  const lightThemeButton = document.querySelector(LIGHT_THEME_BUTTON)
  const autoThemeButton = document.querySelector(AUTO_THEME_BUTTON)
  const emptyThemeButton = document.querySelector(EMPTY_THEME_BUTTON)

  const buttons = [lightThemeButton, darkThemeButton, autoThemeButton];

  function getThemeFromStorage() {
    return dataStorage.loadValue(USER_THEME);
  }

  function switchIndicator(currentTheme, nextTheme) {
    
    if(currentTheme == nextTheme) {
      return
    }

    if(htmlBlock.classList.contains(currentTheme))
      htmlBlock.classList.remove(currentTheme);
    
    let systemTheme = "";
    if(nextTheme == AUTO) {
      systemTheme = getSystemTheme();
      htmlBlock.classList.remove(currentTheme);
      htmlBlock.classList.add(systemTheme);
      onAutoThemeButton(false);
    }
    
    for(let i = 0; i < buttons.length; i++) {
      if(nextTheme == AUTO) {

          if(themes[i] != systemTheme) {
            buttons[i].classList.remove(BUTTON_ACTIVE);
          } else {
            buttons[i].classList.add(BUTTON_ACTIVE);
          }

      } else {

        if(themes[i] == nextTheme) {
            buttons[i].classList.add(BUTTON_ACTIVE);
            htmlBlock.classList.add(nextTheme);
        }

        if(themes[i] == currentTheme) {
          buttons[i].classList.remove(BUTTON_ACTIVE);
          //htmlBlock.classList.remove(currentTheme);
        }

      }
    }

  }

  function onAutoThemeButton(activate) {

    if(activate) {

      if(!autoThemeButton.classList.contains(BUTTON_ACTIVE))
          autoThemeButton.classList.add(BUTTON_ACTIVE);
          
      if(!emptyThemeButton.classList.contains(BUTTON_ACTIVE))
          emptyThemeButton.classList.add(BUTTON_ACTIVE);


    } else {

      if(autoThemeButton.classList.contains(BUTTON_ACTIVE))
          autoThemeButton.classList.remove(BUTTON_ACTIVE);

      if(emptyThemeButton.classList.contains(BUTTON_ACTIVE))
          emptyThemeButton.classList.remove(BUTTON_ACTIVE);

    }
    
  }

  function getSystemTheme() {
    if(window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
    }
    return DEFAULT_THEME;
  }

  


  function changeTheme(currentTheme, nextTheme, saveThemeToStorage = false) {
    
    switchIndicator(currentTheme, nextTheme);
    
    if(saveThemeToStorage) {
        dataStorage.saveValue(USER_THEME, nextTheme)
        savedUserTheme = nextTheme;
    }

    onAutoThemeButton(savedUserTheme);
  }

  function initThemeClass () {


    if(autoThemeButton) {
    
      autoThemeButton.addEventListener("click", e => {
          dataStorage.saveValue(USER_THEME, '');
          // reset to system theme!!
          const prevTheme = savedUserTheme;
          savedUserTheme = undefined;
          //if(!prevTheme)
          //  console.warn("prevTheme is NULL!!")
          changeTheme(prevTheme, AUTO, false);
      });
  
    } else {
      console.error("autoThemeButton not found!")
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", e => {
      const themeFromStorage = dataStorage.loadValue(USER_THEME)
      if(!themeFromStorage) {
         let systemTheme = getSystemTheme();
         changeTheme(systemTheme == DARK ? LIGHT : DARK, systemTheme, false);
      }
    });


   

   

    for(let i = 0; i < buttons.length; i++) {

      if(themes[i] == AUTO)
        continue;

      button = buttons[i];
      if(button) {
        
        let theme = themes[i];
        button.addEventListener("click", e => {
         

          onAutoThemeButton(true);

          const themeInStorage = getThemeFromStorage();
          console.warn("theme!!!  --->>> ", themeInStorage, theme);
          changeTheme(themeInStorage ? themeInStorage : getSystemTheme(), theme, true);
        })
    
      } else {
        console.error("button, " + themes[i] + " not found!")
      }
  
    }

    if(savedUserTheme) {
      changeTheme("", savedUserTheme, false)
    } else {
      changeTheme(AUTO, getSystemTheme(), false)
    }
  }



  

  initThemeClass();

  
}

