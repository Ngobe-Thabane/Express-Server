import express from 'express'
import { register } from './Controller/AuthController.js';
const PORT = 9000;
const App = express();
App.use(express.json());
App.post('/user', register);

App.listen(PORT, ()=>{
  console.log("Server is running");
});