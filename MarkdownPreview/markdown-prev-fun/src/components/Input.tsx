import React from 'react';
import Form from 'react-bootstrap/Form';

type formProps = {
  text: string;
  updateMarkdown: React.ChangeEventHandler | undefined;
};

const Input = ({ text, updateMarkdown }: formProps) => {
  return (
    <Form.Control
      id="editor"
      className="p-5"
      as="textarea"
      rows={45}
      value={text}
      onChange={updateMarkdown}
    ></Form.Control>
  );
};

export default Input;
