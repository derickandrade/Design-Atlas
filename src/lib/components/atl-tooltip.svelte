<script>
// Importa funções do ciclo de vida do Svelte
import { onMount, onDestroy } from 'svelte';

// Controla a visibilidade da tooltip
let tooltipVisible = false;

// Gera um ID único para associar a tooltip ao elemento de disparo
let tooltipId = `atl-tooltip-${Math.random().toString(36).slice(2, 8)}`;

// Flag para identificar se o evento é de toque (touch) em dispositivos móveis
let isTouch = false;

// Texto exibido na tooltip (propriedade exportada)
export let text = '';
// Direção da tooltip (bottom, top, left, right, etc.)
export let direction = 'bottom';

// Referência ao elemento que dispara a tooltip
let triggerEl;

// Exibe a tooltip
function showTooltip() {
	tooltipVisible = true;
}

// Esconde a tooltip
function hideTooltip() {
	tooltipVisible = false;
}

// Esconde a tooltip ao pressionar ESC
function onKeyDown(event) {
	if (event.key === 'Escape') {
		hideTooltip();
	}
}

// Esconde a tooltip ao clicar fora do elemento de disparo
function onDocumentClick(event) {
	if (!triggerEl.contains(event.target)) {
		hideTooltip();
	}
}

// Mostra a tooltip imediatamente em dispositivos touch
function handleTouchStart() {
   isTouch = true;
   showTooltip();
}

// Não faz nada no touchend, tooltip permanece visível
function handleTouchEnd() {
   // tooltip permanece visível
}

// Mostra a tooltip ao passar o mouse, se não for touch
function handleMouseEnter() {
	if (!isTouch) showTooltip();
}

// Esconde a tooltip ao sair o mouse, se não for touch
function handleMouseLeave() {
	if (!isTouch) hideTooltip();
}

// Mostra a tooltip ao focar via teclado, se não for touch
function handleFocus() {
	if (!isTouch) showTooltip();
}

// Esconde a tooltip ao perder o foco, se não for touch
function handleBlur() {
	if (!isTouch) hideTooltip();
}

// Adiciona/remover listeners de teclado e clique globalmente, apenas no client
onMount(() => {
   if (typeof document !== 'undefined') {
	   document.addEventListener('keydown', onKeyDown);
	   document.addEventListener('click', onDocumentClick);
   }
});

onDestroy(() => {
   if (typeof document !== 'undefined') {
	   document.removeEventListener('keydown', onKeyDown);
	   document.removeEventListener('click', onDocumentClick);
   }
});
</script>

<!--
Componente Tooltip:
Envolve o elemento disparador (slot) e exibe a tooltip quando apropriado.
O slot pode ser qualquer conteúdo (ícone, texto, etc).
-->
<div class="atl-tooltip" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
   <!-- Elemento disparador da tooltip -->
   <div
	   class="unstyled-button"
	   bind:this={triggerEl}
	   on:focus={handleFocus}
	   on:blur={handleBlur}
	   on:touchstart={handleTouchStart}
	   on:touchend={handleTouchEnd}
	   aria-describedby={tooltipId}
	   tabindex="0"
	   role="button"
   >
	   <slot />
   </div>

   <!-- Tooltip visível quando tooltipVisible for true -->
   {#if tooltipVisible}
	   <span
		   id={tooltipId}
		   role="tooltip"
		   class="tooltip-text {direction}"
		   aria-hidden={!tooltipVisible}
	   >
		   {text}
	   </span>
   {/if}
</div>

<style>

	@import url(../../style/global.css);

	.unstyled-button {
		all: unset;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.atl-tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip-text {
		position: absolute;
		background-color: var(--color-base);
		color: var(--color-inverse);
		padding: var(--spacing-8) var(--spacing-4);
		font-size: var(--font-size-12);
		line-height: var(--line-height-label);
		white-space: nowrap;
		border-radius: var(--border-radius-4);
		z-index: 10;
		transition: opacity 0.2s ease;
		opacity: 1;
		pointer-events: none;
	}

	.tooltip-text.top {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.top-start {
		bottom: 100%;
		left: 0;
		transform: translateY(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.top-end {
		bottom: 100%;
		right: 0;
		transform: translateY(calc(-1 * var(--spacing-8)));
	}

	.tooltip-text.bottom {
		top: 100%;
		left: 50%;
		transform: translateX(-50%) translateY(var(--spacing-8));
	}
	.tooltip-text.bottom-start {
		top: 100%;
		left: 0;
		transform: translateY(var(--spacing-8));
	}
	.tooltip-text.bottom-end {
		top: 100%;
		right: 0;
		transform: translateY(var(--spacing-8));
	}

	.tooltip-text.left {
		top: 50%;
		right: 100%;
		transform: translateY(-50%) translateX(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.left-start {
		top: 0;
		right: 100%;
		transform: translateX(calc(-1 * var(--spacing-8)));
	}
	.tooltip-text.left-end {
		bottom: 0;
		right: 100%;
		transform: translateX(calc(-1 * var(--spacing-8)));
	}

	.tooltip-text.right {
		top: 50%;
		left: 100%;
		transform: translateY(-50%) translateX(var(--spacing-8));
	}
	.tooltip-text.right-start {
		top: 0;
		left: 100%;
		transform: translateX(var(--spacing-8));
	}
	.tooltip-text.right-end {
		bottom: 0;
		left: 100%;
		transform: translateX(var(--spacing-8));
	}
</style>