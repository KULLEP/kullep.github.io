import React from 'react';

import { NavLink, Redirect  } from 'react-router-dom';
import { Button } from 'react-onsenui';

import ToolbarMy from '.././components/ToolbarMy';


const Home = () => (
	<div className='bg-home'>

	{
 // Переадресация если уже авторизирован
 window.infoUser.status === 'player' ? <Redirect from='/' to='/player-main-page'/> : null }
 { window.infoUser.status === 'admin' ? <Redirect from='/' to='/admin-main-page'/> : null }

 <ToolbarMy heightTitle='WORLD OF QUESTS' />
 <div className='menu-main-block'>
 <div className='menu-block'>
 <NavLink to='player-auth'>
 <Button modifier="large--cta">Игрок</Button>
 </NavLink>
 </div>
 <div className='menu-block'>
 <NavLink to='admin-auth'>
 <Button modifier="large--cta">Админ</Button>
 </NavLink>
 </div>
 </div>

 </div>
 )

export default Home;
