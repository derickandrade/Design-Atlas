<script>
	export let type = 'default';
	export let status = 'default';
	export let state = 'filled';
	export let iconLeft = true;
	export let iconRight = true;
	export let placeholder = 'Placeholder';
	export let value = '';

	$: htmlType = type === 'default' ? 'text' : type;
	$: isDisabled = status === 'disabled';
	$: isReadOnly = status === 'disabled';
	$: isSuccess = status === 'success';
	$: isError = status === 'error';

	$: isEmptyDisabled =
		type === 'default' &&
		status === 'disabled' &&
		state === 'not filled' &&
		!iconLeft &&
		!iconRight;

	$: isFilledDisabled =
		type === 'default' && status === 'disabled' && state === 'filled' && !iconLeft && !iconRight;

	function handleInput() {
		console.log('Value:', value);
	}
</script>

<div
	class="atl-field {status} {state} {iconLeft ? 'with-icon-left' : ''} {iconRight
		? 'with-icon-right'
		: ''}"
>
	{#if iconLeft}
		<span class="icon left"
			><svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask
					id="mask0_1804_2954"
					style="mask-type:alpha"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="24"
					height="24"
				>
					<rect width="24" height="24" fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_1804_2954)">
					<path
						d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18Z"
						fill="#BEBEBE"
					/>
				</g>
			</svg>
		</span>
	{/if}

	<input
		type={htmlType}
		bind:value
		on:input={handleInput}
		class:empty-disabled={isEmptyDisabled}
		class:filled-disabled={isFilledDisabled}
		class:success={isSuccess}
		class:error={isError}
		{placeholder}
		disabled={isDisabled}
		readonly={isReadOnly}
	/>

	{#if iconRight}
		<span class="icon right"
			><svg
				width="22"
				height="15"
				viewBox="0 0 22 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75002 3 8.68752 3.4375 7.81252 4.3125C6.93752 5.1875 6.50002 6.25 6.50002 7.5C6.50002 8.75 6.93752 9.8125 7.81252 10.6875C8.68752 11.5625 9.75002 12 11 12ZM11 10.2C10.25 10.2 9.61252 9.9375 9.08752 9.4125C8.56252 8.8875 8.30002 8.25 8.30002 7.5C8.30002 6.75 8.56252 6.1125 9.08752 5.5875C9.61252 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.76669 15 6.72919 14.4 4.88752 13.2C3.04586 12 1.59169 10.4167 0.525024 8.45C0.441691 8.3 0.379191 8.14583 0.337524 7.9875C0.295858 7.82917 0.275024 7.66667 0.275024 7.5C0.275024 7.33333 0.295858 7.17083 0.337524 7.0125C0.379191 6.85417 0.441691 6.7 0.525024 6.55C1.59169 4.58333 3.04586 3 4.88752 1.8C6.72919 0.6 8.76669 0 11 0C13.2334 0 15.2709 0.6 17.1125 1.8C18.9542 3 20.4084 4.58333 21.475 6.55C21.5584 6.7 21.6209 6.85417 21.6625 7.0125C21.7042 7.17083 21.725 7.33333 21.725 7.5C21.725 7.66667 21.7042 7.82917 21.6625 7.9875C21.6209 8.14583 21.5584 8.3 21.475 8.45C20.4084 10.4167 18.9542 12 17.1125 13.2C15.2709 14.4 13.2334 15 11 15ZM11 13C12.8834 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8834 2 11 2C9.11669 2 7.38752 2.49583 5.81252 3.4875C4.23752 4.47917 3.03336 5.81667 2.20002 7.5C3.03336 9.18333 4.23752 10.5208 5.81252 11.5125C7.38752 12.5042 9.11669 13 11 13Z"
					fill="#BEBEBE"
				/>
			</svg>
		</span>
	{/if}
</div>

<style>
	.atl-field {
		display: inline-flex;
		align-items: center;
		background-color: var(--color-base-transparent);
		font-size: var(--font-size-16);
		width: 200px;
		height: 40px;
	}

	.atl-field input {
		box-sizing: content-box;
		width: 176px;
		height: 20px;

		gap: var(--spacing-8);
		padding: var(--spacing-8) var(--spacing-12) var(--spacing-8) var(--spacing-12);
		border: var(--border-width-04) solid var(--border-color-base);
		border-radius: var(--radius-sm);
		background-color: var(--color-base-transparent);

		min-width: var(--field-min-widht);
		max-width: var(--field-max-widht);
		min-height: var(--field-min-height);

		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-16);
		line-height: 125%;
	}

	.atl-field input:hover {
		background: var(--colors-base-transparent);
		border: 1px solid var(--border-color-accent);
	}

	.atl-field input:focus {
		border: 2px solid var(--border-color-focus);
	}

	.atl-field input.empty-disabled {
		background: var(--bgn-base);
		border-top: 0.4px solid var(--border-color-base);
	}

	.atl-field input.filled-disabled {
		background: var(--bgn-base);
		color: var(--color-base-hover);
		border-top: 0.4px solid var(--border-color-base);
	}

	.atl-field input.success {
		border: 1px solid var(--border-color-sucess);
	}

	.atl-field input.error {
		border: 1px solid var(--border-color-error);
	}

	.atl-field.with-icon-left input {
		padding-left: var(--spacing-8);
	}

	.atl-field.with-icon-right input {
		padding-right: var(--spacing-8);
	}

	.atl-field .icon {
		display: flex;
		align-items: center;
		justify-content: center;
		size: 24;
	}
</style>
