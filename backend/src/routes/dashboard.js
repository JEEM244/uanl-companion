import express from 'express';
import {authRequired} from '../middleware/auth.js';
import * as nexus from '../services/nexusService.js';
import * as siase from '../services/siaseService.js';
const router=express.Router();
router.get('/',authRequired,async(req,res)=>{
 const{user,siaseToken}=req.session;
 const results=await Promise.allSettled([nexus.getCalendario(user),nexus.getCursos(user),siaseToken?siase.getKardex(siaseToken):Promise.resolve(null),siaseToken?siase.getHorario(siaseToken):Promise.resolve(null)]);
 const[calendario,cursos,kardex,horario]=results.map(r=>r.status==='fulfilled'?r.value:null);
 res.json({user:{matricula:user},calendario,cursos,kardex,horario});
});
export default router;
