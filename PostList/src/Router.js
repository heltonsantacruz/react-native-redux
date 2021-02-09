
import React from 'react'
import { Router, Scene } from 'react-native-router-flux' 
import List from './components/List'
import PostDetail from './components/PostDetails'

const RouterComponent = () => {
    return (
        <Router >
            <Scene key="root">
                <Scene key="list" component={List} title="Posts List" initial></Scene>
                <Scene key="postDetail" component={PostDetail} title="Post Detail"></Scene>
            </Scene>
        </Router>
    )
}


export default RouterComponent