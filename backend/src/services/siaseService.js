import axios from 'axios';
const client=axios.create({baseURL:process.env.SIASE_API_URL,timeout:20000,headers:{'Content-Type':'application/json',accept:'application/json'}});
export async function login(usuario,password){const{data}=await client.post('/api/login',{usuario,password});return data.token||data?.data?.token||data;}
export async function getKardex(token){const{data}=await client.get('/api/kardex',{headers:{Authorization:`Bearer ${token}`}});return data;}
export async function getHorario(token){const{data}=await client.get('/api/horario',{headers:{Authorization:`Bearer ${token}`}});return data;}
export async function getCarreras(token){const{data}=await client.get('/api/carreras',{headers:{Authorization:`Bearer ${token}`}});return data;}
