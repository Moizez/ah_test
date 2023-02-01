import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeScreen from '../screens/HomeScreen/indes';
import SchedulesScreen from '../screens/SchedulesScreen';
import SearchScreen from '../screens/SearchScreen';

const Router = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="agendamento/*" element={<SchedulesScreen />} />
				<Route path="busca/*" element={<SearchScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;