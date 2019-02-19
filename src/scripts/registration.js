import APIManager from "./APIManager";

const registrationLoginHandler = {
    buildRegistrationForm: () => {
        return `<section id="registrationForm">
        <fieldset>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email"></input>
        </fieldset>
        <fieldset>
            <label for="username">Username:</label>
            <input type="text" name="username" id="username"></input>
        </fieldset>
        <fieldset>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password"></input>
        </fieldset>
        <fieldset>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName"></input>
        </fieldset>
        <fieldset>
            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName"></input>
        <button id="registration--create">Register</button>
        </section>
        `
    },
    createRegistrationObject: () => {
        let username = document.querySelector("#username").value
        let password = document.querySelector("#password").value
        let firstName = document.querySelector("#firstName").value
        let lastName = document.querySelector("#lastName").value
        let email = document.querySelector("#email").value

        const userObject = {
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName,
            email: email
        }
        return userObject
    },
    buildLoginForm: () => {
        return `<section id="loginForm">
        <fieldset>
            <label for="username">Username:</label>
            <input type="text" name="loginUsername" id="loginUsername"></input>
        </fieldset>
        <fieldset>
            <label for="password">Password:</label>
            <input type="password" name="loginPassword" id="loginPassword"></input>
        </fieldset>
        <fieldset>
        <button id="login">Login</button>
        </section>
        `
    },
    createLoginObject: () => {
        let username = document.querySelector("#loginUsername").value
        let password = document.querySelector("#loginPassword").value

        const userLoginObject = {
            username: username,
            password: password,

        }
        return userLoginObject
    },
    logout: () => {
        sessionStorage.removeItem("userId")
    },
    registrationDuplicateCheck: () => {
        APIManager.getUsers((userArray) => {
            let checkDuplicate = false
            userArray.forEach(user => {
                if (user.username === userObject.username || user.email === userObject.email) {
                    checkDuplicate = true
                }
            })
            return checkDuplicate
        })
            .then((checkDuplicate) => {
            if (checkDuplicate) {
                alert("This user has already been registered! Try a different username or email.")
            }
        }
        )

    }

}

export default registrationLoginHandler