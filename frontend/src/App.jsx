import {Routes,Route,Navigate} from 'react-router-dom';
import {useAuth} from './context/AuthContext.jsx';
import Login from './pages/Login.jsx';import Layout from './components/Layout.jsx';import Dashboard from './pages/Dashboard.jsx';import Tareas from './pages/Tareas.jsx';import Kardex from './pages/Kardex.jsx';import Horario from './pages/Horario.jsx';
function ProtectedRoute({children}){const{user,loading}=useAuth();if(loading)return <div style={{padding:40}}>Cargando…</div>;if(!user)return <Navigate to="/login" replace/>;return children;}
export default function App(){const{user}=useAuth();return <Routes><Route path="/login" element={user?<Navigate to="/" replace/>:<Login/>}/><Route element={<ProtectedRoute><Layout/></ProtectedRoute>}><Route path="/" element={<Dashboard/>}/><Route path="/tareas" element={<Tareas/>}/><Route path="/kardex" element={<Kardex/>}/><Route path="/horario" element={<Horario/>}/></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes>;}
