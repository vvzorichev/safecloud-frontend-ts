import React from 'react';

import PathToFile from './path-to-file';
import { connect } from 'react-redux';

const mapStateToProps = ({ folderStatus: { path } }) => {
	return { path };
};

const PathToFileContainer = ({ path }) => {
	return <PathToFile path={path} />;
};

export default connect(mapStateToProps)(PathToFileContainer);