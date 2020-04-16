import React from 'react';
import data_json_games from '.././json-info/games.json';
import data_json_teams from '.././json-info/teams.json';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const ListGames = ({typeContent, nameContent}) => {

	const nameEdit = (e) => {
		window.infoUser.editName = e.target.id;
		localStorage.setItem('gameEditor', window.infoUser.editName);
	};


	if(typeContent === 'games') {
		if(nameContent === undefined || nameContent === '') {
			return (
				data_json_games.map(arr => {
					let nameGame = arr.game;
					return (
						<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
						<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-game-for-admin'>
						<Button id={nameGame} inverted color='orange'>
						{nameGame}
						</Button>							 
						</NavLink>

						<NavLink onClick={nameEdit} className='col-6 text-center' to='/edit-game-for-admin'>
						<Button id={nameGame} inverted color='blue'>
						Редактировать
						</Button>							 
						</NavLink>
						</div>
						)
				})
				)
		} else if (nameContent !== undefined) {
			return (
				data_json_games.filter(arr => { }

					data_json_games.map(arr => {
						let nameGame = arr.game;
						let regexp = new RegExp(`${nameContent}`, 'igm');
						let result = nameGame.match(regexp);
						if (result) {
							return (
								<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
								<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-game-for-admin'>
								<Button id={nameGame} inverted color='orange'>
								{nameGame}
								</Button>							 
								</NavLink>

								<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-game-for-admin'>
								<Button id={nameGame} inverted color='blue'>
								Редактировать
								</Button>							 
								</NavLink>
								</div>
								)
						}
					}
					))
			}
		} else if (typeContent === 'groups') {
			if(nameContent === undefined) {
				return (
					data_json_teams.map(arr => (
						<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
						<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-team-for-admin'>
						<Button id={arr.code} inverted color='orange'>
						{arr.name}
						</Button>							 
						</NavLink>

						<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-team-for-admin'>
						<Button id={arr.code} inverted color='blue'>
						Редактировать
						</Button>							 
						</NavLink>
						</div>
						))
					)
			} else if (nameContent !== undefined) {
				return (
					data_json_teams.map(arr => {
						let nameTeam = arr.name;
						let code = arr.code;
						let regexp = new RegExp(`${nameContent}`, 'igm');
						let result = nameTeam.match(regexp);

						if (result) {
							return (
								<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
								<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-team-for-admin'>
								<Button id={code} inverted color='orange'>
								{nameTeam}
								</Button>							 
								</NavLink>

								<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-team-for-admin'>
								<Button id={code} inverted color='blue'>
								Редактировать
								</Button>							 
								</NavLink>
								</div>
								)
						}
					}
					))
			}
		}
	}

	export default ListGames;
