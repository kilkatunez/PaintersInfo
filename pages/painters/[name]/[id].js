import styles from "../../../styles/paint.module.css"
import {useRouter} from "next/router";
import Link from "next/link"

const Paint = ({painters, paintings}) => {
  const router = useRouter()

  let paint = paintings
    .filter((paint) => {
      return paint.painterId === router.query.name
    })
  return (
    <>
      <button className={styles.backButton}>
        <Link href={`/painters/[name]`} as={`/painters/${router.query.name}`}>
          <a>
            <div>&#10094;</div>
          </a>
        </Link>
      </button>
      <div className={styles.main}>
        {paint.map((paint, i) => {
          if (paint.name === router.query.id) {
            return (
              <div className={styles.blockWrapper} key={i}>
                <img className={styles.paintingsImg} src={paint.url}/>
                <p className={styles.title}>
                  <span>{paint.name} </span> <br/>
                  <span>Size ({paint.dimensions})</span><br/>
                  <span>Year ({paint.year})</span> <br/>
                  <span>Location ({`${paint.gallery}\n (${paint.city})`})</span>
                </p>
              </div>
            )
          }
          return;
        })}
      </div>
    </>
  )
}

export default Paint