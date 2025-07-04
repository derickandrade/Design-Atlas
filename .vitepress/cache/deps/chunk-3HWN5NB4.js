import {
  ReactiveValue
} from "./chunk-5U5U7DFU.js";
import {
  increment
} from "./chunk-RIC7ER34.js";
import {
  active_reaction,
  derived,
  get,
  on,
  set,
  set_active_reaction,
  source
} from "./chunk-WPCO5LAI.js";
import {
  true_default
} from "./chunk-IYECATTV.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __superGet
} from "./chunk-UGBVNEQM.js";

// node_modules/svelte/src/reactivity/date.js
var inited = false;
var _time, _deriveds, _reaction, _SvelteDate_instances, init_fn;
var _SvelteDate = class _SvelteDate extends Date {
  /** @param {any[]} params */
  constructor(...params) {
    super(...params);
    __privateAdd(this, _SvelteDate_instances);
    __privateAdd(this, _time, source(super.getTime()));
    /** @type {Map<keyof Date, Source<unknown>>} */
    __privateAdd(this, _deriveds, /* @__PURE__ */ new Map());
    __privateAdd(this, _reaction, active_reaction);
    if (!inited) __privateMethod(this, _SvelteDate_instances, init_fn).call(this);
  }
};
_time = new WeakMap();
_deriveds = new WeakMap();
_reaction = new WeakMap();
_SvelteDate_instances = new WeakSet();
init_fn = function() {
  inited = true;
  var proto = _SvelteDate.prototype;
  var date_proto = Date.prototype;
  var methods = (
    /** @type {Array<keyof Date & string>} */
    Object.getOwnPropertyNames(date_proto)
  );
  for (const method of methods) {
    if (method.startsWith("get") || method.startsWith("to") || method === "valueOf") {
      proto[method] = function(...args) {
        if (args.length > 0) {
          get(__privateGet(this, _time));
          return date_proto[method].apply(this, args);
        }
        var d = __privateGet(this, _deriveds).get(method);
        if (d === void 0) {
          const reaction = active_reaction;
          set_active_reaction(__privateGet(this, _reaction));
          d = derived(() => {
            get(__privateGet(this, _time));
            return date_proto[method].apply(this, args);
          });
          __privateGet(this, _deriveds).set(method, d);
          set_active_reaction(reaction);
        }
        return get(d);
      };
    }
    if (method.startsWith("set")) {
      proto[method] = function(...args) {
        var result = date_proto[method].apply(this, args);
        set(__privateGet(this, _time), date_proto.getTime.call(this));
        return result;
      };
    }
  }
};
var SvelteDate = _SvelteDate;

// node_modules/svelte/src/reactivity/set.js
var read_methods = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"];
var set_like_methods = ["difference", "intersection", "symmetricDifference", "union"];
var inited2 = false;
var _sources, _version, _size, _SvelteSet_instances, init_fn2;
var _SvelteSet = class _SvelteSet extends Set {
  /**
   * @param {Iterable<T> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteSet_instances);
    /** @type {Map<T, Source<boolean>>} */
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _version, source(0));
    __privateAdd(this, _size, source(0));
    if (true_default) value = new Set(value);
    if (value) {
      for (var element of value) {
        super.add(element);
      }
      __privateGet(this, _size).v = super.size;
    }
    if (!inited2) __privateMethod(this, _SvelteSet_instances, init_fn2).call(this);
  }
  /** @param {T} value */
  has(value) {
    var has = super.has(value);
    var sources = __privateGet(this, _sources);
    var s = sources.get(value);
    if (s === void 0) {
      if (!has) {
        get(__privateGet(this, _version));
        return false;
      }
      s = source(true);
      sources.set(value, s);
    }
    get(s);
    return has;
  }
  /** @param {T} value */
  add(value) {
    if (!super.has(value)) {
      super.add(value);
      set(__privateGet(this, _size), super.size);
      increment(__privateGet(this, _version));
    }
    return this;
  }
  /** @param {T} value */
  delete(value) {
    var deleted = super.delete(value);
    var sources = __privateGet(this, _sources);
    var s = sources.get(value);
    if (s !== void 0) {
      sources.delete(value);
      set(s, false);
    }
    if (deleted) {
      set(__privateGet(this, _size), super.size);
      increment(__privateGet(this, _version));
    }
    return deleted;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources);
    for (var s of sources.values()) {
      set(s, false);
    }
    sources.clear();
    set(__privateGet(this, _size), 0);
    increment(__privateGet(this, _version));
  }
  keys() {
    return this.values();
  }
  values() {
    get(__privateGet(this, _version));
    return super.values();
  }
  entries() {
    get(__privateGet(this, _version));
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return get(__privateGet(this, _size));
  }
};
_sources = new WeakMap();
_version = new WeakMap();
_size = new WeakMap();
_SvelteSet_instances = new WeakSet();
// We init as part of the first instance so that we can treeshake this class
init_fn2 = function() {
  inited2 = true;
  var proto = _SvelteSet.prototype;
  var set_proto = Set.prototype;
  for (const method of read_methods) {
    proto[method] = function(...v) {
      get(__privateGet(this, _version));
      return set_proto[method].apply(this, v);
    };
  }
  for (const method of set_like_methods) {
    proto[method] = function(...v) {
      get(__privateGet(this, _version));
      var set2 = (
        /** @type {Set<T>} */
        set_proto[method].apply(this, v)
      );
      return new _SvelteSet(set2);
    };
  }
};
var SvelteSet = _SvelteSet;

