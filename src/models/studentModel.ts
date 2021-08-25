import mongoose,{ } from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        name: { type: String },
        class: { type: String },
        age : { type : Number },
        // Qualification :{type :String}
    },
    { timestamps: true }
);
export const StudentTable = mongoose.model('StudentSchema', StudentSchema);