import  express  from "express";
import mongoose from "mongoose";
import taskRoutes from './routes/task.js';
import { errorHandler, notFoundError } from "./middlewares/error-handler.js";


const app = express();
const port = process.env.PORT || 9090 ; // le port du serveur
const databaseName='ManageTask';

//Cela affichera les req MongoDB dans le terminal
mongoose.set('debug',true);
//Use des promesses ES6 pour Mongoose,donc aucune callBack n'est necessaire
mongoose.Promise =global.Promise;

//Se connecter a MongoDB
mongoose
.connect(`mongodb://localhost:27017/${databaseName}`)
.then(()=>{
    console.log(`Connected to ${databaseName}`);
})
.catch(err=>{
    console.log(err);
});


app.use(express.json());//Pour analyser les requetes application/json

app.use('/task',taskRoutes); //Utiliser les routes cées

app.use(notFoundError);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}/`);
})