const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a name for the type of workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout",
      },
      duration: {
        type: Number
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
      },
    },
  ],
},{
  toJSON: {
    // This will include any virtual properties when data is requested
    virtuals: true
  }
});

// This adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // This will "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;