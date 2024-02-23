function getId(element) {
  return document.getElementById(element);
}

function getElements(selector) {
  document.querySelectorAll(selector);
}

// console.log(getId('certificate'));
// console.log(getElements('a.button'));
// getElements('a.button').forEach(button => button.classList.add('whateverclass'));

// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  // check for buttons exist
  // if (getElements('.button') !== null) {
  //   let buttons = getElements('.button');
  //   buttons.forEach(button => button.addEventListener('click', processForm))
  // }

  // optionally update when fields update
  // tbd
  getId('name').addEventListener('change', function (eventData) {
    let nameOutput = document.getElementById('nameOutput');
    nameOutput.innerText = eventData.target.value;
  });

  getId('type').addEventListener('change', function (eventData) {
    let nameOutput = document.getElementById('nameOutput');
    // let info = getId('info');
    // nameOutput.innerText = eventData.target.value;
    // info.innerText = eventData.target.value;
    changeCert(eventData.target.value);
  });

  // process form Data
  document.getElementById("myForm").addEventListener("submit", function (eventData) {
    eventData.preventDefault();
    console.log(eventData.target);
    var formData = new FormData(eventData.target);
    formData = Object.fromEntries;
    // output as an object
    console.log(Object.fromEntries(formData));

    // ...or iterate through the name-value pairs
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // }
  });

  // Log readiness to console
  console.log("Ready");

  function changeCert(value) {
    let certificate = document.getElementById('certificate');
    certificate.classList = ""; // clear classes on each function call
    switch (value) {
      case 'A':
        certificate.classList.add('cactuar');
        break;
      case 'B':
        certificate.classList.add('axel');
        break;
      case 'C':
        certificate.classList.add('deuce');
        break;
    }
  }

  let theDate = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"numeric", day:"numeric"})
  let dateBox = getId('theDate');
  dateBox.innerText= theDate;
});


function processForm(form) {

}