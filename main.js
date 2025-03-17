//charger les variables denvironnement first
import "dotenv/config";

//lancer lapplication
import app from "./app.js"

//connexion a la bd

import  "./src/config/database.config.js"

//lancer le serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`serveur running http://localhost:${PORT}`);
});

console.log(PORT);