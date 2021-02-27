import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = () => {
    return (
      <View style={styles.container}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{
            uri:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
          }}
        />

        {/* bed and bedroom text  */}
        <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

        {/*  type and description  */}
        <Text style={styles.description} numberOfLines={2}> Entire flat. im just testing this out to see if it will right some more stuff but if it dosent then i wont know if im actually doing anything ok .</Text>

        {/* old price and new price  */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>$36 </Text>
          <Text style={styles.price}>  $30</Text>
          / night
        </Text>

        {/* total price  */}
          <Text style={styles.totalPrice}>$230 total</Text>

      </View>
    );
}

export default Post
