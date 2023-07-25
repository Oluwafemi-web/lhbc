import BlogItem from "../../UI/BlogItem";
export default function IndexBlog() {
  return (
    <div className="blog">
      {/* use slider for blog */}
      <p className="blogFirstText">OUR BLOG</p>
      <h3 className="blogHeader">CATCH OUR LATEST UPDATES</h3>
      {/* underline icon here */}
      <div className="blogPosts">
        <BlogItem />
        <BlogItem />
        <BlogItem />

        {/* <div className="post1">
          <div className="blogImg">
            <p className="postDate">Oct 16, 2020</p>
          </div>
          <h5 className="postHeader">
            <i>Giving to God - Active ways to get blessed</i>
          </h5>
          <p>
            <a href="#" className="postDetails">
              Read More
            </a>
          </p>
        </div>
        <div className="post2">
          <div className="blogImg">
            <p className="postDate">Oct 16, 2020</p>
          </div>
          <h5 className="postHeader">
            <i>Giving to God - Active ways to get blessed</i>
          </h5>
          <p>
            <a href="#" className="postDetails">
              Read More
            </a>
          </p>
        </div>
        <div className="post3">
          <div className="blogImg">
            <p className="postDate">Oct 16, 2020</p>
          </div>
          <h5 className="postHeader">
            <i>Giving to God - Active ways to get blessed</i>
          </h5>
          <p>
            <a href="#" className="postDetails">
              Read More
            </a>
          </p>
        </div> */}
        {/* slider button here */}
      </div>
    </div>
  );
}
