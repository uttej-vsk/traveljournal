import logo from '../Fill219.png';

export default function Card(props) {
	return (
		<div className='card-main'>
			<section className='card'>
				<img
					className='card card-img'
					src={props.imageUrl}
					alt={props.title}
					height={160}
					width={140}
				/>
			</section>

			<section className='card-details'>
				<p className='card-details card-location'>
					<span>
						<img
							className='card-location-img'
							src={logo}
							alt='tag'
						></img>
					</span>
					<span>{props.location}</span>
					<span>
						<a
							className='card-location-link'
							href={props.googleMapsUrl}
							alt={props.title}
						>
							Link to Google maps
						</a>
					</span>
				</p>

				<p className='card-details card-information'>
					<h1>{props.title}</h1>
				</p>

				<p className='card-details card-dates'>
					{props.startDate} - {props.endDate}
				</p>

				<p className='card-details card-desc'>
					<p>{props.description}</p>
				</p>
			</section>
		</div>
	);
}
