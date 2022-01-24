import styles from "../styles/about.module.css"


const About = ({fishText}) => {
  return (
    <>
      {fishText?.map((fishText, i) => {
        return (
          <div className={styles.main} key={i}>
            <div className={styles.blockWrapper}>
              <p className={styles.fishText}>{fishText.fishText}</p>
            </div>
          </div>
        )
      })}
    </>

  )
}

export default About

