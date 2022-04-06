import React from 'react';

function Member({ name, photo }) {
	return (
		<div>
			<img src={photo} alt='Avatar'></img>
			<span>{name}</span>
		</div>
	);
}

export { Member };
