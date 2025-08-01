import {
  MediaQuery
} from "./chunk-3HWN5NB4.js";
import "./chunk-5U5U7DFU.js";
import "./chunk-RIC7ER34.js";
import "./chunk-7RQDXF5S.js";
import {
  linear
} from "./chunk-AA6KLWO5.js";
import {
  loop,
  raf,
  writable
} from "./chunk-PSDMKQ5C.js";
import "./chunk-FE7FDHKZ.js";
import "./chunk-EBDCAMB4.js";
import {
  deferred,
  get,
  noop,
  render_effect,
  set,
  source
} from "./chunk-WPCO5LAI.js";
import "./chunk-IYECATTV.js";
import "./chunk-3DDUWI2D.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet
} from "./chunk-UGBVNEQM.js";

// node_modules/svelte/src/motion/utils.js
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}

// node_modules/svelte/src/motion/spring.js
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => (
        // @ts-ignore
        tick_spring(ctx, last_value[i], current_value[i], target_value[i])
      )
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = (
    /** @type {T} */
    value
  );
  let target_value = (
    /** @type {T | undefined} */
    value
  );
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set2(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = raf.now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = raf.now();
      cancel_task = false;
      task = loop((now) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const elapsed = Math.min(now - last_time, 1e3 / 30);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: elapsed * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now;
        last_value = /** @type {T} */
        value;
        store.set(value = /** @type {T} */
        next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token) fulfil();
      });
    });
  }
  const spring2 = {
    set: set2,
    update: (fn, opts2) => set2(fn(
      /** @type {T} */
      target_value,
      /** @type {T} */
      value
    ), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var _stiffness, _damping, _precision, _current, _target, _last_value, _last_time, _inverse_mass, _momentum, _task, _deferred, _Spring_instances, update_fn;
var _Spring = class _Spring {
  /**
   * @param {T} value
   * @param {SpringOpts} [options]
   */
  constructor(value, options = {}) {
    __privateAdd(this, _Spring_instances);
    __privateAdd(this, _stiffness, source(0.15));
    __privateAdd(this, _damping, source(0.8));
    __privateAdd(this, _precision, source(0.01));
    __privateAdd(this, _current, source(
      /** @type {T} */
      void 0
    ));
    __privateAdd(this, _target, source(
      /** @type {T} */
      void 0
    ));
    __privateAdd(this, _last_value);
    __privateAdd(this, _last_time, 0);
    __privateAdd(this, _inverse_mass, 1);
    __privateAdd(this, _momentum, 0);
    /** @type {import('../internal/client/types').Task | null} */
    __privateAdd(this, _task, null);
    /** @type {ReturnType<typeof deferred> | null} */
    __privateAdd(this, _deferred, null);
    __privateGet(this, _current).v = __privateGet(this, _target).v = value;
    if (typeof options.stiffness === "number") __privateGet(this, _stiffness).v = clamp(options.stiffness, 0, 1);
    if (typeof options.damping === "number") __privateGet(this, _damping).v = clamp(options.damping, 0, 1);
    if (typeof options.precision === "number") __privateGet(this, _precision).v = options.precision;
  }
  /**
   * Create a spring whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Spring } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const spring = Spring.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {SpringOpts} [options]
   */
  static of(fn, options) {
    const spring2 = new _Spring(fn(), options);
    render_effect(() => {
      spring2.set(fn());
    });
    return spring2;
  }
  /**
   * Sets `spring.target` to `value` and returns a `Promise` that resolves if and when `spring.current` catches up to it.
   *
   * If `options.instant` is `true`, `spring.current` immediately matches `spring.target`.
   *
   * If `options.preserveMomentum` is provided, the spring will continue on its current trajectory for
   * the specified number of milliseconds. This is useful for things like 'fling' gestures.
   *
   * @param {T} value
   * @param {SpringUpdateOpts} [options]
   */
  set(value, options) {
    var _a, _b;
    (_a = __privateGet(this, _deferred)) == null ? void 0 : _a.reject(new Error("Aborted"));
    if ((options == null ? void 0 : options.instant) || __privateGet(this, _current).v === void 0) {
      (_b = __privateGet(this, _task)) == null ? void 0 : _b.abort();
      __privateSet(this, _task, null);
      set(__privateGet(this, _current), set(__privateGet(this, _target), value));
      __privateSet(this, _last_value, value);
      return Promise.resolve();
    }
    if (options == null ? void 0 : options.preserveMomentum) {
      __privateSet(this, _inverse_mass, 0);
      __privateSet(this, _momentum, options.preserveMomentum);
    }
    var d = __privateSet(this, _deferred, deferred());
    d.promise.catch(noop);
    __privateMethod(this, _Spring_instances, update_fn).call(this, value).then(() => {
      if (d !== __privateGet(this, _deferred)) return;
      d.resolve(void 0);
    });
    return d.promise;
  }
  get current() {
    return get(__privateGet(this, _current));
  }
  get damping() {
    return get(__privateGet(this, _damping));
  }
  set damping(v) {
    set(__privateGet(this, _damping), clamp(v, 0, 1));
  }
  get precision() {
    return get(__privateGet(this, _precision));
  }
  set precision(v) {
    set(__privateGet(this, _precision), v);
  }
  get stiffness() {
    return get(__privateGet(this, _stiffness));
  }
  set stiffness(v) {
    set(__privateGet(this, _stiffness), clamp(v, 0, 1));
  }
  get target() {
    return get(__privateGet(this, _target));
  }
  set target(v) {
    this.set(v);
  }
};
_stiffness = new WeakMap();
_damping = new WeakMap();
_precision = new WeakMap();
_current = new WeakMap();
_target = new WeakMap();
_last_value = new WeakMap();
_last_time = new WeakMap();
_inverse_mass = new WeakMap();
_momentum = new WeakMap();
_task = new WeakMap();
_deferred = new WeakMap();
_Spring_instances = new WeakSet();
/** @param {T} value */
update_fn = function(value) {
  var _a;
  set(__privateGet(this, _target), value);
  (_a = __privateGet(this, _current)).v ?? (_a.v = value);
  __privateGet(this, _last_value) ?? __privateSet(this, _last_value, __privateGet(this, _current).v);
  if (!__privateGet(this, _task)) {
    __privateSet(this, _last_time, raf.now());
    var inv_mass_recovery_rate = 1e3 / (__privateGet(this, _momentum) * 60);
    __privateGet(this, _task) ?? __privateSet(this, _task, loop((now) => {
      __privateSet(this, _inverse_mass, Math.min(__privateGet(this, _inverse_mass) + inv_mass_recovery_rate, 1));
      const elapsed = Math.min(now - __privateGet(this, _last_time), 1e3 / 30);
      const ctx = {
        inv_mass: __privateGet(this, _inverse_mass),
        opts: {
          stiffness: __privateGet(this, _stiffness).v,
          damping: __privateGet(this, _damping).v,
          precision: __privateGet(this, _precision).v
        },
        settled: true,
        dt: elapsed * 60 / 1e3
      };
      var next = tick_spring(ctx, __privateGet(this, _last_value), __privateGet(this, _current).v, __privateGet(this, _target).v);
      __privateSet(this, _last_value, __privateGet(this, _current).v);
      __privateSet(this, _last_time, now);
      set(__privateGet(this, _current), next);
      if (ctx.settled) {
        __privateSet(this, _task, null);
      }
      return !ctx.settled;
    }));
  }
  return __privateGet(this, _task).promise;
};
var Spring = _Spring;
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// node_modules/svelte/src/motion/tweened.js
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set2(new_value, opts) {
    target_value = new_value;
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...defaults, ...opts };
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    task = loop((now) => {
      if (now < start) return true;
      if (!started) {
        fn = interpolate(
          /** @type {any} */
          value,
          new_value
        );
        if (typeof duration === "function")
          duration = duration(
            /** @type {any} */
            value,
            new_value
          );
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set: set2,
    update: (fn, opts) => set2(fn(
      /** @type {any} */
      target_value,
      /** @type {any} */
      value
    ), opts),
    subscribe: store.subscribe
  };
}
var _current2, _target2, _defaults, _task2;
var _Tween = class _Tween {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(value, options = {}) {
    __privateAdd(this, _current2, source(
      /** @type {T} */
      void 0
    ));
    __privateAdd(this, _target2, source(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    __privateAdd(this, _defaults);
    /** @type {import('../internal/client/types').Task | null} */
    __privateAdd(this, _task2, null);
    __privateGet(this, _current2).v = __privateGet(this, _target2).v = value;
    __privateSet(this, _defaults, options);
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenedOptions<U>} [options]
   */
  static of(fn, options) {
    const tween = new _Tween(fn(), options);
    render_effect(() => {
      tween.set(fn());
    });
    return tween;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenedOptions<T>} [options]
   * @returns
   */
  set(value, options) {
    var _a;
    set(__privateGet(this, _target2), value);
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...__privateGet(this, _defaults), ...options };
    if (duration === 0) {
      (_a = __privateGet(this, _task2)) == null ? void 0 : _a.abort();
      set(__privateGet(this, _current2), value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    let started = false;
    let previous_task = __privateGet(this, _task2);
    __privateSet(this, _task2, loop((now) => {
      if (now < start) {
        return true;
      }
      if (!started) {
        started = true;
        const prev = __privateGet(this, _current2).v;
        fn = interpolate(prev, value);
        if (typeof duration === "function") {
          duration = duration(prev, value);
        }
        previous_task == null ? void 0 : previous_task.abort();
      }
      const elapsed = now - start;
      if (elapsed > /** @type {number} */
      duration) {
        set(__privateGet(this, _current2), value);
        return false;
      }
      set(__privateGet(this, _current2), fn(easing(elapsed / /** @type {number} */
      duration)));
      return true;
    }));
    return __privateGet(this, _task2).promise;
  }
  get current() {
    return get(__privateGet(this, _current2));
  }
  get target() {
    return get(__privateGet(this, _target2));
  }
  set target(v) {
    this.set(v);
  }
};
_current2 = new WeakMap();
_target2 = new WeakMap();
_defaults = new WeakMap();
_task2 = new WeakMap();
var Tween = _Tween;

// node_modules/svelte/src/motion/index.js
var prefersReducedMotion = new MediaQuery(
  "(prefers-reduced-motion: reduce)"
);
export {
  Spring,
  Tween,
  prefersReducedMotion,
  spring,
  tweened
};
//# sourceMappingURL=svelte_motion.js.map
