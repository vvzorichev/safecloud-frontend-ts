import PathToFile from './path-to-file';
import { connect } from 'react-redux';

import { IFolderStatusState } from '../../duck/i-folder-state';

const mapStateToProps = ({ folderStatus: { path } }: IFolderStatusState) => {
	return { path };
};

export type IState = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(PathToFile);