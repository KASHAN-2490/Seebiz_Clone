import io from 'socket.io-client';
const CON_PORT = "http://localhost:7000/";

let socket = io(CON_PORT);
export default socket;