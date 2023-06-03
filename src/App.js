import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import CustomInput from './CustomInput';

const MyScreen = () => {

  const handleTextChange=(e)=>{
    console.log(`this field value is: ${e}`);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>

        <CustomInput
          placeholderText="textfield 1"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 2"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 3"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 4"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 5"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 6"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 7"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 8"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 9"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 10"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 11"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 12"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 13"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 14"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 15"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 16"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 17"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 18"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 19"
          onChangeText={(e)=>handleTextChange(e)}
        />
        <CustomInput
          placeholderText="textfield 20"
          onChangeText={(e)=>handleTextChange(e)}
        />

        <View style={{
          backgroundColor: 'orange',
          padding: 8,
          borderRadius: 32,
          margin: 20,
          alignItems: 'center',
          marginBottom: 30
        }}>
          <Text style={{ color: 'white', fontSize: 24 }}>Proceed</Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollViewContent: {
    //if dont want your component on center then remove flexgrow
    flexGrow: 1,
  }
});

export default MyScreen;
