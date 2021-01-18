import { defineComponent, readonly, ref } from "vue";

const Default = defineComponent(() => {
    const count = ref(3);
    const state = readonly({
        count: 0,
    });

    const inc = () => count.value++;

    return () => (
        <button class="default-tsx" onClick={inc}>
            default tsx {state.count}
        </button>
    );
});

export default Default;
