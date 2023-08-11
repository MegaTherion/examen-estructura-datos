
import express from 'express';
import { Evaluador } from './classes/evaluador';

const app = express();
const port = 3000;

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Evaluar una expresion infija
app.post('/api/evaluador/evaluar', (req, res) => {
    const ev = new Evaluador();
    ev.convertir(req.body.infija);
    ev.evaluar();
    res.json({
        ok: true,
        postfija: ev.getPostfija(),
        resultado: ev.getResultado()
    });
});

// Manejo de errores
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Hubo un error en el servidor' });
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});