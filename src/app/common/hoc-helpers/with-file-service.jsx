import React from 'react';

import { FileServiceConsumer } from '../services-context';

const withFileService = () => (Wrapped) => {
	return (props) => {
		return (
			<FileServiceConsumer>
				{
					(fileService) => {
						return (
							<Wrapped {...props} fileService={fileService}/>
						);
					}
				}
			</FileServiceConsumer>
		);
	};
};

export default withFileService;