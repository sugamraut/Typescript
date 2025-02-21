import  express  from "express";
import { createNote } from "./noteController";

const noteRoute= express.Router()

import{multer,storage} from "../middlewares/multerMiddleware"
const uploads=multer({storage:storage})

noteRoute.route("/").post(uploads.single('file'),createNote)

export default noteRoute