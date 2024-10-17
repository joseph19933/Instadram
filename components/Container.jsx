import { View } from "react-native";

const containerStyle = {

    backgroundColor: 'white',
    minHeight: '50px'
}

function Container({ children }) {
    return (
        <View style={containerStyle}>
            {children}
        </View>
    )
}

export default Container 