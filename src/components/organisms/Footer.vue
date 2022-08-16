<template>
  <div :class="$style.footer">
    <CounterTasks />
    <div :class="$style.show">
      <TabButton
        v-for="button in tabButtons"
        :key="button.id"
        :isActive="button.isActive"
        @click.native="changeTabStatus(button.text)"
      >
        {{ button.text }}
      </TabButton>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TabButton from "../atoms/TabButton.vue";
import CounterTasks from "../atoms/CounterTasks.vue";

export default {
  computed: {
    ...mapGetters(["tabButtons"]),
  },
  methods: {
    ...mapMutations(["changeTabStatus"]),
  },
  components: {
    TabButton,
    CounterTasks,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
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
