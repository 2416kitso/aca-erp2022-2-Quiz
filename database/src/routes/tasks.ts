import express from 'express';
import Task from '../models/Task';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving tasks' });
  }
});

router.post('/addQuestion', async (req, res) => {
try {
const {
    question,
    options,
    correctAnswer,
} = req.body;
if(!question){
    res.status(400).json({
        success : false,
        message : "Please enter all fields",
    })
}
const onequestion = await Task.create({
    question,
    options,
    correctAnswer,
})
onequestion.save();
res.status(201).json({
    success : true,
    message : "Question added Successfully"
})
}
catch (error) {
    res.status(500).json({ error: 'Error saving question' });
  }
}
)
export default router;
