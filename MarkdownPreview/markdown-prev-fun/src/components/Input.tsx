import Form from 'react-bootstrap/Form';

type formProps = {
  text: string;
  updateMarkdown: Function;
};

const Input = ({ text, updateMarkdown }: formProps) => {
  return (
    <Form.Control
      className="p-5"
      as="textarea"
      rows={45}
      value={text}
      onChange={updateMarkdown}
    ></Form.Control>
  );
};

export default Input;
