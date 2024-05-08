// Array of user logins and passwords
let users = [
    { username: "zzz", password: "zzz", firstName: "zzzperson", lastName: "zzzLastname", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "amil", password: "sup3rsecret", firstName: "Arnell", lastName: "Milhouse", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "bubbG1", password: "runFor3st!", firstName: "Bubba", lastName: "Green", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "charlie01", password: "Pass1234!", firstName: "Charlie", lastName: "Brown", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "deltaEcho", password: "deltaEcho2$", firstName: "Diana", lastName: "Echols", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "foxtrotG", password: "Foxtrot98@", firstName: "Frank", lastName: "Gallagher", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "golfSierra", password: "golfSierra#1", firstName: "Gary", lastName: "Sierra", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "hotelBravo", password: "Hotel@Bravo", firstName: "Hannah", lastName: "Bravo", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "india2Juliet", password: "indiaJ2$", firstName: "Ian", lastName: "Juliet", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "kiloLima", password: "KiloLima3^", firstName: "Karl", lastName: "Lima", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "mikeNovember", password: "mikeN7%", firstName: "Michael", lastName: "November", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "oscarPapa", password: "OscarP@2024", firstName: "Oliver", lastName: "Papa", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "quebecRomeo", password: "QuebecRomeo#5", firstName: "Quentin", lastName: "Romeo", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "sierraTango", password: "SierraT!99", firstName: "Samantha", lastName: "Tango", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "uniformVictor", password: "UVictor1*", firstName: "Ursula", lastName: "Victor", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "whiskeyXray", password: "WhiskeyX#8", firstName: "William", lastName: "Xray", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "yankeeZulu", password: "YanZul_7!", firstName: "Yasmine", lastName: "Zulu", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "alpha29", password: "AlphaTwoNine$", firstName: "Aaron", lastName: "Alpha", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "betaCharlie", password: "Beta$Charlie1", firstName: "Bella", lastName: "Charlie", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "gammaDelta", password: "GammaDelta2024!", firstName: "Gemma", lastName: "Delta", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "epsilonZeta", password: "EpsZeta@22", firstName: "Evan", lastName: "Zeta", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "thetaIota", password: "Theta*Iota3", firstName: "Theodore", lastName: "Iota", currentlyLoggedIn: false, totalLogins: 0 }
];

// Define an array of car objects, each representing a car with specific details.
const cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        rentalRatePerDay: 45, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Ford",
        model: "Fusion",
        year: 2021,
        rentalRatePerDay: 40, // rental rate per day in dollars
        availability: false
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        rentalRatePerDay: 50, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Chevrolet",
        model: "Equinox",
        year: 2021,
        rentalRatePerDay: 60, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2021,
        rentalRatePerDay: 47, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Hyundai",
        model: "Veloster N",
        year: 2022,
        rentalRatePerDay: 105, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Honda",
        model: "Civic Type R",
        year: 2023,
        rentalRatePerDay: 112, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Hyundai",
        model: "Elantra N",
        year: 2023,
        rentalRatePerDay: 110, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Ford",
        model: "Ranger",
        year: 2023,
        rentalRatePerDay: 110, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Chevrolet",
        model: "Prius",
        year: 2020,
        rentalRatePerDay: 45, // rental rate per day in dollars
        availability: true
    },    
    {
        make: "Toyota",
        model: "Tacoma",
        year: 2021,
        rentalRatePerDay: 75, // rental rate per day in dollars
        availability: true
    },
    {
        make: "Ford",
        model: "Focus",
        year: 2021,
        rentalRatePerDay: 40, // rental rate per day in dollars
        availability: true
    }
]

// Convert the 'users' array to a JSON string and store it in 'localUsersObject'
let localUsersObject = JSON.stringify(users);

// Check if there is a 'LocalUsers' item in the local storage
if (localStorage.getItem("LocalUsers")) {
    // If a local storage version of 'users' exists, log a message to the console
    console.log("A local storage version of users exists");

    // Retrieve the local storage version of 'users'
    let LocalUsersString = localStorage.getItem("LocalUsers");

    // Parse the local storage string back into an object and replace the 'users' array with it
    users = JSON.parse(LocalUsersString);
}

// Function to display logged-in status
function loggedInStatus(i) {
    // Display a message indicating that the user is logged in
    document.getElementById("status").innerHTML = `<p style="color: green">Hello ${users[i].firstName}, you are logged in.</p>`;
}

// Function to display logged-out status
function loggedOutStatus() {
    // Display a message indicating that no users are logged in
    document.getElementById("status").innerHTML = `<p style="color: crimson">No users are logged in.</p>`;
}

