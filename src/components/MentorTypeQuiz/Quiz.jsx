import React, { useState } from 'react'
import styles from './styles.module.css'

import quizQuestions from './quizQuestions.json'
import QuizItem from './QuizQuestion'

export default function Quiz() {
	let uniqueMentorTypes = new Set()
	quizQuestions.forEach((question) => {
		uniqueMentorTypes.add(question.type)
	})

	const [mentorTypes] = useState(Array.from(uniqueMentorTypes))
	const [quizSubmitted, setQuizSubmitted] = useState(false)
	const [quizResults, setQuizResults] = useState([])
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
				type: mentorType,
				percentage: selectionPercentage,
			})
		})

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
			<div className="item shadow--md padding--lg">
				<ol>
					{quizResults
						.sort((a, b) => b.percentage - a.percentage)
						.map((result, index) => (
							<li key={index}>
								{result.type} : {result.percentage}%
							</li>
						))}
				</ol>
			</div>
		)
	} else {
		return (
			<div className="item shadow--md">
				<form onSubmit={handleSubmit} className={styles.quizQuestions}>
					{quizQuestions.map((props, idx) => (
						<QuizItem
							key={idx}
							{...props}
							selectAnswer={selectAnswer}
							removeAnswer={removeAnswer}
						/>
					))}

					<button className="button button--primary" type="submit">
						Submit
					</button>
				</form>
			</div>
		)
	}
}
