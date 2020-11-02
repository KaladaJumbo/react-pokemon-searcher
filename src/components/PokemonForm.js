import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {
          e.preventDefault()
          console.log("submitting form...")
          this.props.submitHandler()
        }}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value= {this.props.name} onChange= {(e) => {this.props.formFiller(e)}} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value= {this.props.hp} onChange= {(e) => {this.props.formFiller(e)}} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value= {this.props.front} onChange= {(e) => {this.props.formFiller(e)}} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value= {this.props.back} onChange= {(e) => {this.props.formFiller(e)}} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
