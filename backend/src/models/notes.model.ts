import mongoose from "mongoose";

const notaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    contenido: {
        type: String,
        required: [true, 'El contenido es obligatorio']
    }
});

export const NotaModel = mongoose.model('notes', notaSchema);