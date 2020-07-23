import React from 'react';

import { MemoryServiceConsumer } from '../services-context';

const withMemoryService = () => (Wrapped: React.FC): React.FC => (props: any) => {
	return (
		<MemoryServiceConsumer>
			{
				(memoryService: any) => {
					return (
						<Wrapped {...props} memoryService={memoryService}/>
					);
				}
			}
		</MemoryServiceConsumer>
	);
};

export default withMemoryService;