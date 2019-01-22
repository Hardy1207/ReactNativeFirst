import React from 'react';
import { getPerson, createPerson }  from '../../core/modules/person/personApi';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, FlatList , TouchableHighlight} from 'react-native';
import { Container, List, ListItem, Button , Text, Icon, Header, Footer, View, Right} from 'native-base';


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
            <Header >
                <Button style={styles.button_add_new_person} onPress={this.addNewPerson}>
                    <Text>
                        Add new person
                    </Text>
                </Button>
            </Header>
                    <FlatList style={styles.personList}
                        data={this.state.persons}
                        renderItem={({item, index}) =>
                        <TouchableHighlight onPress={Actions.edit}>
                            <View key={item._id} style={[styles.person_listItemEven, 
                            { backgroundColor: this.checkIndexIsEven(index) ? '#FFFAF0' : '#F5F5F5'}]}>
                                <Text >{item.name}</Text>
                                <Text >{item.age}</Text>
                            </View>
                        </TouchableHighlight>
                        }
                    />
            </Container>
        )
    }

    checkIndexIsEven (n) {
        return n % 2 == 0;
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

const styles = StyleSheet.create({
    personList: {
    },
    person_listItemEven: {
        borderWidth: 1,
        borderColor: '#696969',
        padding: '5%',    
   },
   button_add_new_person: {
    justifyContent: "flex-end",
   }
  });