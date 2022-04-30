import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getDatabase, ref, child, push, update, onChildAdded } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"

const login_form = document.getElementById("login-form");
const register_form = document.getElementById("register-form");
console.log(login_form);
console.log(register_form);


//chat app scroll bar




//firbase started
const auth = getAuth();
const database = getDatabase();

if (login_form) {
    login_form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("submitted");
        const loginemail = login_form["email"].value;
        const loginpassword = login_form["password"].value;
        signInWithEmailAndPassword(auth, loginemail, loginpassword)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                alert("Signed In Successfully");
                window.location.replace("http://127.0.0.1:5500/chat%20app/chat.html")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });

    });
}

if (register_form) {
    register_form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (register_form["name2"].value != "" && register_form["email2"].value != " " &&
            register_form["password2"].value != "" && (register_form["password2"].value.length) > 6) {

            console.log("submitted")
            var email2 = register_form["email2"].value;
            var password2 = register_form["password2"].value
            createUserWithEmailAndPassword(auth, email2, password2).then((cred) => {

                const user = cred.user
                console.log(user);
                alert("User created successfully!!")
                window.location.replace("http://127.0.0.1:5500/chat%20app/login.html")


            }).catch(err => {
                console.log(err);
            })

            // alert("Account Created Successfully")
            // window.location.replace("http://127.0.0.1:5500/peddlars/login.html")


        } else {
            alert("Form not filled coreectly.")
        }
    });
}

let messagesList = []

const createMessageElement1 = (messageData) => {
    console.log(messageData)
    const messageBox = document.createElement('div');
    messageBox.classList.add('answer');

    const senderImg = document.createElement('img')
        // const userEmail = auth.currentUser.email;

    const userNamediv = document.createElement('div');
    userNamediv.classList.add("name");
    userNamediv.innerText = messageData.user_email;

    const messageText = document.createElement('div');
    messageText.classList.add("text");
    messageText.innerText = messageData.message;

    const timeText = document.createElement('div');
    timeText.classList.add("time");
    timeText.innerText = messageData.time;


    if ('test123@test.com' == messageData.user_email) {
        const senderImgDiv = document.createElement('div');
        senderImgDiv.classList.add('avatar');
        senderImgDiv.appendChild(senderImg)
        senderImg.src = "https://bootdey.com/img/Content/avatar/avatar2.png"
        messageBox.classList.add("right")

        messageBox.appendChild(senderImgDiv)
        messageBox.appendChild(userNamediv)
        messageBox.appendChild(messageText)
        messageBox.appendChild(timeText)

        document.getElementsByClassName("chat-body")[0].appendChild(messageBox)
            // document.getElementsByClassName("chat-body")[1].appendChild(messageBox)



    } else {
        const senderImgDiv = document.createElement('div');
        senderImgDiv.classList.add('avatar');
        senderImgDiv.appendChild(senderImg)
        senderImg.src = "https://bootdey.com/img/Content/avatar/avatar1.png"
        messageBox.classList.add("left")

        messageBox.appendChild(senderImgDiv)
        messageBox.appendChild(userNamediv)
        messageBox.appendChild(messageText)
        messageBox.appendChild(timeText)

        document.getElementsByClassName("chat-body")[0].appendChild(messageBox)
            // document.getElementsByClassName("chat-body")[1].appendChild(messageBox)

    }

}

const createMessageElement2 = (messageData) => {
    console.log(messageData)
    const messageBox = document.createElement('div');
    messageBox.classList.add('answer');

    const senderImg = document.createElement('img')
        // const userEmail = auth.currentUser.email;

    const userNamediv = document.createElement('div');
    userNamediv.classList.add("name");
    userNamediv.innerText = messageData.user_email;

    const messageText = document.createElement('div');
    messageText.classList.add("text");
    messageText.innerText = messageData.message;

    const timeText = document.createElement('div');
    timeText.classList.add("time");
    timeText.innerText = messageData.time;


    if ('ballu@test.com' == messageData.user_email) {
        const senderImgDiv = document.createElement('div');
        senderImgDiv.classList.add('avatar');
        senderImgDiv.appendChild(senderImg)
        senderImg.src = "https://bootdey.com/img/Content/avatar/avatar2.png"
        messageBox.classList.add("right")

        messageBox.appendChild(senderImgDiv)
        messageBox.appendChild(userNamediv)
        messageBox.appendChild(messageText)
        messageBox.appendChild(timeText)

        // document.getElementsByClassName("chat-body")[0].appendChild(messageBox)
        document.getElementsByClassName("chat-body")[1].appendChild(messageBox)



    } else {
        const senderImgDiv = document.createElement('div');
        senderImgDiv.classList.add('avatar');
        senderImgDiv.appendChild(senderImg)
        senderImg.src = "https://bootdey.com/img/Content/avatar/avatar1.png"
        messageBox.classList.add("left")

        messageBox.appendChild(senderImgDiv)
        messageBox.appendChild(userNamediv)
        messageBox.appendChild(messageText)
        messageBox.appendChild(timeText)

        // document.getElementsByClassName("chat-body")[0].appendChild(messageBox)
        document.getElementsByClassName("chat-body")[1].appendChild(messageBox)

    }

}

const setMessages = () => {
    // const messagesRef = ref(database, 'messages/');

    // onChildAdded(messagesRef, (snapshot) => {
    //     createMessageElement(snapshot.val())
    // })
    messagesList.map((data) => {
        createMessageElement1(data)
        createMessageElement2(data)
    })
}

setMessages();

// auth.onAuthStateChanged((user) => {
//     if (user) {

//         console.log("on auth changed")
//         const userData = {
//             email: user.email
//         }

//         const updates = {};
//         updates['/users/' + user.uid] = userData;
//         console.log(update(ref(database), updates))
//         update(ref(database), updates)

//         setMessages();
//     } else {
//         window.location.replace("http://127.0.0.1:5500/chat%20app/login.html");
//     }
// })



const sendMessage1 = () => {

    let date = new Date()
    let hr = date.getHours();
    let min = date.getMinutes();
    if (hr < 10) {
        hr = `0${hr}`
    }

    if (min < 10) {
        min = `0${min}`
    }

    const messageData = {
        message: document.getElementById("add_message").value,
        user_email: 'ballu@test.com',
        time: `${hr}:${min}`
    }
    messagesList.push(messageData)
    console.log(messagesList)
    document.getElementById("add_message").value = "";

    createMessageElement1(messageData);
    createMessageElement2(messageData);
    // const newMessageKey = push(child(ref(database), 'messages')).key;
    // const updates = {}
    // updates['/messages/' + newMessageKey] = messageData;
    // updates['/messages/' + newMessageKey] = messageData;

    // update(ref(database), updates);


}
const sendMessage2 = () => {
    let date = new Date()
    let hr = date.getHours();
    let min = date.getMinutes();
    if (hr < 10) {
        hr = `0${hr}`
    }

    if (min < 10) {
        min = `0${min}`
    }

    const messageData = {
        message: document.getElementById("add_message2").value,
        user_email: 'test123@test.com',
        time: `${hr}:${min}`
    }
    messagesList.push(messageData)
    console.log(messagesList)
    document.getElementById("add_message2").value = "";

    createMessageElement1(messageData);
    createMessageElement2(messageData);
}

document.getElementById("sendBUtton").addEventListener("click", () => {
    sendMessage1();
});
document.getElementById("sendBUtton2").addEventListener("click", sendMessage2);