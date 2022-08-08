<template>
  <div :class="$style.footer">
    <CounterTasks />
    <div :class="$style.show">
      <TabButton title="All" />
      <TabButton title="Active" />
      <TabButton title="Completed" />
    </div>
  </div>
</template>

<script>
import TabButton from "../atoms/TabButton.vue";
import CounterTasks from "../atoms/CounterTasks.vue";

export default {
  components: {
    TabButton,
    CounterTasks,
  },
  props: {
    title: String,
  },
};
</script>

<style lang="scss" module>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.875rem;
  background-color: #ffca93;
  color: #7f4b136b;
}

.show {
  display: flex;
  align-items: center;
}

.active {
  border: 1px solid #c9955d;
}
</style>
