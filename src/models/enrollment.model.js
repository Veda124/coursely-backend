import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,required:true
    },
    courseId:{
        type: mongoose.Schema.Types.ObjectId,required:true
    },
    status:{
        type: String,
        enum: ['enrolled', 'completed', 'dropped', 'pending', 'failed'],
        default: 'enrolled'
    }
},{timestamps:true});

const enrollment = mongoose.model("Enrollment", enrollmentSchema);
export {enrollment};