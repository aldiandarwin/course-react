import { Form, Button, Stack, Card } from "react-bootstrap"
import { FaFolderPlus } from "react-icons/fa"

const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
    <Card className="mt-5">
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            type="text"
            placeholder="masukan todo..."
            onChange={handleChangeTodoName}
            value={todoName}
          />
          <Button onClick={addTodo}>
            <FaFolderPlus />
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default Add
