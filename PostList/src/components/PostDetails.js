import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {connect } from 'react-redux'

import { fetchPost } from '../actions'

class PostDetail extends Component {

    componentDidMount(){
        this.props.fetchPost(this.props.postId)
    }



    render(){

        if(!this.props.post){
            return <Text>Loading...</Text>
        }
        return (
            <View>
                <Text style={styles.titleStyle}>Title: {this.props.post.title}</Text>
                <Text style={styles.bodyStyle}>Content: {this.props.post.body}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return { post: state.posts.selected}
}

/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {fetchPost: fetchPost}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)*/
export default connect(mapStateToProps, {fetchPost : fetchPost})(PostDetail)




const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyStyle: {
        fontSize: 16,
        
    }
})