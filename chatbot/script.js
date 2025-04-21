// A simple chatbot that responds with some predefined answers

function chatbot(input) {

  let output = "";

  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {

    output = "Hello, nice to meet you! <br> Welcome to Gowthamraj Network India Private Limited. <br> How can I help You.";

  } else if (input.includes("how are you") || input.includes("how are u")) {

    output = "I'm doing fine, thank you for asking.";

  } else if (input.includes("what is your name") || input.includes("what's ur name")) {

    output = "My name is Googlie, I'm a chatbot.";

  } else if (input.includes("what can you do")) {

    output = "I can chat with you and answer your queries.";

  } else if (input.includes("tell me a joke")) {

    output = "Why did the chicken go to the seance? To get to the other side.";

  }  else if (input.includes("start learning")) {  
  
  output = 'Here is a subscription link: <a href="https://gowthamrajnetwork.com/subscription/plans/" target="_blank">Visit subscription page</a> <br>2.Already subscribed then login with password provided by Company: <a href="https://gowthamrajnetwork.com/login/" target"_blank">Login with password</a> <br> Then visit My profile to start your learning';  
}     
    else if (input.includes("fees details")){

    output = 'Here is a subscription link: <a href="https://gowthamrajnetwork.com/subscription/plans/" target="_blank">Visit Fees page</a> <br> Our Company Entry Access /  Learning Materials Access / Course Access Fees 1.For Graduates   Freshers =  Rs 750.<br>2.For College Students From Second Years to Final Years ( First years can also apply) = Rs 550.<br> 3.For Already working persons in IT or core companies for Instructor Role = Rs 750.<br>4.For Financial low background students and Graduates = Rs 450.<br> Above Fees is discounted fees and it will be valid till May 1 2025.<br> This one time Mandatory fees needs to be paid to the Company to access Company Resources for Life Time';
    
  } 
    else if (input.includes("my profile")){

    output = 'Here is a myprofile link: <a href=" https://gowthamrajnetwork.com/myprofile/" target="_blank">Visit My Profile page</a>';
    
  }

    else if (input.includes("book appointment") || input.includes("doubt clarification")) {

    output = 'Here is a book appointment link: <a href=" https://gowthamrajnetwork.com/myprofile/" target="_blank">Click here to book appointment.</a> <br> 2.Already book appointment link: <a href=" https://gowthamrajnetwork.com/login/" target="_blank">Click here to Login.</a>. <br>Then Go to my profile to book appointment and login with a password.<br>Note Subscription is one time fees for an individual to access all our Resources Life time .';
    
  }
    else if (input.includes("offline workshops")) {

      output = '1.Get Learning Life time Subscription here :  <a href="https://gowthamrajnetwork.com/subscription/plans/" target="_blank">Click here for Lifetime subscription.</a>. <br>2.If you already subscribed then login here with the password provided by the Company :  <a href="https://gowthamrajnetwork.com/login/" target="_blank">Login with Password to login.</a>. <br> Then visit My profile to register for Offline Workshops';
    }

    else if (input.includes("online events")) {

      output = '1.Get Learning Life time Subscription here :  <a href="https://gowthamrajnetwork.com/subscription/plans/" target="_blank">Click here for Lifetime subscription.</a>. <br>2.If you already subscribed then login here with the password provided by the Company :  <a href="https://gowthamrajnetwork.com/login/" target="_blank">Login with Password to login.</a>. <br> Then visit My profile to register for Online Events';
    }

    else if (input.includes("offline events")) {

      output = '1.Get Learning Life time Subscription here :  <a href="https://gowthamrajnetwork.com/subscription/plans/" target="_blank">Click here for Lifetime subscription.</a>. <br>2.If you already subscribed then login here with the password provided by the Company :  <a href="https://gowthamrajnetwork.com/login/" target="_blank">Login with Password to login.</a>. <br> Then visit My profile to register for Offline Events';
    }

    else if (input.includes("explore career opportunities both intern and full time")) {

      output = 'A.Check Job Description  : <a href="https://gowthamrajnetwork.com/Careers/" target="_blank">Click here for Careers.</a>. <br>B.Then Apply for the Job in the Application Form : <a href=" https://tinyurl.com/grnetworkhiring" target="_blank">Click here for application.</a>. <br> Note : Our Company Entry/ Access Fees Between Rs 450 and Rs 750 is mandatory for Attending the interviews and it should be paid before the interviews if you got Shortlisted';
    }


  else {

    output = "Sorry, I don't understand that. Please try something else.";

  }

  return output;

}

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });