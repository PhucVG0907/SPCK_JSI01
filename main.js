const firebaseConfig = {
    apiKey: "AIzaSyDqHx5ZUdAefYRsSdq3xJNuf9Z9POFXiNI",
    authDomain: "formloginsignup-1eba9.firebaseapp.com",
    databaseURL: "https://formloginsignup-1eba9-default-rtdb.firebaseio.com",
    projectId: "formloginsignup-1eba9",
    storageBucket: "formloginsignup-1eba9.appspot.com",
    messagingSenderId: "812850524350",
    appId: "1:812850524350:web:d7f71deb23e44968b7eeef"
  };

firebase.initializeApp(firebaseConfig)

// init variable
const auth = firebase.auth()
const database = firebase.database()

// function sign up
function signup() {
    email = document.getElementById('emailSignUp').value 
    password = document.getElementById('passSignUp').value 
    cpassword = document.getElementById('cpass').value

    if(checkEmail(email) == false || checkPassword(password) == false || password != cpassword) {
        alert("Vui lòng kiểm tra email hoặc password")
        return
    }
    
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                email: email,
                password: password,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data);

            // DOne
            alert('User Created!!!');
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_message = error.message;

            alert(error_message);
        })
}

function LogIn() {
   email = document.getElementById('email').value 
   password = document.getElementById('pass').value 

   if(checkEmail(email) == false || checkPassword(password) == false) {
    alert("Vui lòng kiểm tra email hoặc password")
    return
   }

   auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                last_login: Date.now()
            };

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data);

            // DOne
            alert('User Logged In!!!');
            window.location.href = "index.html"

        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_message = error.message;

            alert(error_message);
        })
}

function checkEmail(email) {
    // regex - kiểm tra tính hợp lệ của email
    expression = /^[^@]+@\w+(\.\w+)+\w$/ 
    if(expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function checkPassword() {
    expression = /^[A-Za-z]\w{7,14}$/
    if(expression.test(password) == true) {
        return true 
    } else {
        return false
    }
}

function checkField(field) {
    if(field == null) {
        return false
    }
    
    if(field.length <= 0) {
        return false
    } else {
        return true
    }
}

 