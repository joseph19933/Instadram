import { Text, View, Image, ScrollView } from "react-native";
import Container from "../components/Container";
import Eder from "../components/Eder";
import Post from "../components/Post";
import { useSessionContext } from "../utils/context";
import MyButton from "../components/Button";

function Profile() {
    const value = useSessionContext()

    function logout(){
        value.logout ()
        
    }
    return (
        <ScrollView>
            <Container>

                <Eder />

                {!!value.session && <Text>ciao, {value.session.username} !</Text>}
                <MyButton onPress={logout} title={'LOGOUT'}/>
                <View style={{

                    backgroundColor: 'red',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </View>
                

            </Container>
        </ScrollView>
    )
}

export default Profile

