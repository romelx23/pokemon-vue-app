import { mount } from "@vue/test-utils";
import { describe } from "vitest";
import App from "@/../../src/App.vue";

describe("App", () => {
    test("should render", () => {
        // validar si hace match con el snapshot
        const wrapper = mount(App);
        expect(wrapper.html()).toMatchSnapshot();
    });
    }
);