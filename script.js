const namesArray = [] // array to store names

function addName () {
  const nameInput = document.getElementById('nameInput') // Get the input element
  const name = nameInput.value.trim() 

  if (name !== '') {
    // make sure the name is not empty
    namesArray.push(name) // Add the name 
    displayNames() // 

    nameInput.value = '' // Clears the input box after you add the name
    
} else {
    alert('Not a Valid Name') // Show an alert if the name is empty
  }
}
  