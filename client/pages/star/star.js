Component({
  mixins: [],
  data: {},
  props: {
    value: 1,
    getVal: null
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    starClick (e) {
      this.setData({
        value: e.target.dataset.index
      })
      this.props.value = e.target.dataset.index;
    },
    getValue () {
      return this.data.value;
    }
  },
});
