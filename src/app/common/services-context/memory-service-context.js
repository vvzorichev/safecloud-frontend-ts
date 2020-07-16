import React from 'react';

const {
	Provider : MemoryServiceProvider,
	Consumer : MemoryServiceConsumer
} =	React.createContext();

export {
	MemoryServiceProvider,
	MemoryServiceConsumer
};