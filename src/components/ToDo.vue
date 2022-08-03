<template>
  <section class="todo">
    <div class="todo__wrapper">
      <div class="todo__title">
        <h1 class="todo__h1">to do list</h1>
      </div>
      <div class="todo__content">
        <div class="todo__task">
          <div class="input__wrapper">
            <label class="input__container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="todo__name">Task 1</p>
          </div>
          <button class="todo__delete"></button>
        </div>

        <div class="todo__task">
          <div class="input__wrapper">
            <label class="input__container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="todo__name">Task 1</p>
          </div>
          <button class="todo__delete"></button>
        </div>

        <div class="todo__task">
          <div class="input__wrapper">
            <label class="input__container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p class="todo__name">Task 1</p>
          </div>
          <button class="todo__delete"></button>
        </div>

        <button class="todo__add">Add a new task</button>
      </div>
      <div class="todo__footer">
        <p class="todo__counter">1/3 left</p>
        <div class="todo__show">
          <button class="todo__show-button todo__all active">All</button>
          <button class="todo__show-button todo__active">Active</button>
          <button class="todo__show-button todo__completed">Completed</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped lang="scss">
.todo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  font-family: "Open Sans";
  font-size: 1.25rem;
}

.todo__wrapper {
  width: 100%;
  max-width: 33.75rem;
  box-shadow: 0px 0.5rem 2.25rem 0.5rem #fe9262;
  border: 2px solid #ffca93;
}

.todo__title {
  background-color: #ffca93;
  text-align: center;
  padding: 0.625rem 0;
}

.todo__h1 {
  color: #7f4b13;
  font-weight: 600;
}

.todo__content {
  background-color: #fff4e9;
  padding: 2rem;
}

.input__wrapper {
  display: flex;
  align-items: center;
}

.input__container {
  display: block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.375rem;
  background: transparent;
  border: 1.5px solid #feb567;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input__container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.input__container span {
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: 4px;
  height: 1.625rem;
  width: 1.625rem;
  background-color: transparent;
  transition: all 0.2s ease;
}

.input__container:hover input ~ span {
  background: rgba(254, 149, 38, 0.24);
  transition: all 0.2s ease;
}

.input__container input:checked ~ span {
  background-color: #feb567;
}

span:after {
  content: "";
  position: absolute;
  display: none;
}

.input__container input:checked ~ span:after {
  display: block;
}

.input__container span:after {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%) rotate(45deg);
  width: 0.313rem;
  height: 0.625rem;
  border: solid white;
  border-width: 0 1px 1px 0;
}

.todo__task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background-color: #ffdfbe;
  border-radius: 0.625rem;
  margin-bottom: 1.625rem;
}

.todo__name {
  color: #7f4b13;
  margin-left: 1.25rem;
}

.todo__delete {
  position: relative;
  width: 1.688rem;
  height: 1.688rem;
  border: 1.5px solid #ffca93;
  background: transparent;
  border-radius: 5px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.todo__delete::after,
.todo__delete::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.875rem;
  height: 1.5px;
  border-radius: 5px;
  background-color: #ffca93;
}

.todo__delete::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.todo__delete::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.todo__delete:hover {
  border: 1.5px solid #fc8f1a;
}

.todo__delete:hover.todo__delete::after,
.todo__delete:hover.todo__delete::before {
  transition: all 0.2s ease;
  background-color: #fc8f1a;
}

.todo__add {
  padding: 0.625rem;
  width: 100%;
  font-size: 1.25rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFCA93FF' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 0.625rem;
  border: none;
  background-color: #ffecd8;
  color: #ffca93;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.todo__add:hover {
  transition: all 0.2s ease;
  background-color: #ffca93;
  color: #ffecd8;
}

.todo__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.875rem;
  background-color: #ffca93;
  color: #7f4b136b;
}

.todo__show {
  display: flex;
  align-items: center;
}

.todo__show-button {
  background: transparent;
  border: none;
  margin-right: 1.625rem;
  font-size: 1.25rem;
  color: #7f4b136b;
  cursor: pointer;
  border-radius: 0.625rem;
  padding: 3px 0.625rem;
}

.todo__show-button.active {
  border: 1px solid #c9955d;
}

.todo__show-button:last-child {
  margin-right: 0px;
}
</style>
