let selectedColor = ""

    function getColor(color) {
      selectedColor = color
      // Change border color of the active tab's body
      browser.tabs.executeScript({
        code: `document.body.style.border = "5px solid ${selectedColor}";
        console.log(${selectedColor});
        for (let i = 0; i < 10; i++) {
          console.log(i++);
        }  `
      });
    }
    document.querySelectorAll('button').forEach(button => {
      button.onclick = function() {
        getColor(this.dataset.color)
      }
    });
