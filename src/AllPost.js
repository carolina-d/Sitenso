import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';

import EditComponent from './EditComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


class AllPost extends Component {
    render() {
        return (
            <div>
                <h1 className="display-5 text-center">Lista de Empleados</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                           
                    </div>
                ))}

</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);