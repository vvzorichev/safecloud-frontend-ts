import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import ErrorBoundary from './app/common/error-boundary';

import { 
	FileServiceProvider, 
	MemoryServiceProvider } from './app/common/services-context';

import { 
	FileService, 
	MemoryService} from './services';

import App from './app';

const fileService = new FileService();
const memoryService = new MemoryService();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<FileServiceProvider value={fileService}>
					<MemoryServiceProvider value={memoryService}>
						<App />
					</MemoryServiceProvider>
				</FileServiceProvider>
			</ErrorBoundary>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
