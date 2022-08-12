export default {
  state: {
    tasks: [
      {
        id: 1,
        title: "Task 1",
        isChecked: false,
      },
      {
        id: 2,
        title: "Task 2",
        isChecked: false,
      },
      {
        id: 3,
        title: "Task 3",
        isChecked: false,
      },
      {
        id: 4,
        title: "Task 4",
        isChecked: false,
      },
    ],

    buttons: [
      {
        id: "1",
        text: "All",
        isActive: true,
      },
      {
        id: "2",
        text: "Active",
        isActive: false,
      },
      {
        id: "3",
        text: "Completed",
        isActive: false,
      },
    ],

    filter: "All",
  },

  getters: {
    getTasks(state) {
      return state.tasks;
    },

    getActiveTasks(state) {
      return state.tasks.filter((task) => task.isChecked === false);
    },

    getButtons(state) {
      return state.buttons;
    },

    getFilteredTasks(state) {
      switch (state.filter) {
        case "Active":
          return state.tasks.filter((task) => task.isChecked === false);
        case "Completed":
          return state.tasks.filter((task) => task.isChecked === true);
        default:
          return state.tasks;
      }
    },
  },

  actions: {},

  mutations: {
    changeTaskStatus(state, id) {
      state.tasks.map((task) => {
        if (task.id == id) {
          task.isChecked = !task.isChecked;
        }
      });
    },

    addNewTask(state, nameTask) {
      if (nameTask && state.tasks.length != 0) {
        let lastId = state.tasks.slice(-1)[0].id;

        state.tasks.push({
          id: lastId + 1,
          title: nameTask,
          isChecked: false,
        });
      } else {
        if (!nameTask) {
          alert("Enter the task text");
        } else {
          state.tasks.push({
            id: 1,
            title: nameTask,
            isChecked: false,
          });
        }
      }
    },

    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);
    },

    changeTabStatus(state, text) {
      console.log(text);
      state.buttons = state.buttons.map((button) =>
        button.text === text
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      );
      state.filter = text;
    },
  },
};
