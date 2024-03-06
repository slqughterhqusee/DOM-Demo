function getId(element) {
  return document.getElementById(element);
}

function getElements(selector) {
  document.querySelectorAll(selector);
}


// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  getId('name').addEventListener('change', function (eventData) {
    let nameOutput = document.getElementById('nameOutput');
    nameOutput.innerText = eventData.target.value;
  });

  getId('type').addEventListener('change', function (eventData) {
    let nameOutput = document.getElementById('nameOutput');
    changeCert(eventData.target.value);
  });

  // process form Data
  document.getElementById("myForm").addEventListener("submit", function (eventData) {
    eventData.preventDefault();
    console.log(eventData.target);
    var formData = new FormData(eventData.target);
    formData = Object.fromEntries;
    console.log(Object.fromEntries(formData));
  });

  

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

// Log readiness to console
  console.log("Ready");

function processForm(form) {

}