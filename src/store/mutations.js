import Constant from "@/Constant";

export default {
    [Constant.WRITEITEM]: (state, { i, t }) => {
        console.log("mutations", i, t);
        let cflex = 6;
        if (t.length > 10) cflex = 12;

        if (i > -1) {
            state.cards[i].title = t;
        } else {
            state.cards.push({
                id: Math.random(),
                title: t,
                src:
                    cflex === 12
                        ? "https://cdn.vuetifyjs.com/images/cards/house.jpg"
                        : "",
                flex: cflex,
                checked: false
            });
        }
        state.index = -1;
    },
    [Constant.WRITTING]: (state, show) => {
        state.writting = show;
    },

    [Constant.LOVE]: (state, index) => {
        state.cards[index].checked = !state.cards[index].checked;
    },
    [Constant.DELETE]: (state, index) => {
        state.cards.splice(index, 1);
    },
    [Constant.MODIFY]: (state, index) => {
        console.log("modify", index);
        state.index = index;
        state.writting = true;
        state.modify = true;
    }
};
