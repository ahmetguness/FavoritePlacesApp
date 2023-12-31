import { Button, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Alert } from "react-native";
import { useState } from "react";
import { GlobalColors } from "../../constants/colors";

function ImagePicker() {

    const [pickedImage, setPickedImage] = useState();

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        // if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
        //     Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app.');
        //     return false;
        // }
        return true;
    }


    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        //console.log(image);
        setPickedImage(image.uri);

    }

    let imagePreview = <Text>No image taken yet.</Text>

    if (pickedImage) {
        imagePreview = <Image source={{ uri: pickedImage }} />;
    }

    return (
        <View>
            <View style={styles.imagePreview} >
                {imagePreview}
            </View>
            <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    );
}


export default ImagePicker;


const styles = StyleSheet.create({
    imagePreview: {
        width: '%100',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.primary100,
        borderRadius: 4,
    }
});