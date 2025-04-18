import express from 'express'
import {loginController, registerController, testController,forgotPasswordController,updateProfileController,} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
//router object
 const router=express.Router()



//routing
//register || POST method
router.post('/register',registerController)

//login || POST
router.post('/login',loginController)

//forgot password || post
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get('/test',requireSignIn,isAdmin,testController);

//protected route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

  //update profile
router.put("/profile", requireSignIn, updateProfileController);
export default router;