import {createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse} from '../services/course.service.js';

export async function getCourses(req, res) {
  try {
    const courses = await getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error retrieving courses:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}