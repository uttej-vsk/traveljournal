import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './data';

function App() {
	const cards = data.map((item) => {
		return (
			<Card
				title={item.title}
				location={item.location}
				googleMapsUrl={item.googleMapsUrl}
				startDate={item.startDate}
				endDate={item.endDate}
				description={item.description}
				imageUrl={item.imageUrl}
			/>
		);
	});
	return (
		<>
			<Header />
			{cards}
		</>
	);
}

export default App;
