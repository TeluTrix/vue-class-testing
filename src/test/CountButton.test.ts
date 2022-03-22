import { expect, test } from "vitest";
import CountButton from "../components/CountButton.vue";
import { mount, VueWrapper } from "@vue/test-utils";
import { ComponentPublicInstance } from "vue";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const xTimes = require("js-utility-x");

test("Mounted Components", async () => {
  const wrapper: VueWrapper<ComponentPublicInstance> = mount(CountButton);
  expect(CountButton).toBeTruthy();

  //await wrapper.get("#decrement").trigger("click");
  //expect(wrapper.text()).toContain("0");
  //expect(wrapper.html()).toMatchSnapshot();
  //await wrapper.get("#increment").trigger("click");
  await xTimes(() => wrapper.get("#increment").trigger("click"), 9);
  //await wrapper.get("#increment").trigger("click");
  expect(wrapper.text()).toContain("9");

  //await wrapper.get("#increment").trigger("click");
});

test("Minus Component", async () => {
  const wrapper: VueWrapper<ComponentPublicInstance> = mount(CountButton);
  expect(CountButton).toBeTruthy();
  await wrapper.get("#decrement").trigger("click");
  expect(wrapper.text()).toContain("-1");
});

test("Plus Component", async () => {
  const wrapper: VueWrapper<ComponentPublicInstance> = mount(CountButton);
  expect(CountButton).toBeTruthy();
  await wrapper.get("#increment").trigger("click");
  expect(wrapper.text()).toContain("1");
});
