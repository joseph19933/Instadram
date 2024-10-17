import  { TextInput} from "react-native";

    function Input ({placeholder, password, value , onChange}){
        return (
            <TextInput 
            style= {{ 
            backgroundColor: '#ebebeb',
            border: '1px solid #e0e0e0',
            paddingTop: '9px',
            paddingBottom: '9px',
            padingLeft: '6px',
            paddingRight: '6px',
            textAlign: 'left',
            margin: '6px',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.3)',
            color: 'rgb(0,0,10)'
            }}
            placeholder = {placeholder}
            secureTextEntry = {password}
            value ={value}
            onChangeText= {onChange}
            />
            
        )
 }
export default Input

