import React from "react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Form } from "react-bootstrap";

function Form() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const schema = yup.object().shape({
    firstName: yup.string().required("Firstname is required"),
    lastName: yup.string().required("Lastname is required"),
    phone: yup.number().required("Enter a valid phone number"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Firstname:</Form.Label>
        <Form.Control name="firstName" placeholder="Firstname" ref={register} />
        {errors.firstName && <Form.Text>{errors.firstName.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Lastname:</Form.Label>
        <Form.Control name="lastName" placeholder="Lastname" ref={register} />
        {errors.lastName && <Form.Text>{errors.lastName.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Telephone:</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          placeholder="Telephone"
          ref={register}
        />
        {errors.phone && <Form.Text>{errors.phone.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control name="email" placeholder="email" ref={register} />
        {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Form;