// node_modules/svelte/src/reactivity/map.js
var _sources2, _version2, _size2, _SvelteMap_instances, read_all_fn;
var _SvelteMap = class _SvelteMap extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteMap_instances);
    /** @type {Map<K, Source<number>>} */
    __privateAdd(this, _sources2, /* @__PURE__ */ new Map());
    __privateAdd(this, _version2, source(0));
    __privateAdd(this, _size2, source(0));
    if (true_default) value = new Map(value);
    if (value) {
      for (var [key, v] of value) {
        super.set(key, v);
      }
      __privateGet(this, _size2).v = super.size;
    }
  }
  /** @param {K} key */
  has(key) {
    var sources = __privateGet(this, _sources2);
    var s = sources.get(key);
    if (s === void 0) {
      var ret = super.get(key);
      if (ret !== void 0) {
        s = source(0);
        sources.set(key, s);
      } else {
        get(__privateGet(this, _version2));
        return false;
      }
    }
    get(s);
    return true;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(callbackfn, this_arg) {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    super.forEach(callbackfn, this_arg);
  }
  /** @param {K} key */
  get(key) {
    var sources = __privateGet(this, _sources2);
    var s = sources.get(key);
    if (s === void 0) {
      var ret = super.get(key);
      if (ret !== void 0) {
        s = source(0);
        sources.set(key, s);
      } else {
        get(__privateGet(this, _version2));
        return void 0;
      }
    }
    get(s);
    return super.get(key);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(key, value) {
    var _a;
    var sources = __privateGet(this, _sources2);
    var s = sources.get(key);
    var prev_res = super.get(key);
    var res = super.set(key, value);
    var version = __privateGet(this, _version2);
    if (s === void 0) {
      sources.set(key, source(0));
      set(__privateGet(this, _size2), super.size);
      increment(version);
    } else if (prev_res !== value) {
      increment(s);
      var v_reactions = version.reactions === null ? null : new Set(version.reactions);
      var needs_version_increase = v_reactions === null || !((_a = s.reactions) == null ? void 0 : _a.every(
        (r) => (
          /** @type {NonNullable<typeof v_reactions>} */
          v_reactions.has(r)
        )
      ));
      if (needs_version_increase) {
        increment(version);
      }
    }
    return res;
  }
  /** @param {K} key */
  delete(key) {
    var sources = __privateGet(this, _sources2);
    var s = sources.get(key);
    var res = super.delete(key);
    if (s !== void 0) {
      sources.delete(key);
      set(__privateGet(this, _size2), super.size);
      set(s, -1);
      increment(__privateGet(this, _version2));
    }
    return res;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources2);
    set(__privateGet(this, _size2), 0);
    for (var s of sources.values()) {
      set(s, -1);
    }
    increment(__privateGet(this, _version2));
    sources.clear();
  }
  keys() {
    get(__privateGet(this, _version2));
    return super.keys();
  }
  values() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.values();
  }
  entries() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get(__privateGet(this, _size2));
    return super.size;
  }
};
_sources2 = new WeakMap();
_version2 = new WeakMap();
_size2 = new WeakMap();
_SvelteMap_instances = new WeakSet();
read_all_fn = function() {
  get(__privateGet(this, _version2));
  var sources = __privateGet(this, _sources2);
  if (__privateGet(this, _size2).v !== sources.size) {
    for (var key of __superGet(_SvelteMap.prototype, this, "keys").call(this)) {
      if (!sources.has(key)) {
        sources.set(key, source(0));
      }
    }
  }
  for (var [, s] of __privateGet(this, _sources2)) {
    get(s);
  }
};
var SvelteMap = _SvelteMap;

