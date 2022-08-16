export default {
  state: {
    tasks: [],

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

    tabButtons(state) {
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

  actions: {
    getFromStorage(context) {
      context.commit("getFromStorage");
    },
  },

  mutations: {
    getFromStorage(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    },

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
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      } else {
        if (!nameTask) {
          alert("Enter the task text!");
        } else {
          state.tasks.push({
            id: 1,
            title: nameTask,
            isChecked: false,
          });
          localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }
      }
    },

    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    changeTabStatus(state, text) {
      state.buttons = state.buttons.map((button) =>
        button.text === text
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      );
      state.filter = text;
    },
  },
};
