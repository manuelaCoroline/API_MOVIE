import{Router} from "express"
import { createComments, getAllComments, updateComments,deleteComments, getOneElement} from "../controllers/comment.controller.js";

const router =Router();


//localhost:4500/movies/
router.get("/",getAllComments)
router.post("/",createComments)
router.patch("/:id",updateComments)
router.delete("/:id",deleteComments)
router.get("/:id",getOneElement)

export default router;