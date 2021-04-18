const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// router.put("/api/workouts/:id", ({ body }, res) => {
//     console.log(body);
//     Workout.insert(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

router.put("/api/workouts/:id", function (req, res) {
    let id = req.params.id;
    console.log(req.body);
    console.log(id);
    db.Workout.findByIdAndUpdate(
        id,
        { $push: { exercises: req.body } },
    )
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log("ERROR!!!!");
            console.log(err);
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;