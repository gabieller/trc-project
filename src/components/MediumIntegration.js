import React, { useEffect, useState } from "react"
import axios from "axios"

export default function () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getMediumFeed() {
      try {
        const mediumRssFeed = "https://medium.com/feed/routable-ai"
        const rssToJsonApi = "https://api.rss2json.com/v1/api.json"
        const data = { params: { rss_url: mediumRssFeed } }
        const res = await axios.get(rssToJsonApi, data)
        if (res.data.status === "ok") {
          setPosts(res.data.items)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getMediumFeed()
  }, [])

  const sortedPosts = posts.sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1))
  console.log(sortedPosts.map(e => e.thumbnail))
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {sortedPosts.map(e => (
        <div key={e.title} className="col">
          <div className="card h-100">
            <img
              // src={"https://cdn-images-1.medium.com/max/1024/1*OZcyztxLDRSjrCWRRIUphA.png"}
              src={e.thumbnail}
              className="card-img-top"
              alt={e.title}
              style={{
                height: "25vw",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer bg-transparent">
              <span className="card-text">
                {e.author}
                {" - "}
                <span className="text-muted">
                  {new Date(e.pubDate).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
