"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherTable = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TeacherSchema = new mongoose_1.default.Schema({
    name: { type: String },
    Department: { type: String },
    age: { type: Number },
    Qualification: { type: String }
}, { timestamps: true });
exports.TeacherTable = mongoose_1.default.model('TeacherSchema', TeacherSchema);
