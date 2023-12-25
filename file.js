document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault()
   
    const name = document.getElementById('nameInput').value;
    const LastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const checkboxes = document.querySelectorAll('input[name="options"]:checked');
    const selectedOptions = Array.from(checkboxes).map(checkbox => checkbox.value);
    const dropdownValue = document.getElementById('dropdownSelect').value;
    const radioValue = document.querySelector('input[name="radioOptions"]:checked').value;

     console.log('Name:', name)
    console.log('lastname:', LastName)
    console.log('email:', email)
   console.log('Selected Options:', selectedOptions)
    console.log('Dropdown Value:', dropdownValue)
    console.log('Radio Value:', radioValue)

  this.reset();
  
  });
