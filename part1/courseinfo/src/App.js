import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercise }) => (
	<p>
		{part} {exercise}
	</p>
);

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((part, index) => (
				<Part key={index} part={part.name} exercise={part.exercises} />
			))}
		</>
	);
};

const Total = ({ parts }) => <p>Number of exercises {parts.reduce((total, part) => total + part.exercises, 0)}</p>;

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
