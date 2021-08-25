"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTable = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const StudentSchema = new mongoose_1.default.Schema({
    name: { type: String },
    class: { type: String },
    age: { type: Number },
    // Qualification :{type :String}
}, { timestamps: true });
exports.StudentTable = mongoose_1.default.model('StudentSchema', StudentSchema);
