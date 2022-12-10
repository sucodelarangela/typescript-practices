import mongoose from "mongoose";
import { NewsSchema } from "../models/newsSchema";

// mongoose cria uma collection no db chamada 'news' e que contém os dados da nossa model NewsSchema
export const NewsRepository = mongoose.model('news', NewsSchema);