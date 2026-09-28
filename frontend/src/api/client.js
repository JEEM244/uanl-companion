const BASE_URL=import.meta.env.VITE_API_URL||'http://localhost:4000';
function getToken(){return localStorage.getItem('uc_token');}
async function request(path,{method='GET',body,auth=true}={}){
 const headers={'Content-Type':'application/json'};if(auth&&getToken())headers.Authorization=`Bearer ${getToken()}`;
 const res=await fetch(`${BASE_URL}${path}`,{method,headers,body:body?JSON.stringify(body):undefined});
 const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.error||`HTTP ${res.status}`);return data;
}
export const api={login:(user,password)=>request('/api/auth/login',{method:'POST',body:{user,password},auth:false}),dashboard:()=>request('/api/dashboard'),tareas:()=>request('/api/tareas'),cursos:()=>request('/api/tareas/cursos'),kardex:()=>request('/api/kardex'),carreras:()=>request('/api/kardex/carreras'),horario:()=>request('/api/horario')};
