import mongoose from 'mongoose';

interface ITask extends mongoose.Document {
 question: string;
  options : string[];
  correctAnswer: string;
}

const TaskSchema = new mongoose.Schema<ITask>({
    question: String,
    options: Array,
    correctAnswer: String,
});

export default mongoose.model<ITask>('Task', TaskSchema);
