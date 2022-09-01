import React, { useState } from 'react'
import styles from './styles.module.css'

import quizQuestions from './quiz_questions.json'
import QuizItem from './QuizQuestion'
import QuizResults from './QuizResults'

export default function Quiz() {
	let uniqueMentorTypes = new Set()
	quizQuestions.forEach((question) => {
		uniqueMentorTypes.add(question.type)
	})

	const [mentorTypes] = useState(Array.from(uniqueMentorTypes))
	const [quizSubmitted, setQuizSubmitted] = useState(false)
	const [quizResults, setQuizResults] = useState([])
	const [typeMatch, setTypeMatch] = useState({
		name: '',
		percentage: 0,
	})
	const [userSelection, setUserSelection] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()

		let availableMentorTypesCount = 0
		let selectedMentorTypesCount = 0

		let results = []

		mentorTypes.forEach((mentorType) => {
			availableMentorTypesCount = quizQuestions.filter(
				(question) => question.type === mentorType
			).length

			selectedMentorTypesCount = userSelection.filter(
				(selection) => selection === mentorType
			).length

			let selectionPercentage = Math.round(
				(selectedMentorTypesCount / availableMentorTypesCount) * 100
			)

			results.push({
				name: mentorType,
				percentage: selectionPercentage,
			})
		})

		const bestMentorTypeMatch = Math.max(
			...results.map((result) => {
				return result.percentage
			})
		)

		setTypeMatch(
			results.find((result) => result.percentage === bestMentorTypeMatch)
		)

		setQuizResults(results)
		setQuizSubmitted(true)
	}

	const selectAnswer = (answer) => {
		setUserSelection([...userSelection, answer])
	}

	const removeAnswer = (answer) => {
		let answerAdded = userSelection.indexOf(answer)

		if (answerAdded === -1) {
			return
		}

		userSelection.splice(answerAdded, 1)
	}

	if (quizSubmitted) {
		return (
			<QuizResults
				quizResults={quizResults}
				mentorTypeMatch={typeMatch}
			/>
		)
	} else {
		return (
			<div className="item shadow--md">
				<form onSubmit={handleSubmit} className={styles.quizQuestions}>
					{quizQuestions.map((props) => (
						<QuizItem
							key={props.text}
							{...props}
							selectAnswer={selectAnswer}
							removeAnswer={removeAnswer}
						/>
					))}

					<button
						className="button button--lg button--primary"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
