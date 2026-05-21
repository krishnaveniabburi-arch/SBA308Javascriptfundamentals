// The provided course information
// Using const, strings, Numbers, Booleans
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  // Initialising empty array to store final report objects
  const result = [];
  const trackedLearnerIds = []; // to find how many learners

  // If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid
  if (ag.course_id !== course.id) {
    throw new Error('data validation mismatch: AssignmentGroup course_id does not match courseInfo id');
  }

  // looping over the submission array using forloop
  for (let i = 0; i < submissions.length; i++) {
    const submissionItem = submissions[i]
    const currentLearnerId = submissionItem.learner_id;

    // using if/else and continue to skip bad data entries if learner_id is missing
    if (currentLearnerId) {
      continue;
    }
    // checking object for the learner built or not
    if (trackedLearnerIds.includes(currentLearnerId)){
      continue;
    }
    else {
      trackedLearnerIds.push(currentLearnerId);
    }
    // creating empty learner object
    const learnerReportShell = {
      id: currentLearnerId
    };
    result.push(learnerReportShell);
  }

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
