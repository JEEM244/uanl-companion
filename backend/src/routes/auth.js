import express from 'express';
import jwt from 'jsonwebtoken';
import * as nexus from '../services/nexusService.js';
import * as siase from '../services/siaseService.js';
const router=express.Router();
router.post('/login',async(req,res)=>{
 const{user,password}=req.body;if(!user||!password)return res.status(400).json({error:'Usuario y contraseña requeridos'});
 try{
  await nexus.login(user,password);let siaseToken=null;
  try{siaseToken=await siase.login(user,password);}catch(e){console.warn('[SIASE login failed]',e.message);}
  const sessionToken=jwt.sign({user,siaseToken},process.env.JWT_SECRET,{expiresIn:'8h'});
  res.json({token:sessionToken,user:{matricula:user},siaseAvailable:!!siaseToken});
 }catch(err){console.error('[login]',err.message);res.status(401).json({error:'Credenciales inválidas o servicios no disponibles'});}
});
router.get('/me',(_req,res)=>res.json({status:'ok'}));
export default router;
