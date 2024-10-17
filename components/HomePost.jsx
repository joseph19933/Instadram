import { View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons'

const containerStyle = {
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'white',
};

const imageStyle = {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: 'yellow',
};

const profileStyle = {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    overflow: 'hidden'
};

const profileContainerStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    gap: 10,
};

const descriptionStyle = {
    margin: 5,
    marginBottom: 15,
}

function HomePost({
    description,
    name,
    image
}) {

    const [like, setLike] = useState(false)

    function toggleLike() {
        setLike(!like)
        console.log('LIKE!!!!!!')
    }
    return (
        <View style={containerStyle}>
            <View style={profileContainerStyle}>
                <View style={profileStyle}>
                    <Image
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ezio_Greggio_2012.jpg/640px-Ezio_Greggio_2012.jpg" }}
                        style={{ width: '100%', height: '100%' }}
                    /></View>
                <Text>{name}</Text>
            </View>

            <View style={imageStyle}>
                <Image
                    source={{ uri: image}}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>

            <View>
                <TouchableOpacity onPress={toggleLike}>
                    <Ionicons
                        name={like ? 'heart' : 'heart-outline'}
                        size={32}
                        color={like ? 'red' : 'black'}
                    />
                </TouchableOpacity>
            </View>

            <View style={descriptionStyle}>
                <Text>{description}</Text>
            </View>

        </View>
    );
}

export default HomePost;
