function getId(element){
  return document.getElementById(element);
}

function getElements(selector){
  document.querySelectorAll(selector);
}

console.log(getId('certificate'));
console.log(getElements('a.button'));
getElements('a.button').forEach(button => button.classList.add('whateverclass'));

// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( getElements('.button') !== null) {
        let buttons = getElements('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    getId('name').addEventListener('change', function (eventData) {
      let nameOutput = document.getElementById('nameOutput');
      nameOutput.innerText = eventData.target.value;
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();
      
        var formData = new FormData(form);
        // output as an object
        console.log(Object.fromEntries(formData));
      
        // ...or iterate through the name-value pairs
        for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
      });
    // Log readiness to console
    console.log("Ready");
});


function processForm(form){

}