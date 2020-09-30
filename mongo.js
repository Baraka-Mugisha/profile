const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true})
.then(() => console.log('connected to MongoDb...'))
.catch((err) => console.log('did not connect to mongodb..., ', err));

const coursesSchema = new mongoose.Schema({
    _id: Object,
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('course', coursesSchema);

async function createCourse() {
const course = new Course({
    _id: 11,
    name: 'Node.Js Course',
    author: 'Keem',
    tags: ['node', 'backend'],
    isPublished: true
});

const result = await course.save();
console.log(result);
}

async function getCourses(){
    const PageNumber = 2;
    const PageSize = 3;
    const courses = await Course
        // .find({ _id: { $in: [10, 15, 20] }})
        .find()
        // .find({ author: /^MyRegExPattern/ })
        .or([ { author: 'Keem' }, { _id: '11' }])
        .skip((PageNumber - 1) * PageSize )
        .limit(PageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
        // .count()
    console.log(courses);
}

getCourses();
// createCourse();\

// COMPARISON
// eq: equal
// ne: not equal
// gt: greater than
// gte: greater than or equal
// lt: less than
// lte: less than or equal
// in
// nin: not in
