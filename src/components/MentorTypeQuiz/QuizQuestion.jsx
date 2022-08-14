import React, { useState } from 'react'
import styles from './styles.module.css'

export default function QuizQuestion({
	text,
	type,
	selectAnswer,
	removeAnswer,
}) {
	const [checkboxSelected, setCheckboxSelected] = useState(false)

	const selectCheckbox = (answer) => {
		setCheckboxSelected(!checkboxSelected)

		checkboxSelected ? removeAnswer(answer) : selectAnswer(answer)
	}

	return (
		<div
			className={styles.checkboxContainer}
			onClick={() => selectCheckbox(type)}
		>
			<input type="hidden" value={type}></input>
			<input type="checkbox" id="id" value=""></input>
			<label for="">
				<div className={styles.checkbox}>
					<div className="checkmark">
						{checkboxSelected ? '✓' : ''}
					</div>
				</div>
				<div className="question">{text}</div>
			</label>
		</div>
	)
}
