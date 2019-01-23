import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getPersonList } from '../../actions/person-actions'
import { StyleSheet, FlatList , TouchableHighlight} from 'react-native';
import { Container,Button , Text, Icon, Header, View } from 'native-base';


class PersonList extends React.Component {
    componentDidMount() {
        this.props.onGetPersonList();
    }


    render() {
        console.log(this.props.personList);
        return(
            <Container>
            <Header >
                <Button style={styles.button_add_new_person} onPress={this.addNewPerson}>
                    <Text>
                        Add New Person
                    </Text>
                </Button>
            </Header>
                    <FlatList style={styles.personFlatList}
                        data={this.props.personList}
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


 /*  addNewPerson = (e) => {
        console.log(this.props.personList);
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
    }  */
}


const mapStateToProps = state => {
    return { 
        personList : state.personList
    }
};


const mapActionsToProps = {
    onGetPersonList : getPersonList
};


export default connect(mapStateToProps, mapActionsToProps)(PersonList);

const styles = StyleSheet.create({
    personFlatList: {
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
