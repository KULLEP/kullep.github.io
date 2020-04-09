import React from 'react';
import { SearchInput } from 'react-onsenui'; // Only import the necessary components
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css'


const SearchMy = () => {


	return(
		<SearchInput
		onChange='12'
		modifier='material'
		placeholder='Поиск игр' />
		)

}

export default SearchMy;