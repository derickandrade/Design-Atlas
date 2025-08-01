import {
  effect_tracking,
  get,
  render_effect,
  set,
  source,
  tick,
  untrack
} from "./chunk-WPCO5LAI.js";

// node_modules/svelte/src/reactivity/utils.js
function increment(source2) {
  set(source2, source2.v + 1);
}

// node_modules/svelte/src/reactivity/create-subscriber.js
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  return () => {
    if (effect_tracking()) {
      get(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          tick().then(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop == null ? void 0 : stop();
              stop = void 0;
            }
          });
        };
      });
    }
  };
}

export {
  increment,
  createSubscriber
};
//# sourceMappingURL=chunk-RIC7ER34.js.map
