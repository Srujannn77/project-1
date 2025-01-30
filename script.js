// Function to update the current time every second
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = `Current Time: ${timeString}`;
}

// Call the function to set the time initially
updateTime();
// Update the time every second
setInterval(updateTime, 1000);

// Form submission handler
const choresForm = document.getElementById('choresForm');
choresForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const checkedChores = [];
    const priorityLevel = document.querySelector('input[name="priority"]:checked')?.value;
    
    // Get selected chores
    const choreInputs = document.querySelectorAll('input[name="chores"]:checked');
    choreInputs.forEach(input => checkedChores.push(input.value));
    
    if (checkedChores.length === 0 || !priorityLevel) {
        alert('Please select at least one chore and a priority level.');
        return;
    }

    // Display the selected chores and priority
    const choreList = checkedChores.join(', ');
    alert(`Your selected chores: ${choreList}\nPriority level: ${priorityLevel}`);
});
