

var dataStorage = (function() {

    const saveValue = (key, value) => {
        localStorage.setItem(key, value);
    }

    const loadValue = (key, defaultValue) => {
        const value = localStorage.getItem(key);
        return value ? value : defaultValue;
    }

    return {
        saveValue: saveValue,
        loadValue: loadValue,
      } 
})();
  
