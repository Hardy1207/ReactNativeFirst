import React from 'react';
import axios from 'axios';
import { getPerson, createPerson }  from '../core/modules/person/personApi'
import { Container, List, ListItem, Button , Text, Icon, Header, Footer} from 'native-base';


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
            <Header>
                <Text> Test Header </Text>
            </Header>
            <Button onPress={this.addNewPerson}>
                        <Text>
                            Add new person
                        </Text>
                    </Button>
                    <List>
                        {
                            this.state.persons.map( person => 
                                <ListItem key={person._id} button onPress={() => this.props.navigation.navigate('EditScreen')} >
                                    <Text>
                                        {person.name}
                                    </Text>
                                 </ListItem>
                            )
                        }
                    </List>
                <Footer>
                    <Text>
                        Test 2
                    </Text>
                </Footer>
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
        getPerson().then( res => {
            console.log(" all good");
            console.log(res);
            this.setState({
                persons: res.data
            }) 
        })
    }
}