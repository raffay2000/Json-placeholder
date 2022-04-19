import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native'
import React,{useEffect,useState,useContext} from 'react'

const Post = ({route,navigation}) => {
    const [userPost, setUserPost] = useState([])
    const {id} = route.params;
    useEffect(() => {
      fetchUserPost()
    }, [])
    const fetchUserPost = async () => {
    
        let Base_Url = "https://jsonplaceholder.typicode.com";
        let UsersPost = `posts?userId=${id}`;
        fetch(`${Base_Url}/${UsersPost}`)
          .then((response) => response.json())
          .then((data) => setUserPost(data))
          .catch((err) => console.error(err));
      };
  return (
    <View style={styles.container}>
       <FlatList       
          data={userPost}
          renderItem={({item}) => {
            return (
               <View style={styles.postView}>
                   <Text style={{fontWeight:'700',paddingBottom:10,fontSize:25,color:'#e0fbfc'}}>
                   {item.title}
                   </Text>
                   <View style={{backgroundColor:'#3d5a80',borderRadius:10,padding:5,marginBottom:10 }}>
                   <Text style={{fontSize:20,textAlign:'center',color:'#e0fbfc'}}>
                   {item.body}
                   </Text>
                   </View>
                  <TouchableOpacity style={{backgroundColor:'#3d5a80',width:120,borderRadius:5,padding:10,alignSelf:'center'}} onPress={()=>{
                      navigation.navigate('Posts Comments',{id:item.id})
                  }}>
                    <Text style={{color:'#e0fbfc',fontWeight:'700'}}>
                        Comments (5)
                    </Text>
                  </TouchableOpacity>
               </View>
            );
          }}
        />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#98c1d9"
        // justifyContent:'center',
        // alignContent:'center'
    },
    postView:{
        backgroundColor:'#293241',
        margin:10,
        borderRadius:10,
        padding:10
    }
})