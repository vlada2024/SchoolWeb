/*
// подписываемся на события страницы, когда она полностью будет загружена
window.addEventListener("load", onWindowLoad);

// имя ключа в локальном хранилищи браузера, где будет хранится имя текущей пользовательсткой темы
const USER_THEME = "user-theme";
const LIGHT = "light";
const DARK = "dark";
const DEFAULT_THEME = LIGHT;
const CHANGE_THEME_CONTAINER_BUTTON = ".page__theme-indicator_change";
const RESET_THEME_BUTTON =  ".page__theme-indicator_reset";
const BUTTON_ACTIVE = "active";
const DARK_THEME_IMAGES =  ".indicator-image-dark";
const LIGHT_THEME_IMAGES =  ".indicator-image-light";

const themes = [LIGHT, DARK];
const images = [LIGHT_THEME_IMAGES, DARK_THEME_IMAGES]


function onWindowLoad() {

  const htmlBlock = document.documentElement;
  let savedUserTheme = dataStorage.loadValue(USER_THEME);

  const darkThemeButton = document.querySelector(DARK_THEME_IMAGES)
  const lightThemeButton = document.querySelector(LIGHT_THEME_IMAGES)

  const buttons = [lightThemeButton, darkThemeButton];

  function toggleIndicator(currentTheme) {
    if(currentTheme == DARK) {
      darkThemeButton.classList.remove(BUTTON_ACTIVE);
      lightThemeButton.classList.add(BUTTON_ACTIVE);
    } else if(currentTheme == LIGHT) {
      lightThemeButton.classList.remove(BUTTON_ACTIVE);
      darkThemeButton.classList.add(BUTTON_ACTIVE);
    } else {
      lightThemeButton.classList.remove(BUTTON_ACTIVE);
      darkThemeButton.classList.remove(BUTTON_ACTIVE);
    } 
  }

  function toggleClassTheme(elementWhereClassThemeStored){
    let currentTheme = elementWhereClassThemeStored.classList.contains(LIGHT) ? LIGHT : DARK;

    toggleIndicator(currentTheme);

    if(currentTheme == LIGHT) {
        elementWhereClassThemeStored.classList.remove(LIGHT);
        elementWhereClassThemeStored.classList.add(DARK);
        return DARK;
    } else {
        elementWhereClassThemeStored.classList.remove(DARK);
        elementWhereClassThemeStored.classList.add(LIGHT);
        return LIGHT;
    }
}


  function getSystemTheme() {
    if(window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
    }
    return undefined;
 }

 let systemTheme = getSystemTheme();

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", e => {
    if(!savedUserTheme) {
       changeTheme(false);
    }
  });


  function changeTheme(saveThemeToStorage = false) {
    
    let newTheme = toggleClassTheme(htmlBlock);
    
    if(saveThemeToStorage) {
        dataStorage.saveValue(USER_THEME, newTheme)
    }

    return newTheme;
  }

  function initThemeClass (elementWhereClassThemeStored, resetButton, changeButton) {
    if(savedUserTheme) {
        elementWhereClassThemeStored.classList.add(savedUserTheme);
        if(!resetButton.classList.contains(BUTTON_ACTIVE))
            resetButton.classList.add(BUTTON_ACTIVE);
        


      } else {
      resetButton.classList.remove(BUTTON_ACTIVE);
      systemTheme = getSystemTheme();
        if(systemTheme) {
            if(systemTheme == DARK) {
                elementWhereClassThemeStored.classList.remove(LIGHT);
                if(!elementWhereClassThemeStored.classList.contains(DARK))
                    elementWhereClassThemeStored.classList.add(DARK);
            } else {
                elementWhereClassThemeStored.classList.remove(DARK);
                if(!elementWhereClassThemeStored.classList.contains(LIGHT))
                    elementWhereClassThemeStored.classList.add(LIGHT);
            }
        }
    }

    if((savedUserTheme ?? systemTheme) == DARK) {
      lightThemeButton.classList.remove(BUTTON_ACTIVE);
      darkThemeButton.classList.add(BUTTON_ACTIVE);
    } else if((savedUserTheme ?? systemTheme) == LIGHT) {
      darkThemeButton.classList.remove(BUTTON_ACTIVE);
      lightThemeButton.classList.add(BUTTON_ACTIVE);
    } else {
      lightThemeButton.classList.remove(BUTTON_ACTIVE);
      darkThemeButton.classList.remove(BUTTON_ACTIVE);
    }
}


  const changeThemeButton = document.querySelector(CHANGE_THEME_CONTAINER_BUTTON)
  const resetToSystemThemeButton = document.querySelector(RESET_THEME_BUTTON)

  if(changeThemeButton) {
    
    changeThemeButton.addEventListener("click", e => {
        resetToSystemThemeButton?.classList.add(BUTTON_ACTIVE);
        savedUserTheme = changeTheme(true);
    })

  } else {
    console.error("changeThemeButton, .page_theme--change not found!")
  }



  if(resetToSystemThemeButton) {
    
    resetToSystemThemeButton.addEventListener("click", e => {
        resetToSystemThemeButton.classList.remove(BUTTON_ACTIVE);
        dataStorage.saveValue(USER_THEME, '');

        // reset to system theme!!
        savedUserTheme = undefined;
        initThemeClass(htmlBlock, resetToSystemThemeButton);
    })

  } else {
    console.error("resetToSystemThemeButton, .page_theme--reset not found!")
  }

  initThemeClass(htmlBlock, resetToSystemThemeButton);

  
}

*/