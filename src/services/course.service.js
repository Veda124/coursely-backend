import Course from '../models/course.model.js';

export const getAllCourses = async () => {
  try {
    const courses = await Course.find();    
    return courses;
    } catch (error) {
    throw new Error('Error retrieving courses: ' + error.message);
    }
};

export const getCourseById = async (courseId) => {
  try {
    const course = await Course.findById(courseId);
    if (!course) {

        throw new Error('Course not found');
    }
    return course;
  }
    catch (error) {
    throw new Error('Error retrieving course: ' + error.message);
    }
};

export const createCourse = async (courseData) => {
  try {
    const newCourse = new Course(courseData);   
    if (!newCourse) {
        throw new Error('Failed to create course');
    }   
    return await newCourse.save();
    } catch (error) {
    throw new Error('Error creating course: ' + error.message);
    }
};

export const updateCourse = async (courseId, courseData) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(courseId, courseData, { new: true });
        if (!updatedCourse) {
            throw new Error('Course not found');
        }
        return updatedCourse;
    } catch (error) {
        throw new Error('Error updating course: ' + error.message);
    }
};