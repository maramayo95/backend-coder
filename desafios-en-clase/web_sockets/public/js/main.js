const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')


//Get username and room from URL 
const { username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

const socket = io();


socket.emit('joinRoom', {username, room})

socket.on('message', message => {
    console.log(message)
    // To print in the frontend the message
    outputMessage(message)

    //Scroll Down
    chatMessages.scrollTop = chatMessages.scrollHeight;

})




// Message submit

chatForm.addEventListener('submit', (e)=> { 
    e.preventDefault()

    // GetMessage text 
    let msg = e.target.elements.msg.value;

    //Emit Message to server 
    socket.emit('chatMessage', msg)     

    // Clear input 
    //e.target.element.msg.value = '' ;
    //e.target.element.msg.focus();
    
})

// Output message to DOM 

function outputMessage(message){
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `
        <p class="meta">${message.username} <span>${message.time}</span></p>
        <p class="text">
            ${message.text}
        </p>
    `
    document.querySelector('.chat-messages').appendChild(div)
} 