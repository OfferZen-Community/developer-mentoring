import React, { useEffect, useState } from 'react'

import capitalise from '@site/src/utils/capitalise.js'
import kebabCase from '@site/src/utils/kebabCase'

import mentor_types from './mentor_types.json'

export default function MentorTypeList() {
	const [mentorTypes, setMentorTypes] = useState([])

	useEffect(() => {
		setMentorTypes(mentor_types)

		// Add kebab-case ID so the heading link can be added
		mentorTypes.forEach((type, idx) => {
			type.id = idx + 1 + '-' + kebabCase(type.name)
		})
	})

	return (
		<div>
			{mentorTypes.map((props, idx) => {
				return (
					<div className="theme-doc-markdown markdown" key={idx}>
						<h2 className="anchor" id={props.id}>
							The {capitalise(props.name)} {props.icon}
							<a
								class="hash-link"
								href={'#' + props.id}
								title="Direct link to heading"
							>
								​
							</a>
						</h2>

						<p>{props.description}</p>
					</div>
				)
			})}
			<br />
		</div>
	)
}
