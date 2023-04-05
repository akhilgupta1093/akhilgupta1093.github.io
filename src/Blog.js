import React, { Component } from 'react';
import "./Blog.scss";
import $ from "jquery";

class Blog extends Component {
    constructor(props) {
        super();
        this.state = {
          blogData: {},
        };
      }

      loadBlogData() {
        $.ajax({
          url: `blog.json`,
          dataType: "json",
          cache: false,
          success: function (data) {
            this.setState({ blogData: data });
            console.log(data)
          }.bind(this),
          error: function (xhr, status, err) {
            alert(err);
          },
        });
      }
    
      componentDidMount() {
        this.loadBlogData();
      }

  render() {
    return (
        <div id="blog">
            <h1 className="section-title" style={{ color: "black" }}>
                <span>Blog</span>
            </h1>
            {this.state.blogData.posts && this.state.blogData.posts.map(function (post) {
                return (
                    <div className="blog-item">
                        <div className="blog-item-title">
                            <h2>{post.title}</h2>
                        </div>
                        <div className="blog-item-subtitle">
                            <p>{post.subtitle}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
  }
}

export default Blog;