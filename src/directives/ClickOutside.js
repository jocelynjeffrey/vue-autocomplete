export const ClickOutside = {
  bind: (el, binding, vnode) => {
    el.clickOutsideEvent = (e) => {
      if (!(el === e.target || el.contains(e.target))) {
        vnode.context[binding.expression](e)
      }
    };
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
};
