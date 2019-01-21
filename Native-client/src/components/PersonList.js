import React from 'react';
import axios from 'axios';
import { getPerson, createPerson }  from '../core/modules/person/personApi'
import { Container, List, ListItem, Button , Text} from 'native-base';


export default class PersonList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            persons: []
        }
    }


    componentDidMount() {
        getPerson().then( res => {
            console.log(" all good");
            console.log(res);
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
                        {this.state.persons.name}
                    </Text>
                    <Button onPress={this.addNewPerson}>
                        <Text>
                            Add new Person
                        </Text>
                    </Button>

                 {/*    <List>
                            {
                                this.state.persons.map( person => 
                                    <ListItem key={person.id} >
                                        <Text>
                                            {person.name}
                                        </Text>
                                     </ListItem>
                                )
                            }
                    </List> */}
            </Container>
        )
    }


    addNewPerson = (e) => {
        e.preventDefault();
        const newUser = {
            name: "New Person",
            age: 41
        };
        createPerson(newUser).then( res => {
            console.log(" all good");
            console.log(res);
        })
    }
}