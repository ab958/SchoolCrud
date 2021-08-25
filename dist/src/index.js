"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const studenRoute_1 = require("./routes/studenRoute");
const teacherRoute_1 = require("./routes/teacherRoute");
const app = express_1.default();
const PORT = 5000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/SchoolCurd').then(() => {
    console.log("connected SuccessFully");
}).catch(() => {
    console.log("Not Connected");
});
app.use("/student", studenRoute_1.StudentRoutes);
app.use("/teacher", teacherRoute_1.TeacherRoutes);
app.listen(PORT, () => {
    console.log("Server is Up");
});
