export default function Card(props) {
	return (
		<div className='card-main'>
			<div className='card'>
				<div className='card card-img'>
					<img
						src={props.imageUrl}
						alt={props.title}
						height={160}
						width={140}
					/>
				</div>
			</div>

			<div className='card-location'>
				<h4>Japan</h4>
				<p>
					<a href={props.googleMapsUrl}>View on Google maps</a>
				</p>
			</div>

			<div className='card-details'>
				<div className='card-details card-information'>
					<h1>{props.title}</h1>
				</div>

				<div className='card-details card-dates'>
					<p>
						{props.startDate} - {props.endDate}
					</p>
				</div>

				<div className='card-details card-desc'>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
