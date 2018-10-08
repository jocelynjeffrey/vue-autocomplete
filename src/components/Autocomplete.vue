<template>
  <div>
    <h1>{{ msg }}</h1>
      <div v-click-outside="hideList" class="wrapper">
        <input
          @keyup="getInputValue()"
          @keyup.enter="setActiveOption(activeOptionIndex)"
          :value="inputValue"
          @keyup.delete="showList()"
          @focus="showList()"
          @keyup.down="onDownArrow()"
          @keyup.up="onUpArrow()"
          />
        <li
          v-html="highlight(item)"
          class="listItems"
          v-if="listIsVisible"
          v-for="(item, index) in filteredOptions"
          v-bind:class="{active: index === activeOptionIndex}"
          v-bind:key="item"
          @click="setActiveOption(index)"></li>
      </div>
    </div>
</template>

<script>
import { ClickOutside } from '../directives/ClickOutside.js';

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
  directives: {
    ClickOutside,
  },
  computed: {
    filteredOptions() {
      // You can data-bind to computed properties in templates just like a normal property.
      // Vue knows filteredOptions depends on allOptions, so it will update any
      // bindings that depend on FO  when AO changes computed properties are cached
      // based on their dependencies & will only re-evaluate when dependencies have changed
      const inputVal = this.inputValue.toLowerCase();
      return this.allOptions.filter(option => {
        return option.startsWith(inputVal);
      });
    },
  },
  methods: {
    highlight(item) {
      return this.inputValue === ''
      ? item
      : item.replace(this.inputValue, `<span class='highlight'>${this.inputValue}</span>`)
    },
    setActiveOption(index) {
      this.activeOptionIndex = index || 0;
      this.inputValue = this.filteredOptions[index];
      this.listIsVisible = false;
    },
    onUpArrow() {
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
    showList() {
      this.listIsVisible = true;
      this.activeOptionIndex = 0;
    },
    hideList() {
      this.listIsVisible = false;
    },
  },
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 50%;
    margin: auto;
  }
  .listItems {
    border: 1px solid rgb(148, 219, 184);
    border-top: none;
    font-weight: bold;
  }
  .listItems.active {
    background: rgb(148, 219, 184);
    color: white;
  }
  .listItems /deep/ .highlight {
    background-color: #E369A1;
    font-weight: bold;
  }
  .listItems:hover {
    border: 1px solid grey;
    cursor: pointer;
  }
</style>
