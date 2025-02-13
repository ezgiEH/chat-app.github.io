import io from 'socket.io-client';

let socket;

export const init = () =>{
    console.log('Connecting...')
    socket = io("http://localhost:3000", {
        transports: ['websocket']
    });

    socket.on("connect", () => console.log("Connected"))
}

export const sendMessage = (message) => {
    if(socket) socket.emit("new-message", message) // socket.emit("new-message", message)
}


export const subscribeChat = (cb) => {
    if(!socket) return
    
    socket.on('receive-message',(message) =>{  // burayı sor
        cb(message) 
    } )
}

export const subscribeInıtialMessages = (cb) => {
    if(!socket) return

    socket.on("message-list", (messages) =>{
        cb(messages)
    })
}