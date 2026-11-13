import { type Request, type Response } from 'express';
import { NotaModel } from '../models/notes.model.ts';

export const getNotes = async (req: Request, res: Response) => {
    try {
        const notas = await NotaModel.find();
        res.status(200).json(notas);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'error al obtener las notas'
        })
    }
};

export const createNote = async (req: Request, res: Response) => {

    const { titulo, contenido } = req.body;
    if (!titulo || !contenido) {
        return res.status(400).json({
            msg: "datos invalidos"
        });
    }

    try {
        const newNota = new NotaModel({
            titulo,
            contenido
        })

        await newNota.save();

        res.status(201).json({
            ok: true,
            msg: 'Nota creada con exito'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'error al crear la nota'
        })
    }
};