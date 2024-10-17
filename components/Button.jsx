import { Button } from "react-native-web";

function MyButton ({onPress, title}){
    return(
        <Button 
        title = {title}
        color = 'green'
        onPress= {onPress}
        />
    )
}

export default MyButton