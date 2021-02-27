
import { StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;