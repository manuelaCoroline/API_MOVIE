import{Router} from "express"
//import { getAllMovies} from "../controllers/movie.controller.js";
import {getAllMovies,createMovie, updateMovie, deleteMovie, getOneMovie} from "../controllers/movie.controller.js";

const router =Router();


router.get("/",getAllMovies)
router.post("/",createMovie)
router.patch("/:id",updateMovie)
router.delete("/:id",deleteMovie)
router.get("/:id",getOneMovie)

export default router;