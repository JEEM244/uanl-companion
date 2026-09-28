import axios from 'axios';
const client=axios.create({baseURL:process.env.NEXUS_API_URL,timeout:20000,headers:{'Content-Type':'application/json',accept:'application/json'}});
export async function login(user,password){const{data}=await client.post('/login',{user,password});return data;}
export async function getCursos(user){const{data}=await client.post('/cursos',{user});return data;}
export async function getCalendario(user){const{data}=await client.post('/calendario',{user});return data;}
export async function getUserInfo(user){const{data}=await client.post('/user',{user});return data;}
