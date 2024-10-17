import { View, Image } from 'react-native'
import MyButton from '../components/Button'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import Input from "../components/Input"


function Create() {
    const containerStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }

    const imageContainerStyle = {
        width: 400,
        height: 400,
        backgroundColor: 'red'
    }

    const [img, setImg] = useState(null)
    const [description, setDescription] = useState ('')

    async function openCamera() {

        const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

        if (!permissionResult.granted) {
            alert('Dammi i permessi o non posso fare nulla')
            return;
        }

        console.log("ABBIAMO I PERMESSI !!!!!!!!!!!!!!!")

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            const image = result.assets[0].uri
            setImg(image)
        }
    }

    function deleteImage() {
        setImg(null);
    }

    function publishPost (){
        console.log('PUBBLICA!!!!!!!!!!')
        const post = {
            name: "Ezio Greggio",
            image: img,
            description: description
        }

        console.log(post)
    }

    return (
        <View style={containerStyle}>
            {!img && <MyButton
                title={"Apri Fotocamera"}
                onPress={openCamera}
            />}

            {!!img &&
                <View>
                    <View style={imageContainerStyle}>
                        {img && (
                            <Image
                                source={{ uri: img }}
                                style={{ width: '100%', height: '100%' }}
                            />
                        )}
                    </View>

                    {img && (
                        <MyButton
                            title='Elimina'
                            onPress={deleteImage}
                        />
                        
                    )}

                    <Input
                    placeholder= "Descrizione"
                    onChange={setDescription}
                    />

                    <MyButton
                    title={"Pubblica"}
                    onPress={publishPost}
                    />
                </View>}
        </View>
    )
}

export default Create;
