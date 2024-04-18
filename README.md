# Assignment Frontend 🚀

This repository contains the frontend code for the assignment. It provides frontend for various functionalities related to the project.

## Check the frontend code 🔗

[Backend Repository](https://github.com/itsvanshchavda/Assignment-Backend)

## Technologies Used

- **React Js** 
- **Redux Toolkit** 
- **RTK Query** 
- **Tailwind CSS** 
- **React Router Dom**


## Features

- [ ] **Feature 1: Authentication with OTP** ✉️

  - Description: Implement authentication using OTP verification via backend API and also with Redux Toolkit.

- [ ] **Feature 2: Signup** ✍️

  - Description: Sign up functionality with proper password testing and RTK Query fetching and OTP validation.

    - Used `useNavigate` to redirect from the signup page to the OTP page for validation.

    - Saving user data in local storage through Redux Toolkit.

- [ ] **Feature 3: Signin** 🔐

  - Description: Sign in functionality with proper password testing and RTK Query fetching and OTP validation.

    - Using the `persist` login feature.

    - Using `useNavigate` for the signin page.

    - Saving user data in local storage through Redux Toolkit.

    - Using JWT for token-based authentication.

- [ ] **Feature 4: Logout** 🚪

  - Description: Logout from local storage and also logout from backend cookies.

    - Remove the access from the home page because the user is logged out.

    - Remove the user data from local storage.

## Installation

1. Clone the repository: `git clone https://github.com/itsvanshchavda/Assignment-Frontend.git`

2. Install the dependencies: `npm install`

3. Create a `.env` file in the root directory and add the following configuration:

   ```bash
   VITE_API_URL="http://localhost:3000/api"
   ```

4. Run the server: `npm start dev`

5. Access the application: [http://localhost:5173](http://localhost:5173)

## Additional Features

- Additional features:

  - User have their name on the home page and if the user comes back after some time, they will be logged in automatically.

  - User can logout from the home page.

  - Fully responsive for mobile and desktop.

  - User can see the OTP validation on the OTP page.

  - User can see the error message if the OTP is wrong.

  - Adding `react-toastify` for error messages.

  - User can see the error message if the password is wrong.

  - User can see the error message if the email is wrong.

  - User can see the error message if the email already exists.


 ## Routes 

 - /signup
 - /signin
 - /otp
 - /home

Contributing
------------

🤝 Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

Made By
-------

- [Vansh Chavda](https://github.com/itsvanshchavda)
- Linkedin: [Vansh Chavda](https://www.linkedin.com/in/vansh-chavda-0b0b3b1b2/)
- Email: vanshchavda328@gmail.com
- Twitter: [@vanshchavda_](https://twitter.com/vanshchavda_)