// node_modules/svelte/src/reactivity/url-search-params.js
var REPLACE = Symbol();
var _version3, _url, _updating, _SvelteURLSearchParams_instances, update_url_fn;
var SvelteURLSearchParams = class extends URLSearchParams {
  constructor() {
    super(...arguments);
    __privateAdd(this, _SvelteURLSearchParams_instances);
    __privateAdd(this, _version3, source(0));
    __privateAdd(this, _url, get_current_url());
    __privateAdd(this, _updating, false);
  }
  /**
   * @param {URLSearchParams} params
   */
  [REPLACE](params) {
    if (__privateGet(this, _updating)) return;
    __privateSet(this, _updating, true);
    for (const key of [...super.keys()]) {
      super.delete(key);
    }
    for (const [key, value] of params) {
      super.append(key, value);
    }
    increment(__privateGet(this, _version3));
    __privateSet(this, _updating, false);
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  append(name, value) {
    super.append(name, value);
    __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
    increment(__privateGet(this, _version3));
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {void}
   */
  delete(name, value) {
    var has_value = super.has(name, value);
    super.delete(name, value);
    if (has_value) {
      __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
      increment(__privateGet(this, _version3));
    }
  }
  /**
   * @param {string} name
   * @returns {string|null}
   */
  get(name) {
    get(__privateGet(this, _version3));
    return super.get(name);
  }
  /**
   * @param {string} name
   * @returns {string[]}
   */
  getAll(name) {
    get(__privateGet(this, _version3));
    return super.getAll(name);
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {boolean}
   */
  has(name, value) {
    get(__privateGet(this, _version3));
    return super.has(name, value);
  }
  keys() {
    get(__privateGet(this, _version3));
    return super.keys();
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  set(name, value) {
    var previous = super.getAll(name).join("");
    super.set(name, value);
    if (previous !== super.getAll(name).join("")) {
      __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
      increment(__privateGet(this, _version3));
    }
  }
  sort() {
    super.sort();
    __privateMethod(this, _SvelteURLSearchParams_instances, update_url_fn).call(this);
    increment(__privateGet(this, _version3));
  }
  toString() {
    get(__privateGet(this, _version3));
    return super.toString();
  }
  values() {
    get(__privateGet(this, _version3));
    return super.values();
  }
  entries() {
    get(__privateGet(this, _version3));
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get(__privateGet(this, _version3));
    return super.size;
  }
};
_version3 = new WeakMap();
_url = new WeakMap();
_updating = new WeakMap();
_SvelteURLSearchParams_instances = new WeakSet();
update_url_fn = function() {
  if (!__privateGet(this, _url) || __privateGet(this, _updating)) return;
  __privateSet(this, _updating, true);
  const search = this.toString();
  __privateGet(this, _url).search = search && `?${search}`;
  __privateSet(this, _updating, false);
};

// node_modules/svelte/src/reactivity/url.js
var current_url = null;
function get_current_url() {
  return current_url;
}
var _protocol, _username, _password, _hostname, _port, _pathname, _hash, _search, _searchParams;
var SvelteURL = class extends URL {
  /**
   * @param {string | URL} url
   * @param {string | URL} [base]
   */
  constructor(url, base) {
    url = new URL(url, base);
    super(url);
    __privateAdd(this, _protocol, source(super.protocol));
    __privateAdd(this, _username, source(super.username));
    __privateAdd(this, _password, source(super.password));
    __privateAdd(this, _hostname, source(super.hostname));
    __privateAdd(this, _port, source(super.port));
    __privateAdd(this, _pathname, source(super.pathname));
    __privateAdd(this, _hash, source(super.hash));
    __privateAdd(this, _search, source(super.search));
    __privateAdd(this, _searchParams);
    current_url = this;
    __privateSet(this, _searchParams, new SvelteURLSearchParams(url.searchParams));
    current_url = null;
  }
  get hash() {
    return get(__privateGet(this, _hash));
  }
  set hash(value) {
    super.hash = value;
    set(__privateGet(this, _hash), super.hash);
  }
  get host() {
    get(__privateGet(this, _hostname));
    get(__privateGet(this, _port));
    return super.host;
  }
  set host(value) {
    super.host = value;
    set(__privateGet(this, _hostname), super.hostname);
    set(__privateGet(this, _port), super.port);
  }
  get hostname() {
    return get(__privateGet(this, _hostname));
  }
  set hostname(value) {
    super.hostname = value;
    set(__privateGet(this, _hostname), super.hostname);
  }
  get href() {
    get(__privateGet(this, _protocol));
    get(__privateGet(this, _username));
    get(__privateGet(this, _password));
    get(__privateGet(this, _hostname));
    get(__privateGet(this, _port));
    get(__privateGet(this, _pathname));
    get(__privateGet(this, _hash));
    get(__privateGet(this, _search));
    return super.href;
  }
  set href(value) {
    super.href = value;
    set(__privateGet(this, _protocol), super.protocol);
    set(__privateGet(this, _username), super.username);
    set(__privateGet(this, _password), super.password);
    set(__privateGet(this, _hostname), super.hostname);
    set(__privateGet(this, _port), super.port);
    set(__privateGet(this, _pathname), super.pathname);
    set(__privateGet(this, _hash), super.hash);
    set(__privateGet(this, _search), super.search);
    __privateGet(this, _searchParams)[REPLACE](super.searchParams);
  }
  get password() {
    return get(__privateGet(this, _password));
  }
  set password(value) {
    super.password = value;
    set(__privateGet(this, _password), super.password);
  }
  get pathname() {
    return get(__privateGet(this, _pathname));
  }
  set pathname(value) {
    super.pathname = value;
    set(__privateGet(this, _pathname), super.pathname);
  }
  get port() {
    return get(__privateGet(this, _port));
  }
  set port(value) {
    super.port = value;
    set(__privateGet(this, _port), super.port);
  }
  get protocol() {
    return get(__privateGet(this, _protocol));
  }
  set protocol(value) {
    super.protocol = value;
    set(__privateGet(this, _protocol), super.protocol);
  }
  get search() {
    return get(__privateGet(this, _search));
  }
  set search(value) {
    super.search = value;
    set(__privateGet(this, _search), value);
    __privateGet(this, _searchParams)[REPLACE](super.searchParams);
  }
  get username() {
    return get(__privateGet(this, _username));
  }
  set username(value) {
    super.username = value;
    set(__privateGet(this, _username), super.username);
  }
  get origin() {
    get(__privateGet(this, _protocol));
    get(__privateGet(this, _hostname));
    get(__privateGet(this, _port));
    return super.origin;
  }
  get searchParams() {
    return __privateGet(this, _searchParams);
  }
  toString() {
    return this.href;
  }
  toJSON() {
    return this.href;
  }
};
_protocol = new WeakMap();
_username = new WeakMap();
_password = new WeakMap();
_hostname = new WeakMap();
_port = new WeakMap();
_pathname = new WeakMap();
_hash = new WeakMap();
_search = new WeakMap();
_searchParams = new WeakMap();

// node_modules/svelte/src/reactivity/media-query.js
var parenthesis_regex = /\(.+\)/;
var MediaQuery = class extends ReactiveValue {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(query, fallback) {
    let final_query = parenthesis_regex.test(query) ? query : `(${query})`;
    const q = window.matchMedia(final_query);
    super(
      () => q.matches,
      (update) => on(q, "change", update)
    );
  }
};

export {
  SvelteDate,
  SvelteSet,
  SvelteMap,
  SvelteURLSearchParams,
  SvelteURL,
  MediaQuery
};
//# sourceMappingURL=chunk-3HWN5NB4.js.map
