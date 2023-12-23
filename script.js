let $ = document;

const Header = $.getElementById("h1");
const Input = $.getElementById("input");
const ConvertBtn = $.getElementById("btn");
const ResetBtn = $.getElementById("btn1");
const ChangeBtn = $.getElementById("btn2");
const ResultConvert = $.getElementById("p");

let isFalse = false;
// Change Value
ChangeBtn.addEventListener("click", () => {
  Header.innerHTML = "";
  if (!isFalse) {
    $.title = "°F to °C";
    Header.innerHTML = "Converter °F to °C";
    Input.placeholder = "°F";
    isFalse = true;
  } else {
    $.title = "°C to °F";
    Header.innerHTML = "Converter °C to °F";
    Input.placeholder = "°C";
    isFalse = false;
  }
});

// reset value
ResetBtn.addEventListener("click", () => {
  if (!isFalse) {
    Input.value = "";
    Input.placeholder = "°C";
    $.title = "°C to °F";
    Header.innerHTML = "Converter °C to °F";
    ResultConvert.innerHTML = "";

    isFalse = true;
  } else {
    Input.value = "";
    Input.placeholder = "°C";
    $.title = "°C to °F";
    Header.innerHTML = "Converter °C to °F";
    ResultConvert.innerHTML = "";

    isFalse = false;
  }
});

// Convert Value
ResultConvert.innerHTML = "";
ConvertBtn.addEventListener("click", () => {
  let kk = Number(Input.value);
  if (Input.value === "") {
    ResultConvert.innerHTML = "Please fill in the input";
  } else {
    if (isNaN(kk)) {
      ResultConvert.innerHTML = "Please fill correct value in the input";
    } else {
      if (Input.placeholder === "°C") {
        let ResultF = (Input.value * 9) / 5 + 32;
        ResultConvert.innerHTML = `${Input.value}°C to ${ResultF}°F`;
      } else {
        let ResultC = ((Input.value - 32) * 5) / 9;
        ResultConvert.innerHTML = `${Input.value}°F to ${ResultC.toFixed(3)}°C`;
      }
    }
  }
});
