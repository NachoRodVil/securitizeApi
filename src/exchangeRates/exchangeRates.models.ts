import * as mongoose from 'mongoose';

export const ERSchema = new mongoose.Schema({
    currency: { type: String, required: true },
    value: { type: Number, required: true },
})

export interface ExchangeRate extends mongoose.Document {
    id: string;
    currency: string;
    value: number;
}