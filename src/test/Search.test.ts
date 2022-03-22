import { mount, VueWrapper } from "@vue/test-utils";
import { ComponentPublicInstance } from "vue";
import CoinSearch from "../components/coins/Search.vue";
/* import { expect, test } from "vitest"; */
import { describe, test } from "@peeky/test";
//import { ComponentPublicInstance } from "vue";

/*test("Search Mounted", async () => {
  const wrapper: VueWrapper<ComponentPublicInstance> = mount(CoinSearch);

  expect(CoinSearch).toBeTruthy();

  await nextTick();

  expect(wrapper.text()).toContain("Bitcoin");
  expect(wrapper.text()).toContain("Cardano");
  expect(wrapper.text()).toContain("Ethereum");
}); */

describe("CoinSearch Test", () => {
  test("Search Mounted", async () => {
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(CoinSearch);
    expect(CoinSearch).toBeTruthy();
    expect(wrapper.text()).toContain("Bitcoin");
  });
});
