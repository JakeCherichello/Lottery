const namesArray = [] // array to store names

function addName () {
  const nameInput = document.getElementById('nameInput') // Get the input element
  const name = nameInput.value.trim() 

  if (name !== '') {
    // make sure the name is not empty
    namesArray.push(name) // Add the name 
    displayNames() 

    nameInput.value = '' // Clears the input box after you add the name

} else {
    alert('Not a Valid Name') // Show an alert if the name is empty
  }
}
  
// Function to display names in the list
function displayNames () {
    const nameList = document.getElementById('nameList') 
  nameList.innerHTML = '' // Clear the last list

  for (let i = 0; i < namesArray.length; i++) {
    // Loop through the names array
    const name = namesArray[i] 
    const li = document.createElement('li') 
    li.className = 'list-group-item' 
    const span = document.createElement('span') // Create a new span element
    span.textContent = name
    
    li.appendChild(span) // Append the span to the list item
    nameList.appendChild(li)
  }
  }
  function pickRandomName() {
    const randomNameDiv = document.getElementById('selectedNameDisplay')
    randomNameDiv.textContent = ''

    //Generate and select a random name from names array
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber] 

    randomNameDiv.textContent = randomName

    namesArray.splice(randomNumber, 1)

    displayNames();
  }


// Event listener for the button 
document.getElementById('addNameBtn').addEventListener('click', addName)

// click and select random name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)
  
