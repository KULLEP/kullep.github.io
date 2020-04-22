import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


import { ajax_get_list_games_or_groups } from './../GetInfoAjax/AdminAjax';


const ListGames = ({typeContent, nameContent}) => {




	const nameEdit = (e) => {
		window.infoUser.editID = e.target.id;
		localStorage.setItem('gameEditor', window.infoUser.editName);
	};

	// window.location = '#';
	// console.log(typeContent);



	if(typeContent === 'games') {
		ajax_get_list_games_or_groups('games');
			let data = window.infoUser.info_games_admin;

			if(nameContent === undefined || nameContent === '') {
				return (
					data.map(arr => {
						let id_game = arr.id;
						return (
							<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
							<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-game-for-admin'>
							<Button id={id_game} inverted color='orange'>
							{id_game}
							</Button>							 
							</NavLink>

							<NavLink onClick={nameEdit} className='col-6 text-center' to='/edit-game-for-admin'>
							<Button id={id_game} inverted color='blue'>
							Редактировать
							</Button>							 
							</NavLink>
							</div>
							)
					})
					)
			} else if (nameContent !== undefined) {
				return (
					data.filter(arr => {
						let id_game = arr.id;
						let regexp = new RegExp(`${nameContent}`, 'igm');
						let result = id_game.match(regexp);
						return result;
					}).map(arr => {
						let id_game = arr.id;
						return (	
							<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
							<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-game-for-admin'>
							<Button id={id_game} inverted color='orange'>
							{id_game}
							</Button>							 
							</NavLink>

							<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-game-for-admin'>
							<Button id={id_game} inverted color='blue'>
							Редактировать
							</Button>							 
							</NavLink>
							</div>
							)					
					}
					))
			}
		} else if (typeContent === 'groups') {
			ajax_get_list_games_or_groups('teams');
				let data = window.infoUser.info_teams_admin;

				if(nameContent === undefined) {
					return (
						data.map(arr => (
							<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
							<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-team-for-admin'>
							<Button id={arr.id} inverted color='orange'>
							{arr.id}
							</Button>							 
							</NavLink>

							<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-team-for-admin'>
							<Button id={arr.id} inverted color='blue'>
							Редактировать
							</Button>							 
							</NavLink>
							</div>
							))
						)
				} else if (nameContent !== undefined) {
					return (
						data.filter(arr => {
							let id_team = arr.id;
							let regexp = new RegExp(`${nameContent}`, 'igm');
							let result = id_team.match(regexp);
							return result;
						}).map(arr => {
							let id_team = arr.id;
							let code = arr.id;
							return (
								<div className='col-12 p-0 m-0 mb-3 row row-justify-center content-center'>
								<NavLink onClick={nameEdit} className='col-6 text-center' to='/info-team-for-admin'>
								<Button id={code} inverted color='orange'>
								{id_team}
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
						))
				}
			}
		}

		export default ListGames;
