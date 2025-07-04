// node_modules/esm-env/true.js
var true_default = true;

// node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function assignment_value_stale(property, location) {
  if (true_default) {
    console.warn(`%c[svelte] assignment_value_stale
%cAssignment to \`${property}\` property (${location}) will evaluate to the right-hand side, not the value of \`${property}\` following the assignment. This may result in unexpected behaviour.
https://svelte.dev/e/assignment_value_stale`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/assignment_value_stale`);
  }
}
function binding_property_non_reactive(binding, location) {
  if (true_default) {
    console.warn(`%c[svelte] binding_property_non_reactive
%c${location ? `\`${binding}\` (${location}) is binding to a non-reactive property` : `\`${binding}\` is binding to a non-reactive property`}
https://svelte.dev/e/binding_property_non_reactive`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/binding_property_non_reactive`);
  }
}
function console_log_state(method) {
  if (true_default) {
    console.warn(`%c[svelte] console_log_state
%cYour \`console.${method}\` contained \`$state\` proxies. Consider using \`$inspect(...)\` or \`$state.snapshot(...)\` instead
https://svelte.dev/e/console_log_state`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/console_log_state`);
  }
}
function event_handler_invalid(handler, suggestion) {
  if (true_default) {
    console.warn(`%c[svelte] event_handler_invalid
%c${handler} should be a function. Did you mean to ${suggestion}?
https://svelte.dev/e/event_handler_invalid`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/event_handler_invalid`);
  }
}
function hydration_attribute_changed(attribute, html, value) {
  if (true_default) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function hydration_html_changed(location) {
  if (true_default) {
    console.warn(`%c[svelte] hydration_html_changed
%c${location ? `The value of an \`{@html ...}\` block ${location} changed between server and client renders. The client value will be ignored in favour of the server value` : "The value of an `{@html ...}` block changed between server and client renders. The client value will be ignored in favour of the server value"}
https://svelte.dev/e/hydration_html_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_html_changed`);
  }
}
function hydration_mismatch(location) {
  if (true_default) {
    console.warn(`%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function invalid_raw_snippet_render() {
  if (true_default) {
    console.warn(`%c[svelte] invalid_raw_snippet_render
%cThe \`render\` function passed to \`createRawSnippet\` should return HTML for a single element
https://svelte.dev/e/invalid_raw_snippet_render`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/invalid_raw_snippet_render`);
  }
}
function legacy_recursive_reactive_block(filename) {
  if (true_default) {
    console.warn(`%c[svelte] legacy_recursive_reactive_block
%cDetected a migrated \`$:\` reactive block in \`${filename}\` that both accesses and updates the same reactive value. This may cause recursive updates when converted to an \`$effect\`.
https://svelte.dev/e/legacy_recursive_reactive_block`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/legacy_recursive_reactive_block`);
  }
}
function lifecycle_double_unmount() {
  if (true_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function ownership_invalid_binding(parent, child, owner) {
  if (true_default) {
    console.warn(`%c[svelte] ownership_invalid_binding
%c${parent} passed a value to ${child} with \`bind:\`, but the value is owned by ${owner}. Consider creating a binding between ${owner} and ${parent}
https://svelte.dev/e/ownership_invalid_binding`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/ownership_invalid_binding`);
  }
}
function ownership_invalid_mutation(component, owner) {
  if (true_default) {
    console.warn(`%c[svelte] ownership_invalid_mutation
%c${component ? `${component} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : "Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}
https://svelte.dev/e/ownership_invalid_mutation`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/ownership_invalid_mutation`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (true_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}
function transition_slide_display(value) {
  if (true_default) {
    console.warn(`%c[svelte] transition_slide_display
%cThe \`slide\` transition does not work correctly for elements with \`display: ${value}\`
https://svelte.dev/e/transition_slide_display`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/transition_slide_display`);
  }
}

export {
  true_default,
  assignment_value_stale,
  binding_property_non_reactive,
  console_log_state,
  event_handler_invalid,
  hydration_attribute_changed,
  hydration_html_changed,
  hydration_mismatch,
  invalid_raw_snippet_render,
  legacy_recursive_reactive_block,
  lifecycle_double_unmount,
  ownership_invalid_binding,
  ownership_invalid_mutation,
  state_proxy_equality_mismatch,
  transition_slide_display
};
//# sourceMappingURL=chunk-IYECATTV.js.map
