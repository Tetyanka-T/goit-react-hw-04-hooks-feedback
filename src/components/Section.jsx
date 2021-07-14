import PropTypes from 'prop-types';
import s from './Main.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
