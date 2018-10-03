export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    getParts() {
      return this.$store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};