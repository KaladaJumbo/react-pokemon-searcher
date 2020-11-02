import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    data: [],
    original: [],
    filter: "",
    name: "",
    hp: 0,
    front: "",
    back: ""
  }

  changeFilter = (word) => {
    const data = this.state.original
    let results = []
    results = data.filter(p => p.name.includes(word))
    
    this.setState({
      filter: word,
      data: results
    })

  }

  FormFiller = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = () => {
    const meta = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      "name": this.state.name,
      "hp": this.state.hp,
      "sprites": {
        "front": this.state.front,
        "back": this.state.back
      }
      })
    }

    const prevState = this.state.original

    fetch("http://localhost:3000/pokemon", meta)
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: [...prevState,
          data
        ],
        original: [...prevState,
          data
        ]
      })
    })
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data,
        original: data
      },() => {console.log(this.state.data);})

    })
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm formFiller= {this.FormFiller} submitHandler= {this.submitHandler} name= {this.state.name} hp= {this.state.hp} front= {this.state.front} back= {this.state.back} />
        <br />
        <Search filter={this.state.filter} changeFilter= {this.changeFilter} />
        <br />
        <PokemonCollection data= {this.state.data} />
      </Container>
    )
  }
}

export default PokemonPage
