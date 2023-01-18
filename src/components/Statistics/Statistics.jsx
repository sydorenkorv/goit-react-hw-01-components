import PropTypes from 'prop-types';
import data from 'assets/data';
import styles from './Statistics.module.css';

const Statistics = ({ title = '', data }) => {
    function randomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
  }
    
    return (
<section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>

  <ul className={styles.statList}>
{data.map(item => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
  </ul>
</section>

    )
    
}
Statistics.defaultProps = {
    title: '',
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
    
export default Statistics;