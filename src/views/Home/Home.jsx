import styles from "./Home.module.css"
import { useState, useEffect } from "react"

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const respose = await fetch('./data.json')
        const answer = await respose.json()
        setData(answer)
      } catch(e) {
        console.log(e)
      }
    }
    getData();
  }, [])

  return (
    <>
    <div className={styles.main_homepage_wrapper}></div>
      <div className={styles.homepage}>
        <h1 className={styles.home_title}>
          CodeTypes 
        </h1>
        <p className={styles.home_title_sub}>
          Тренажер скорости печати для программистов
        </p>
        <button className={styles.get_started}>Начать</button>
      </div>
      <div className={styles.lang_section}>
          <h2 className={styles.lang_section_title}>Выбор языка программирования</h2>

          <div className={styles.lang_grid}>
          {data.map((item) => (
              <div className={styles.lang_gird_item} key={item.id}>
                <div className={styles.image_top}>
                  <img src={item.link} alt="" />
                  <p className={styles.card_text}>
                    {item.name}
                  </p>
                </div>
                  <p>{item.text}</p>
                  <div className={styles.buttons}>
                      <button className={styles.lang_button}>Начать</button>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}
