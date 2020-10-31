import React, { useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import Input from './components/Input';
import { Scope } from '@unform/core'
import * as Yup from 'yup'

/*
const initialData = {
    email: 'teste@gmail.com.br'
}
*/

export default function SignIn() {
    const formRef = useRef(null)

    useEffect(() => {
        // Se as informações vierem do backend
        setTimeout(() => {
            formRef.current.setData({
                name: 'Teste',
                email: 'teste@gmail.com',
                address: {
                    street: 'Rua Teste'
                }
            })
        }, 300)
    }, [])


    async function handleSubmit(data, { reset }) {
        try {
            console.log(formRef.current);
            /*
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório'),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                address: Yup.object.shape({
                    street: Yup.string()
                        .min(3, 'No mínimo 3 caracteres')
                        .required('O endereço é obrigatório'),
                })
            })

            await schema.validate(data, {
                abortEarly: false
            })
            */
            
        } catch (error) {
            alert(error)
            if (error instanceof Yup.ValidationError) {
            }
        }

        // if (data.name === '') {
        //     formRef.current.setFieldError('name', 'O nome é obrigatório')
        //     //formRef.current.setErrors({ name: 'O nome é obrigatório', password: 'O password é obrigatório'})
        // } else {
        //     alert(JSON.stringify(data));
        // }

        // { email: 'test@example.com', password: '123456' }
        reset()
    }

    return (
        // <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Form ref={formRef} onSubmit={handleSubmit}>
            {/* <Input name="email" type="email" defaultValue={'teste@ihsl.com.br'} required /> */}
            <Input name="name" type="name" />
            <Input name="email" type="email" />
            <Input name="password" type="password" />

            <Scope path="address">
                <Input name="street" />
                <Input name="number" />
            </Scope>

            <button type="submit">Sign in</button>
        </Form>
    );
}