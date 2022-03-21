

const socket = io();

function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
            <strong>${elem.autor}</strong>:
            <em>${elem.texto}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
   
    const mensaje = {
        autor: document.getElementById('username').value,
        texto: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false;
}

socket.on('messages', function(data) { render(data); });



const inputText = document.getElementById('text')
