import data from '../User/data.json'
import css from '../Statistics/Statistics.module.css'

const Statistics = ({ stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.stat_list}>
      {stats.map(stat => (
        <li className={css.item} key={stat.id}>
          <span className = {css.label} >{stat.label}</span>
          <span className={css.percentage}>{stat.percentage} %</span>
      </li>
      ))}  
  </ul>
</section>
)

export const StatisticsApp = () => (
  <Statistics stats={data} />
);