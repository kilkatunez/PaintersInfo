import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import styles from "../styles/painters.module.css";


const Content = ({data, name, painters}) => {
  const [paints, setPaints] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(async () => {
    setPaints([])
    await getMorePost()
  }, [name])


  const getMorePost = async () => {
    const res = await fetch(
      `http://localhost:4200/paintings?painterId=${name}&_limit=5&_start=${paints.length}/`
    );
    const newPosts = await res.json();
    setPaints((post) => [...post, ...newPosts]);
  }

  return (
    <>
      <InfiniteScroll
        dataLength={paints.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3 className={styles.loaderTitle}> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {paints.map((data) => {
          return (
            <div className={styles.paintingBlock} key={data.id}>
              <Link href={`/painters/[name]/[id]`} as={`/painters/${name}/${data.name}`}>
                <a>
                  <img className={styles.paintingsImg} src={data.url}/>
                  <p className={styles.paintingsText}>{data.name}</p>
                </a>
              </Link>
            </div>
          )
        })
        }
      </InfiniteScroll>
    </>
  );
}

export default Content;
