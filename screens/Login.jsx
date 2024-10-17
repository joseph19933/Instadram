import { Text, View } from "react-native";
import Input from "../components/Input";
import MyButton from "../components/Button";
import Container from "../components/Container";
import { useState } from "react";
import { useSessionContext } from "../utils/context";

function Login() {

   
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const value = useSessionContext ()

  

    function onUsernameChange(text) {
        setUsername(text)
    }

    function onPasswordChange(text2) {
        setPassword(text2)
    }


    function onLogin() {
         if (username.length > 3 && password.length > 3) {
            value.login({
                username: username,
                password: password
            })
         }
    

    }
    return (
        <Container>
            <Text> LOGIN SCREEN</Text>
            {!!value.session && <Text>{value.session.password}</Text>}
            <Input placeholder='username' onChange={onUsernameChange} />
            <Input placeholder='password' password={true} onChange={onPasswordChange} />
            <MyButton onPress={onLogin} title ={'ACCEDI'} />
        </Container>
    )
}
export default Login