import { FileEarmarkText } from "react-bootstrap-icons";

function CardData({ data, name }) {

	return (
		<>
			<div
				className={`d-flex p-2 border shadow-sm text-center`}
			>
				<FileEarmarkText size={24} />
				<p className="lead">{name}</p>
				<h2>Data</h2>
			</div>
		</>
	);
}

CardData.defaultProps = {
	data: 0,
};

export default CardData;
