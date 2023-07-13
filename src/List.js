import { Button, Card, Row, Col } from "react-bootstrap"
import { FaCheck, FaTimes } from "react-icons/fa"

const List = ({ todolist, deleteTodo, finishTodo }) => {
  return todolist.map((value, index) => {
    return (
      <Card className="mt-5">
        <Card.Body>
          <Row>
            {/* nama todo */}
            <Col>
              <h3>{value.todoName}</h3>
            </Col>

            {/* button */}
            <Col xl="1">
              <Button
                onClick={() => finishTodo(index)}
                variant={value.status ? "secondary" : "primary"}
              >
                {value.status ? <FaCheck /> : <FaTimes />}
              </Button>
            </Col>
          </Row>
          <Button
            variant="danger"
            className="mt-2"
            onClick={() => deleteTodo(index)}
          >
            hapus
          </Button>
        </Card.Body>
      </Card>
    )
  })
}
export default List
