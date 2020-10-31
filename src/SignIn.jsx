import React from 'react';
import { Form } from '@unform/web';
import Input from './components/Input';

export default function SignIn() {
    function handleSubmit(data) {
        console.log(data);
        alert(JSON.stringify(data));
        // { email: 'test@example.com', password: '123456' }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input name="email" type="email" required />
            <Input name="password" type="password" required />

            <button type="submit">Sign in</button>
        </Form>
    );
}