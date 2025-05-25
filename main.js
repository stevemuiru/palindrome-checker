const checkBtn = document.getElementById('check-btn');
const inputBtn = document.getElementById('text-input');
const result = document.getElementById('result')


checkBtn.addEventListener('click', function () {
  if (inputBtn.value === "") {
    alert ("Please input a value")
  } else {
    const normalStr = inputBtn.value.toLowerCase().match(/[a-z0-9]/g).join("");
    const reverseStr = normalStr.split("").reverse().join("")

    if (normalStr === reverseStr) {
      result.innerText = `${inputBtn.value} is a palindrome`;
    } else {
      result.innerText = `${inputBtn.value} is not a palindrome`;
    }
  }
})