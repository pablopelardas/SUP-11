import React from 'react';
import Member from '../Member';

// El objetivo del componente es mostrar a los que estan en penitencia y botón con la opción de remover a un miembro de al penitencia.

// Cada persona tiene una foto, un boton para sacarlo y el nombre

function Penitence({ penitence, removePenitence }) {
	return (
		<section>
			<h2>Penitence</h2>
			<div>
				{penitence?.map((member) => {
					return (
						<article className='penitence__member' key={member.id}>
							<button onClick={() => removePenitence(member)}>X</button>
							<Member name={member.name} photo={member.photo} key={member.id} />
						</article>
					);
				})}
			</div>
		</section>
	);
}

{
	/* {penitence?.map((member) => {
			<div>
				<span>{member.name}</span>
				<img src={member.photo} alt={member.name}></img>
				<button onClick={() => removePenitence(member)}>X</button>
			</div>;
		})} */
}

export { Penitence };
