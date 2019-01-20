import React from 'react';
import axios from 'axios';
import { Container, List, ListItem, Button , Text} from 'native-base';

export default class PersonList extends React.Component {
    constructor(props){
        super(props);
        state = {
            persons: [
                {
                    name: "Paul"
                }
            ]
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res => {
                console.log("all good");
                console.log(res.data);
                this.setState({
                    persons: res.data
                }) 
            })
            console.log("after axios");
    }

    render() {
        return(
            <Container>
                    <Text>
                        Fucking
                    </Text>
                    <List>
                            {
                                this.state.persons &&(
                                this.state.persons.map( person => 
                                    <ListItem key={person.id} >{person.name} </ListItem>
                                ))
                            }
                    </List>
            </Container>
           /*  <ul>
                {
                    (this.state.persons != null) &&
                        this.state.persons.map( person => 
                        <li>{person.name}</li>
                        )
                    
                }
            </ul> */
        )
    }
}
    