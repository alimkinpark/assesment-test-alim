import { Card, Badge } from "react-bootstrap";

function CardComponent({ data }) {
  return (
    <Card>
      <Card.Body>
        <h5 className="mb-3">{data.name}</h5>
        <p className="m-0">Language : {data.language ? data.language : "-"}</p>
        <p className="m-0">Last Update : {data.updated_at}</p>
        <p>
          Watcher : <Badge bg="info">{data.watchers}</Badge>
        </p>
        <a
          href={data.svn_url}
          target="_blank"
          className="btn btn-outline-success btn-sm"
        >
          Open Github
        </a>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
