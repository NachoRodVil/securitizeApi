import * as mongoose from 'mongoose';

export const WalletSchema = new mongoose.Schema({
    owner: { type: String, required: true },
    eth: { type: Number, required: true },
    isFav: { type: Boolean, required: true }
}, {
    timestamps: true
})

export interface Wallet extends mongoose.Document {
    id: string;
    owner: string;
    eth: number;
    isFav: boolean;
    createdAt?: string;
    updatedAt?: string;
}