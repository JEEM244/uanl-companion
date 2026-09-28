import express from 'express';
import {authRequired} from '../middleware/auth.js';
import * as siase from '../services/siaseService.js';
const router=express.Router();
router.get('/',authRequired,async(req,res,next)=>{const{siaseToken}=req.session;if(!siaseToken)return res.status(503).json({error:'SIASE no disponible'});try{res.json(await siase.getHorario(siaseToken));}catch(err){next(err);}});
export default router;
