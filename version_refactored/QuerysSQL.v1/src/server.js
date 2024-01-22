import app from './app.js'

const PORT =  process.env.DOOR || 3000;

app.listen(PORT,()=>{console.log("Servidor rodando no endereço http://localhost:"+PORT)});

