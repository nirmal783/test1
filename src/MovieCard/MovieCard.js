import Card from 'react-bootstrap/Card';
import './MovieCard.css';

const MovieCard = ({
    title,
    rating,
    releaseDate
}) => {
    return (
        <Card
            bg="light"
            key="Light"
            text="dark"
        >
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    Rating: {rating} <br />
                    Release Date: {releaseDate}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