// Function to update local storage with active users
function writeActiveToLocal() {
    // Convert the 'users' array to a JSON string
    localUsersObject = JSON.stringify(users);

    // Store the JSON string in local storage with the key "localUsers"
    localStorage.setItem("LocalUsers", localUsersObject);
}

// Loop through the 'users' array
for (let i = 0; i < users.length; i++) {
    // Check if the current user is logged in
    if (users[i].currentlyLoggedIn) {
        // If the user is logged in, call the loggedInStatus function and break out of the loop
        loggedInStatus(i);
        break;
    } else {
        // If no user is logged in, call the loggedOutStatus function
        loggedOutStatus();
    }
}

// Function to handle user login
function login() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the username and password input fields
    let loginUserName = document.getElementById("username").value;
    let loginPassword = document.getElementById("password").value;

    // Loop through the 'users' array
    for (let i = 0; i < users.length; i++) {
        // Check if the entered username and password match those of a user in the 'users' array
        if (loginUserName === users[i].username && loginPassword === users[i].password) {
            // If there is a match, increment the totalLogins property and set currentlyLoggedIn to true
            users[i].totalLogins++;
            users[i].currentlyLoggedIn = true;

            // Call the loggedInStatus function to display the logged-in status message
            loggedInStatus(i);

            // Update the local storage with the updated 'users' array
            writeActiveToLocal();

            // Exit the loop since the login process is complete
            break;
        }
    }
}

// Function to handle user logout
function logout() {
    // Loop through the 'users' array
    for (let i = 0; i < users.length; i++) {
        // Check if the current user is logged in
        if (users[i].currentlyLoggedIn) {
            // If the user is logged in, set currentlyLoggedIn to false
            users[i].currentlyLoggedIn = false;

            // Call the loggedOutStatus function to display the logged-out status message
            loggedOutStatus();

            // Update the local storage with the updated 'users' array
            writeActiveToLocal();

            // Exit the loop since the logout process is complete
            break;
        }
    }
}

function createNewUser() {
    event.preventDefault();

    let newUserName = document.getElementById("newUserName").value;
    let newPassword = document.getElementById("newPassword").value;
    let newFirstName = document.getElementById("newFirstName").value;
    let newLastName = document.getElementById("newLastName").value;

    let newUser = {
        username: newUserName,
        password: newPassword,
        firstName: newFirstName,
        lastName: newLastName,
        totalLogins: 0
    }

    users.push(newUser);
    writeActiveToLocal();

    document.getElementById("status").innerHTML = `<p style="color: green">New account has been created!</p>`;
    document.getElementById("newUserName").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("newFirstName").value = "";
    document.getElementById("newLastName").value = "";
}

// Function to handle the event of renting a car
rentCar = () => {
    event.preventDefault(); // Prevent the default behavior of the event (submitting the form)

    // Check if any user is currently logged in
    let loggedInUserIndex = users.findIndex(user => user.currentlyLoggedIn);

    if (loggedInUserIndex === -1) {
        // If no user is logged in, display a message indicating that the user needs to log in first
        document.getElementById("carStatus").innerHTML = `<p style="color: crimson">Please log in first to rent a car.</p>`;
        return; // Exit the function
    }

    // Get the selected vehicle make and model from the HTML form
    let selectVehicleMake = document.getElementById("selectVehicleMake").value;
    let selectVehicleModel = document.getElementById("selectVehicleModel").value;
    let found = false; // Variable to track if the selected vehicle is found in the cars array

    // Loop through the cars array to find the selected vehicle
    for (let i = 0; i < cars.length; i++) {
        // Check if the make and model of the current car matches the selected make and model
        if (selectVehicleMake === cars[i].make && selectVehicleModel === cars[i].model) {
            // Check if the selected car is available
            if (cars[i].availability) {
                // If available, display a success message with green color
                document.getElementById("carStatus").innerHTML = `<p style="color: green">The car you selected: ${selectVehicleMake} ${selectVehicleModel} is available for $${cars[i].rentalRatePerDay} per day.</p>`;
                found = true; // Set found to true since the car is found
                break; // Exit the loop since the car is found
            } else {
                // If not available, display a message indicating that the car is not available with red color
                document.getElementById("carStatus").innerHTML = `<p style="color: red">The selected vehicle is not available.</p>`;
                found = true; // Set found to true since the car is found
                break; // Exit the loop since the car is found
            }
        }
    }

    // If the selected vehicle is not found in the cars array, display a message indicating that it was not found
    if (!found) {
        document.getElementById("carStatus").innerHTML = `<p style="color: red">The selected vehicle was not found.</p>`;
    }
}
