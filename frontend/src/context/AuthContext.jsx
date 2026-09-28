import {createContext,useContext,useEffect,useState} from 'react';
import {api} from '../api/client.js';
const AuthContext=createContext(null);
export function AuthProvider({children}){
 const[user,setUser]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{const token=localStorage.getItem('uc_token'),matricula=localStorage.getItem('uc_user');if(token&&matricula)setUser({matricula});setLoading(false);},[]);
 async function login(user,password){const data=await api.login(user,password);localStorage.setItem('uc_token',data.token);localStorage.setItem('uc_user',data.user.matricula);setUser(data.user);return data;}
 function logout(){localStorage.removeItem('uc_token');localStorage.removeItem('uc_user');setUser(null);}
 return <AuthContext.Provider value={{user,loading,login,logout}}>{children}</AuthContext.Provider>;
}
export const useAuth=()=>useContext(AuthContext);
