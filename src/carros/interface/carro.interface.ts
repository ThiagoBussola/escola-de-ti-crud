import { Document } from 'mongoose'

export interface Carro extends Document {
    readonly marca: string;
    readonly modelo: string;
    readonly versao: string;
    readonly ano: number;
    readonly valor: number;
    readonly descricao: string;
}