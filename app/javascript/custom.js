document.addEventListener("turbolinks:load", () => {
    //$('[data-toggle="tooltip"]').tooltip()

    const gra = function(min, max) {
        return Math.random() * (max - min) + min;
    };
    const init = function() {
        let items = document.querySelectorAll(".section");

        for (let i = 0; i < items.length; i++) {
            items[i].style.minHeight ="100vh";
            //items[i].style.background = randomColor({ luminosity: "light" });
        }
        console.log(na)
    
        cssScrollSnapPolyfill();
    };
    init();
  })