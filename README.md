# UANL Companion

App estudiantil que unifica NexusAPI (tareas) y SIASE-API (kardex/horario).

## Requisitos
- Node.js 18+
- Python 3.10+ (para NexusAPI)
- NexusAPI en http://localhost:8000
- SIASE-API en http://localhost:3000

## Levantar
### 1) NexusAPI
```bash
git clone https://github.com/Raulgooo/NexusAPI.git
cd NexusAPI && pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
### 2) SIASE-API
```bash
git clone https://github.com/GDSC-UANL/siase-api.git
cd siase-api && npm install
cp EXAMPLE.env .env
npm run build && npm run start
```
### 3) Backend
```bash
cd backend && npm install
cp .env.example .env
npm run dev
```
### 4) Frontend
```bash
cd frontend && npm install
cp .env.example .env
npm run dev
```
Abre http://localhost:5173

## Notas
- Ajusta rutas de SIASE en backend/src/services/siaseService.js si tu versión difiere.
- No afiliado a la UANL.
