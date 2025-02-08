import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const delay = document.querySelector('input[name="delay"]')
const field = document.querySelector("fieldset");

const btn = document.querySelector("button");

const radio = document.querySelectorAll('input[name="state"]')





btn.addEventListener("click", (e)=> {

e.preventDefault();
let ifOk = false
if (radio[0].checked) {
  ifOk = true; 
} 

const tm = delay.value;

const prm = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (ifOk) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, tm);
});
prm
.then(value => {
    const SuccessText = `✅ Fulfilled promise in ${tm}ms`
    console.log(SuccessText)
    iziToast.show({
      backgroundColor: 'rgba(89, 161, 13, 1)',
      messageColor: `rgba(255, 255, 255, 1)`,
      close: `false`,
      position: "topRight",
      message: SuccessText
});
  })
  .catch(error => {
     const RejectedText = `❌ Rejected promise in ${tm} ms`
    iziToast.show({
      backgroundColor: 'rgba(239, 64, 64, 1)',
      messageColor: `rgba(255, 255, 255, 1)`,
      close: `false`,
      position: "topRight",
      message: RejectedText
});
  });
form.reset()
})






