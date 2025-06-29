import {
  createSubscriber
} from "./chunk-RIC7ER34.js";
import {
  derived,
  get,
  readable,
  readonly,
  writable
} from "./chunk-PSDMKQ5C.js";
import "./chunk-FE7FDHKZ.js";
import "./chunk-EBDCAMB4.js";
import {
  effect_root,
  effect_tracking,
  render_effect
} from "./chunk-WPCO5LAI.js";
import "./chunk-IYECATTV.js";
import "./chunk-3DDUWI2D.js";
import "./chunk-UGBVNEQM.js";

// node_modules/svelte/src/store/index-client.js
function toStore(get2, set) {
  let init_value = get2();
  const store = writable(init_value, (set2) => {
    let ran = init_value !== get2();
    const teardown = effect_root(() => {
      render_effect(() => {
        const value = get2();
        if (ran) set2(value);
      });
    });
    ran = true;
    return teardown;
  });
  if (set) {
    return {
      set,
      update: (fn) => set(fn(get2())),
      subscribe: store.subscribe
    };
  }
  return {
    subscribe: store.subscribe
  };
}
function fromStore(store) {
  let value = (
    /** @type {V} */
    void 0
  );
  const subscribe = createSubscriber((update) => {
    let ran = false;
    const unsubscribe = store.subscribe((v) => {
      value = v;
      if (ran) update();
    });
    ran = true;
    return unsubscribe;
  });
  function current() {
    if (effect_tracking()) {
      subscribe();
      return value;
    }
    return get(store);
  }
  if ("set" in store) {
    return {
      get current() {
        return current();
      },
      set current(v) {
        store.set(v);
      }
    };
  }
  return {
    get current() {
      return current();
    }
  };
}
export {
  derived,
  fromStore,
  get,
  readable,
  readonly,
  toStore,
  writable
};
//# sourceMappingURL=svelte_store.js.map
