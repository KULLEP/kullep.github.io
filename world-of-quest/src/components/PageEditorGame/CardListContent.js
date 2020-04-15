import React from 'react';
import EditorQuestion from './EditorQuestion';
import EditorTeamsPlayers from './EditorTeamsPlayers';


const CardListContent = ({typeContent}) => {



	if(typeContent === 'questions') {
		return <EditorQuestion />
	} else if (typeContent === 'groups') {
		return (
			<div id='editorTeamsPlayersCard'>
			<EditorTeamsPlayers />
			</div>
			)
	}




}


export default CardListContent;