function userChanges()
{
    var userName = document.querySelector("#userName").value;
    var userGreeting = "Hello " + userName + "!";
    document.querySelector("#greeting").innerHTML = userGreeting;

    var userInput = document.querySelector("#newMessage").value;
    var userParagraph = userName + "'s Message: " + userInput;
    document.querySelector("#briefMessage").innerHTML = userParagraph;

    var color = document.querySelector("#bgColor").value;
    document.body.style.backgroundColor = color;

}