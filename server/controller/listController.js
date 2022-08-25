const { Classroom } = require("../model/ClassRoom");
const { LearningPath } = require("../model/LearningPath");
const { Student } = require("../model/Student");
const { Teacher } = require("../model/Teacher");
const { User } = require("../model/User");

const sendStudentListToTeacher = async (req, res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { teacherId } = req.body;

        const teacher = await User.findById(teacherId);
        const teacherData = await Teacher.findById(teacher.userInfo);
        let students = [];
        for(i of teacherData.classRooms)
        {
            // console.log(i);
            const classroom = await Classroom.findById(i);
            for(j of classroom.students)
            {
                const student = await User.findById(j);
                const studentData = await Student.findById(student.userInfo);
                students.push(studentData);
            }
        }
        return res.status(200).json({ message: "Students fetched successfully", students });
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const sendStudentListToSchool = async (req, res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { schoolId } = req.body;

        const students = await Student.find({ school: schoolId });

        if(students.length) return res.status(200).json({ message: "Students fetched successfully", students });
        else return res.status(404).json({ message: "No students for given school", students })
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const sendTeacherListToSchool = async (req, res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { schoolId } = req.body;

        const teachers = await Teacher.find({ school: schoolId });

        if(teachers.length) return res.status(200).json({ message: "Students fetched successfully", teachers });
        else return res.status(404).json({ message: "No students for given school", teachers });
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.sendStudentListToSchool = sendStudentListToSchool;
module.exports.sendStudentListToTeacher = sendStudentListToTeacher;
module.exports.sendTeacherListToSchool = sendTeacherListToSchool;