import{Router} from "express"

import movieRoute from "./movie.route.js"
import commentRoute from "./comment.route.js"
const router =Router();


router.get("/", async (req, res) => {
  // res.send("<h1>manuela</h1>") ssr
   res.json({
     name:"ajs",
     age:14
 
   }) //csr
   console.log("los");
 });


 
//localhost:4500/
router.use("/movies",movieRoute)
router.use("/comments",commentRoute)

export default router;
