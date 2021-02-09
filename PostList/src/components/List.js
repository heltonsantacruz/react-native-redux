import React, {Component} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ListItem from './ListItem'
import { fetchPosts } from '../actions/'
import { Actions } from 'react-native-router-flux'

class List extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    onItemPress(id) {
        Actions.postDetail({ postId: id})
    }


    render(){

        if(!this.props.posts){
            return (
                <Text>Loading...</Text>
            )
        }

        const postsItems = this.props.posts.map (post => {
            return <ListItem key={post.id} item={post} onItemPress={this.onItemPress}/>
        })
        return(
            <ScrollView>
                {postsItems}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts.data}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {fetchPosts: fetchPosts}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(List)