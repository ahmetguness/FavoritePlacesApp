import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "../screens/AllPlaces";
import AddPlace from "../screens/AddPlace";
import IconButton from "../components/UI/IconButton";
import { GlobalColors } from "../constants/colors";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalColors.primary500 },
            headerTintColor: GlobalColors.gray700,
            contentStyle: { backgroundColor: GlobalColors.gray700 }
        }} >
            <Stack.Screen name='AllPlaces' component={AllPlaces} options={({ navigation }) => ({
                title: 'Your Favorite Places',
                headerRight: ({ tintColor }) => <IconButton iconName="add" size={24} color={tintColor} onPressFunc={() => navigation.navigate('AddPlace')} />
            })} />
            <Stack.Screen name='AddPlace' component={AddPlace} options={{
                title: 'Add a new place',
            }} />
        </Stack.Navigator>
    );
}


export default StackNavigator;