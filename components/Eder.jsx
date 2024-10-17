import { Text, View, Image } from "react-native";
import Container from "./Container";

function Eder() {
  return (
    <View style={styles.container}> {}
      <Image
        source={require('../assets/golden.png')}  
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>Post</Text>
        <Text style={styles.text}>5</Text>
      </View>
      <View>
        <Text style={styles.text}>Followers</Text>
        <Text style={styles.text}>400</Text>
      </View>
      <View>
        <Text style={styles.text}>Seguiti</Text>
        <Text style={styles.text}>20</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',         
    alignItems: 'center',         
    justifyContent: 'space-evenly',  
    paddingVertical: 10,
    backgroundColor: 'white',     
    width: '100%',                
  },
  text: {
    fontSize: 16,                  
    fontWeight: 'bold',            
    marginLeft: 10,                
  },
  image: {
    width: 50,                    
    height: 50,                   
    borderRadius: 25,             
    marginRight: 20,              
  },
};

export default Eder;

