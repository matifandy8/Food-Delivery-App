import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Restaurants() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Mcdonalds",
      tag: "Fast Food",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NvjtUsCJBW8YiUEyyStx1a4WiktoIa9hgw&usqp=CAU",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Burger king",
      tag: "Burger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj79lhBWamZcx9gN7RY5eXkec3_qXZDeZ6Ig&usqp=CAU",
    },
    {
      id: "ad7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Mcdonalds",
      tag: "Fast Food",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NvjtUsCJBW8YiUEyyStx1a4WiktoIa9hgw&usqp=CAU",
    },
    {
      id: "4ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Burger king",
      tag: "Burger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj79lhBWamZcx9gN7RY5eXkec3_qXZDeZ6Ig&usqp=CAU",
    },
    {
      id: "ad6acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Mcdonalds",
      tag: "Fast Food",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NvjtUsCJBW8YiUEyyStx1a4WiktoIa9hgw&usqp=CAU",
    },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Restaurants</Text>
      <Text style={styles.subtext}>{DATA.length}  Restaurants near you</Text>
      <View style={styles.restaurantContainer}>
      {DATA.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => console.log("You clicked " + item.title)}
        >
          <Image source={item.image} style={styles.img} />
          <View>
            <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.tag}>{item.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </View>
      <TouchableOpacity
      style={styles.button}
      >
        <Text style={styles.all}>View all restaurants</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Metropolis",
    fontSize: 20,
    fontWeight: "700",
  },
  subtext: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: 23,    
    color: "#999999",
  },
  restaurantContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  item: {
    width: 388,
    height: 101,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "Metropolis",
    lineHeight: 25,
  },
  img: {
    width: 66,
    height: 66,
    borderRadius: 33,
    margin: 10,
  },
  tag: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Metropolis",
    lineHeight: 25,
  },
  button: {
    width: 345,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #C8C8C8",
    borderRadius: 12,
    margin: 20,
  },
  all: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Metropolis",
    lineHeight: 25,
  },
});
