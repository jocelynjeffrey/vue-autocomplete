<template>
  <div>
    <h1>{{ msg }}</h1>
      <input
        @keyup="getInputValue()"
        @keyup.enter="setActiveOption(activeOptionIndex)"
        :value="inputValue"
        @keyup.delete="setList()"
        @focus="setList()"
        @keyup.down="onDownArrow()"
        @keyup.up="onUpArrow()"
        />
      <option
        class="listItems"
        v-if="listIsVisible"
        v-for="(item, index) in filteredOptions"
        v-bind:class="{active: index === activeOptionIndex}"
        v-bind:key="item"
        @click="setActiveOption(index)"
        >{{ item }}</option>
    </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  props: {
    msg: String,
    allOptions: Array,
  },
  data() {
    return {
      activeOptionIndex: 0,
      inputValue: '',
      listIsVisible: false,
    };
  },
  computed: {
    filteredOptions() {
      const val = this.inputValue.toLowerCase();
      return this.allOptions.filter(option => {
        return option.toLowerCase().startsWith(val);
      });
    }
  },
  methods: {
    setActiveOption(index) {
      this.activeOptionIndex = index || 0;
      this.inputValue = this.filteredOptions[index];
      this.listIsVisible = false;
    },
    onUpArrow(){
      this.activeOptionIndex - 1 < 0
        ? this.activeOptionIndex = this.filteredOptions.length - 1
        : this.activeOptionIndex -= 1
    },
    onDownArrow() {
      this.activeOptionIndex < this.filteredOptions.length - 1
      ? this.activeOptionIndex += 1
      : this.activeOptionIndex = 0
    },
    getInputValue() {
      this.listIsVisible = true;
      this.inputValue = event.target.value;
    },
    setList() {
      this.listIsVisible = true;
      this.activeOptionIndex = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
  option.active {
    background: rgb(148, 219, 184);
    color: white;
  }

  .wrapper{
    border: 1px solid red;
  }

  .listItems:hover {
    border: 1px solid grey;
    cursor: pointer;
  }
</style>
