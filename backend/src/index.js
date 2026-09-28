import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import dashboardRoutes from './routes/dashboard.js';
import tareasRoutes from './routes/tareas.js';
import kardexRoutes from './routes/kardex.js';
import horarioRoutes from './routes/horario.js';

dotenv.config();
const app=express(), PORT=process.env.PORT||4000;
app.use(cors({origin:process.env.FRONTEND_URL||'http://localhost:5173',credentials:true}));
app.use(express.json());
app.get('/health',(_req,res)=>res.json({status:'ok',service:'uanl-companion-backend'}));
app.use('/api/auth',authRoutes); app.use('/api/dashboard',dashboardRoutes);
app.use('/api/tareas',tareasRoutes); app.use('/api/kardex',kardexRoutes); app.use('/api/horario',horarioRoutes);
app.use((err,_req,res,_next)=>{console.error('[ERROR]',err.message);res.status(err.status||500).json({error:err.message||'Error interno del servidor'});});
app.listen(PORT,()=>{console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);console.log(`NexusAPI: ${process.env.NEXUS_API_URL}`);console.log(`SIASE-API: ${process.env.SIASE_API_URL}`);});
