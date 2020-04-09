import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-onsenui';
import { NavLink } from 'react-router-dom';

import data_json_games from '.././json-info/games.json';

const GameBlock = ({gameNAME}) => {

	var arr_g;

	for(let i = 0; i < data_json_games.length; i++) {
		if(data_json_games[i].game == gameNAME) {	 
			arr_g = data_json_games[i];
			break;
		}
	}

	return(
		<NavLink className='link-disable' to='/page-info-game'>
		 <Button modifier="large--cta">{arr_g.game}</Button>
		</NavLink>
		)
}


export default GameBlock;
