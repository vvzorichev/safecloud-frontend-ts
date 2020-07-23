import React from 'react';

import { FileServiceConsumer } from '../services-context';

const withFileService = () => (Wrapped: React.FC): React.FC => (props: any) => {
	return (
		<FileServiceConsumer>
			{
				(fileService: any) => {
					return (
						<Wrapped {...props} fileService={fileService}/>
					);
				}
			}
		</FileServiceConsumer>
	);
};

export default withFileService;