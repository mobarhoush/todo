import { ICategory } from "../types/category"
import { model, Schema } from "mongoose"

const categorySchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default model<ICategory>("Category", categorySchema)