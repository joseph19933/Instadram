import { View , Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width

function post() {
    return (
        <View style={{
            width: '33.3%',
            aspectRatio: '1/1',
            backgroundColor: 'orange',
            border: '1px solid black'
        }}>

        </View>
    )
}

export default post