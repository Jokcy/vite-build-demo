import { inject } from "vue";

const key = "__key__";

const defaultValue = {};

function A() {
    return inject(key, defaultValue);
}

export default {
    A,
};
