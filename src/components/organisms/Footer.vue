<template>
  <div :class="$style.footer">
    <CounterTasks />
    <div :class="$style.show">
      <TabButton
        v-for="button in buttons"
        :key="button.id"
        :isActive="button.isActive"
      >
        {{ button.text }}
      </TabButton>
    </div>
  </div>
</template>

<script>
import TabButton from "../atoms/TabButton.vue";
import CounterTasks from "../atoms/CounterTasks.vue";

export default {
  data() {
    return {
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
    };
  },
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
  background-color: $secondary-300;
  color: $secondary-op-16;
}

.show {
  display: flex;
  align-items: center;
}
</style>
