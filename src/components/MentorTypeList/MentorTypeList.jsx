import React, { useEffect } from 'react'

import mentorTypes from '../../../docs/getting-started-with-mentoring/For Mentors/mentor_types.json'

const kebabCase = (string) =>
	string
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase()

export default function MentorTypeList() {
	useEffect(() => {
		mentorTypes.forEach((type, idx) => {
			type.id = idx + 1 + '-' + kebabCase(type.name)
		})
	})

	return (
		<div>
			{mentorTypes.map((props, idx) => {
				return (
					<div className="theme-doc-markdown markdown" key={idx}>
						<h3 className="anchor" id={props.id}>
							{props.name} {props.icon}
							<a
								class="hash-link"
								href={'#' + props.id}
								title="Direct link to heading"
							>
								​
							</a>
						</h3>

						<p>{props.description}</p>
					</div>
				)
			})}
		</div>
	)
}
