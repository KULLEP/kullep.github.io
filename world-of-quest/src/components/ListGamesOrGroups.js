import React from 'react';
import data_json_games from '.././json-info/games.json';
import data_json_teams from '.././json-info/teams.json';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const ListGames = ({typeContent, nameContent}) => {

	console.log(nameContent);

	if(typeContent === 'games') {
		if(nameContent == undefined) {
			return (
				data_json_games.map(arr => (
					<div className='center-flex'>
					<NavLink className='link-disable' to='/info-game-for-admin'>
					<Button inverted color='orange'>
					{arr.game}
					</Button>
					</NavLink>
					<br/>
					</div>
					))
				)
		} else if (nameContent !== undefined) {
			return (
				data_json_games.map(arr => {
					if(nameContent === arr.game || nameContent === undefined || nameContent === '') {
						return (
							<div className='center-flex'>
							<NavLink className='link-disable' to='/info-game-for-admin'>
							<Button inverted color='orange'>
							{arr.game}
							</Button>
							</NavLink>
							<br/>
							</div>
							)
					}
				}
				))
		}
	} else if (typeContent == 'groups') {
		if(nameContent == undefined) {
			return (
				data_json_teams.map(arr => (
					<div className='center-flex'>
					<NavLink className='link-disable' to='/info-team-for-admin'>
					<Button inverted color='orange'>
					{arr.team}
					</Button>
					</NavLink>
					<br/>
					</div>
					))
				)
		} else if (nameContent !== undefined) {
			return (
				data_json_teams.map(arr => {
					if(nameContent === arr.team || nameContent === undefined || nameContent === '') {
						return (
							<div className='center-flex'>
							<NavLink className='link-disable' to='/info-team-for-admin'>
							<Button inverted color='orange'>
							{arr.team}
							</Button>
							</NavLink>
							<br/>
							</div>
							)
					}
				}
				))
		}
	}
}

export default ListGames;
