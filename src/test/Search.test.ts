import { mount, VueWrapper } from "@vue/test-utils";
import { ComponentPublicInstance } from "vue";
import CoinSearch from "../components/coins/Search.vue";
import { expect, test } from "vitest";

test("Search Mounted", async () => {
  const wrapper: VueWrapper<ComponentPublicInstance> = mount(CoinSearch);
  expect(CoinSearch).toBeTruthy();
  console.log(wrapper.text());
  expect(wrapper.text()).toContain("Bitcoin");
  expect(wrapper.text()).toContain("CoinMerge");
});
