let equal_press = 0;
let keyInput = document.querySelectorAll(".input-btn");
let screen_input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  screen_input.value = "";
};

document.addEventListener("keydown", (event) => {
  const keys = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8",
    "9", "/", "x",
    "-",
  ];
  if (keys.includes(event.key)) {
    if (equal_press == 1) {
      screen_input.value = event.key;
      equal_press = 0;
    } else {
      screen_input.value += event.key;
    }
  }
  if (event.key == "Backspace") erase.click();
  if (event.key == "Enter") equal.click();
  if (event.key == "c") clear.click();
});

document.addEventListener("keypress", (event) => {
  const keys = ["+", "*"];
  if (keys.includes(event.key)) screen_input.value += event.key;
});

keyInput.forEach((keybtn) => {
  keybtn.addEventListener("click", () => {
    if (equal_press == 1) {
      screen_input.value = keybtn.value;
      equal_press = 0;
    } else {
      screen_input.value += keybtn.value;
    }
  });
});

equal.addEventListener("click", () => {
  equal_press = 1;
  let input = screen_input.value;
  if (input.includes("x")) input = input.replace("x", "*");

  try {
    let solution = eval(input);
    Number.isInteger(solution)
      ? (screen_input.value = solution.toLocaleString())
      : (screen_input.value = solution.toFixed(2));
  } catch (err) {
    alert("invalid input");
  }
});

clear.addEventListener("click", () => {
  screen_input.value = "";
});

erase.addEventListener("click", () => {
  screen_input.value = screen_input.value.substr(
    0,
    screen_input.value.length - 1
  );
});
