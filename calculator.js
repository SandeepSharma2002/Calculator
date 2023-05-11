(function () {
  let screen = document.querySelector(".value");
  let buttons = document.querySelectorAll(".o-num");
  let clear = document.querySelector(".o-clear");
  let equal = document.querySelector(".o-equal");
  let back = document.querySelector(".o-back");
  buttons.forEach(function (button1) {
    button1.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (value != "=") screen.value += value;
    });
  });
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Give some value";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
  back.addEventListener("click", function (e) {
    if (screen.value !== "") {
      let string = screen.value;
      screen.value = string.substr(0,string.length-1);
    }
  });
})();
