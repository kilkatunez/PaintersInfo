import styles from "../../styles/painters.module.css";
import {useRouter} from "next/router"
import Content from "../../components/Content";

const Painter = ({painters, data, paintings}) => {
  const router = useRouter()
  let painter = painters
    .filter((painter, i) => {
      return painter.name === router.query.name
    })
  return (
    <>
      {painter.map((painter, i) => {
        return (
          <div className={styles.main} key={i}>
            <div className={styles.blockWrapper}>
              <p className={styles.painterText}>
                <img className={styles.paintersImg} src={painter.profilePhotoURL}/>
                {painter.info}</p>
            </div>
            <div className={styles.blockWrapper}>
              <h2 className={styles.title}>Artist's paintings</h2>
              <Content name={router.query.name}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}


export default Painter