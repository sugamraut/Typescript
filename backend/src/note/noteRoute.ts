import  express  from "express";
import { createNote, deleteNote, listNote, listNotes } from "./noteController";

const noteRoute= express.Router()

import{multer,storage} from "../middlewares/multerMiddleware"
const uploads=multer({storage:storage})

noteRoute.route("/").post(uploads.single('file'),createNote).get(listNotes)
noteRoute.route("/:id").get(listNote).delete(deleteNote)

export default noteRoute