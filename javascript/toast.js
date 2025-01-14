setTimeout(function () {

  let toastAlertMessage = document.getElementById("toastAlertMessage");
  let toastImage = document.getElementById("toastImage");
  let toastFrontMessage = document.getElementById("toastFrontMessage");
  let toastDescriptionMessage = document.getElementById("toastDescriptionMessage");

  console.log("hello");
  function show_toast(isSuccess, message) {
    if (isSuccess == 1) {
      toastImage.src = "../assets/_general/success_tick.svg"
      toastFrontMessage.style.backgroundColor = "green"
    }
    else if (isSuccess == 0) {
      toastImage.src = "../assets/_general/error_cross.svg"
      toastFrontMessage.style.backgroundColor = "red"
    }
    else {
      toastImage.src = "../assets/_general/neutral_exclamation.svg"
      toastFrontMessage.style.backgroundColor = "black"
    }

    toastDescriptionMessage.innerText = " ";
    setTimeout(function () {
      toastDescriptionMessage.innerText = message;
    }, 2000);

    toastAlertMessage.className = "toastPopUp";
    setTimeout(function () {
      toastAlertMessage.className = toastAlertMessage.className.replace("toastPopUp", "");
    }, 5000);
  }

}, 200);