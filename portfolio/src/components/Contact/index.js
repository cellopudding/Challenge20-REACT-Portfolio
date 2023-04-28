import React from 'react'
import "./contact.css"
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const SERVICE_ID = "service_4kan5a9"
const TEMPLATE_ID = "template_kakbibr"
const PUBLIC_KEY = "mOHBaLWFK8F_baUhk"


export default function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <>
    <div class='contactwrapper'>
     <div class='contact'>
      <h1 class='headings'>CONTACT</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
    </div>
    
     
    </>
  )
}
