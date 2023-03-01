import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
      
        .then((res) => {
          if(!res.ok ){
            throw Error('Could Not fetch the data ')
          }

          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIspending(false);
        })
        .catch(err => {
          setError=(err.message);

        })
    },100);
  }, []);

  return (
    <div className="home">
      { Error && <div>{ Error }</div> }
      { ispending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
