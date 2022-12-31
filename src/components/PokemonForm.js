import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setPokemon}) {

  const [pokeForm, setPokeForm] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
     
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setPokeForm({...pokeForm, [name]: value})
  }
  const handleSubmit = (e) => {
    const newPokemon = {
      name: pokeForm.name,
      hp: pokeForm.hp,
      sprites: {
        front: pokeForm.frontUrl,
        back: pokeForm.backUrl
      }
    }
   

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(newPokemon)
    })
     .then(res => res.json())
     .then((newPokeData) => 
       setPokemon((currentPokemon) => [...currentPokemon, newPokeData])
     )

     setPokeForm({
      name: "",
      hp: "",
      frontUrl : "",
      backUrl : "",
       }

     )

  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input value={pokeForm.name} onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={pokeForm.hp} onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input value={pokeForm.frontUrl} onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input value={pokeForm.backUrl} onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
  }

export default PokemonForm;
