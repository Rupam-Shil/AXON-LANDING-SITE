import React from 'react';
import Styles from '../../styles/scoped/PrimaryButton.module.scss';

function Arrow({ type = 'primary' }) {
	return (
		<svg
			width="14"
			height="8"
			viewBox="0 0 25 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 7.8761C0 7.64404 0.0921872 7.42148 0.256282 7.25739C0.420376 7.09329 0.642936 7.0011 0.875 7.0011H21.5128L16.0055 1.49561C15.8412 1.3313 15.7489 1.10846 15.7489 0.876105C15.7489 0.643748 15.8412 0.420907 16.0055 0.256605C16.1698 0.0923035 16.3926 5.47453e-09 16.625 0C16.8574 -5.47453e-09 17.0802 0.0923035 17.2445 0.256605L24.2445 7.2566C24.326 7.33788 24.3906 7.43444 24.4347 7.54075C24.4789 7.64705 24.5016 7.76101 24.5016 7.8761C24.5016 7.9912 24.4789 8.10516 24.4347 8.21146C24.3906 8.31777 24.326 8.41433 24.2445 8.4956L17.2445 15.4956C17.0802 15.6599 16.8574 15.7522 16.625 15.7522C16.3926 15.7522 16.1698 15.6599 16.0055 15.4956C15.8412 15.3313 15.7489 15.1085 15.7489 14.8761C15.7489 14.6437 15.8412 14.4209 16.0055 14.2566L21.5128 8.7511H0.875C0.642936 8.7511 0.420376 8.65892 0.256282 8.49482C0.0921872 8.33073 0 8.10817 0 7.8761V7.8761Z"
				fill="none"
				className={`${type === 'primary' ? Styles.parrow : Styles.sarrow}`}
			/>
		</svg>
	);
}

function PrimaryButton({
	type = 'primary',
	text = 'Try it for free',
	onClick = null,
}) {
	return (
		<button
			className={`${type === 'primary' ? Styles.primary : Styles.secondary} ${
				Styles.btn
			}`}
			onClick={() => {
				if (onClick) onClick();
			}}
		>
			<span>{text}</span>
			<div className={`${Styles.arrow} flex`}>
				<Arrow type={type} />
			</div>
		</button>
	);
}

export default PrimaryButton;
