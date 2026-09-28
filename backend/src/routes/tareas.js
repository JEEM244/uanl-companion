import express from 'express';
import {authRequired} from '../middleware/auth.js';
import * as nexus from '../services/nexusService.js';
const router=express.Router();
router.get('/',authRequired,async(req,res,next)=>{try{res.json(await nexus.getCalendario(req.session.user));}catch(err){next(err);}});
router.get('/cursos',authRequired,async(req,res,next)=>{try{res.json(await nexus.getCursos(req.session.user));}catch(err){next(err);}});
export default router;
