import express from 'express';
const router = express.Router();
import {Profile,Applications,TotalAccepted,TotalRejected,ChangePassword} from "../controller/Approver.js";

router.post('/',Profile);
router.post('/profile',Profile);
router.post('/applications',Applications);
router.post('/totalaccepted',TotalAccepted);
router.post('/totalrejected',TotalRejected);
router.post('/changepassword',ChangePassword);


export default router;