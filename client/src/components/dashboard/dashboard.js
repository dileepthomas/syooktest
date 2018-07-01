import React from 'react'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:9000');

function njsListener(ob){
    socket.on("randomData", data => {
        console.log(data)
    })
    socket.emit("njsListener", 1000)
}

const dashboard = props => {
    return(
        <div>
            Dashboard
        </div>
    )
}

export  {dashboard, njsListener}