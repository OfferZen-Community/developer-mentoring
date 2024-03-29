import React, { useEffect } from 'react'
import capitalise from '@site/src/utils/capitalise.js'
import mentor_types from '../MentorTypeList/mentor_types.json'

export default function QuizResults({ quizResults, mentorTypeMatch }) {
	const mentorType = mentor_types.find(
		(type) => type.name === mentorTypeMatch.name
	)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="item shadow--lw padding--lg">
			<p>
				Your mentor type is: <br />
				<h2>
					<b>
						The {capitalise(mentorType.name)} {mentorType.icon}
					</b>
				</h2>
			</p>
			<p>{mentorType.description}</p>

			<h3>Results:</h3>
			<ol>
				{quizResults
					.sort((a, b) => b.percentage - a.percentage)
					.map((result, index) => (
						<li key={index}>
							{result.name.charAt(0).toUpperCase() +
								result.name.slice(1)}{' '}
							: {result.percentage}%
						</li>
					))}
			</ol>
		</div>
	)
}
