import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Spinner } from '@vkontakte/vkui';


const Load = props => (
	<Panel id={props.id}>
	<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
	<Spinner size="large" style={{ marginTop: 20 }} />
	</div>
	</Panel>
	);

Load.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Load;
