// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`)
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
  //   taskTitles.push(title);
  //   taskDescriptions.push(description);
  //   taskComplete.push(false);
  // }
  function logTaskState(task) {
    console.log(`${task.title} has${task.complete ? ' ' : ' not'} been completed`);
  }

  // // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
  // function completeTask(taskIndex) {
    //   taskComplete[taskIndex] = true;
    // }
    function completeTask(task) {
      task.complete = true;
    }
    // // Print the state of a task to the console in a nice readable way
    // function logTaskState(taskIndex) {
      //   const title = taskTitles[taskIndex];
      //   const complete = taskComplete[taskIndex];
      //   console.log(`${title} has${complete ? " " : " not "}been completed`);
      // }


      // DRIVER CODE BELOW

      // newTask("Clean Cat Litter"); // task 0
      // newTask("Do Laundry"); // task 1

      // logTaskState(0); // Clean Cat Litter has not been completed
      // completeTask(0);
      // logTaskState(0); // Clean Cat Litter has been completed
      const task1 = newTask('Clean Cat litter', 'Take all the poop out of the litter box');
      const task2 = newTask('Do Laundry', '😨');
      const tasks = [task1, task2];

      // logTaskState(task1);
      // completeTask(task1);
      // logTaskState(task1);
      task1.logState();
      task1.markCompleted();
      task1.logState();
      console.log(tasks);
