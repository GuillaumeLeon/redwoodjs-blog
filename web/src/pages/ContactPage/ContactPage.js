import {FieldError, Form, FormError, Label, Submit, TextAreaField, TextField, useForm} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast';

const CREATE_CONTACT = gql`
    mutation CreateContactMutation($input: CreateContactInput!) {
        createContact(input: $input) {
            id
        }
    }
`

const ContactPage = () => {

    const formMethods = useForm();

    const [create, { loading, error}] = useMutation(CREATE_CONTACT, {
        onCompleted: () => {
            toast.success("Thank for your submission");
            formMethods.reset();
        }
    });

    const onSubmit = (data) => {
        create({ variables: { input: data } })
    }

    return (
        <>
            <MetaTags title="Contact" description="Contact page" />

            <Toaster/>
            <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error} form={formMethods}>
                <FormError
                    error={error}
                    wrapperClassName="form-error"
                />
                <Label name="name" errorClassName="error">
                    Name
                </Label>
                <TextField 
                    name="name" 
                    validation={{ required: true }}
                    errorClassName="error"
                />
                <FieldError name="name" className="error"/>

                <Label name="email" errorClassName="error">
                    Email
                </Label>
                <TextField 
                    name="email"
                    validation={{
                        required: true,
                        // pattern: {
                        //     value: /^[^@]+@[^.]+\..+$/,
                        //     message: 'Please enter a valid email address'
                        // },
                    }}
                    errorClassName="error"
                />
                <FieldError name="email" className="error"/>

                <Label name="message" errorClassName="error">
                </Label>
                <TextAreaField 
                    name="message"
                    validation={{ required: true }}
                    errorClassName="error"
                />
                <FieldError name="message" className="error"/>

                <Submit disabled={loading}>Save</Submit>
            </Form>
        </>
    )
}

export default ContactPage