import { Router } from "express";
import { getNotes, createNote } from "../controlers/notes.controller.ts";

const router = Router();

router.get('/', getNotes);
router.post('/', createNote);

export default router;