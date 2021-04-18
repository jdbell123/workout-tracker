const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
    type: {
        type: String,
        required: "Type of exercise"
    },
    name: {
        type: String,
        required: "Name of exercise"
    },
    duration: {
        type: Number,
        required: "Duration of exercise"
    },
    distance: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;