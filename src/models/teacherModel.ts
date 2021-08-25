import mongoose,{ } from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        name: { type: String },
        Department: { type: String },
        age : { type: Number},
        Qualification :{ type : String }
    },
    { timestamps: true }
);
export const TeacherTable = mongoose.model('TeacherSchema', TeacherSchema);