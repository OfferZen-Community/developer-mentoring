import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

import kebabCase from '@site/src/utils/kebabCase.js'

import QuizQuestion from './QuizQuestion'
import QuizResults from './QuizResults'

import quiz_questions from './quiz_questions.json'

export default function Quiz() {
	let uniqueMentorTypes = new Set()
	quiz_questions.forEach((question) => {
		uniqueMentorTypes.add(question.type)
	})

	const [mentorTypes] = useState(Array.from(uniqueMentorTypes))
	const [quizQuestions, setQuizQuestions] = useState([])
	const [quizSubmitted, setQuizSubmitted] = useState(false)
	const [quizResults, setQuizResults] = useState([])
	const [mentorTypeMatch, setMentorTypeMatch] = useState({
		name: '',
		percentage: 0,
	})
	const [userSelection, setUserSelection] = useState([])

	useEffect(() => {
		// Shuffle quiz question order
		setQuizQuestions(quiz_questions.sort(() => Math.random() - 0.5))
	}, [])

	const calculateQuizResults = () => {
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

		const highestTypeMatchPercentage = Math.max(
			...results.map((result) => {
				return result.percentage
			})
		)

		setQuizResults(results)
		setMentorTypeMatch(
			results.find(
				(result) => result.percentage === highestTypeMatchPercentage
			)
		)
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

	const handleSubmit = (e) => {
		e.preventDefault()

		calculateQuizResults()
		setQuizSubmitted(true)
	}

	if (quizSubmitted) {
		return (
			<QuizResults
				quizResults={quizResults}
				mentorTypeMatch={mentorTypeMatch}
			/>
		)
	} else {
		return (
			<div className="item shadow--md">
				<form onSubmit={handleSubmit} className={styles.quizQuestions}>
					{quizQuestions.map((props) => (
						<QuizQuestion
							key={kebabCase(props.text)}
							id={kebabCase(props.text)}
							{...props}
							selectAnswer={selectAnswer}
							removeAnswer={removeAnswer}
						/>
					))}

					<button
						className="button button--lg button--primary"
						type="submit"
						disabled={userSelection.length < 1}
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
