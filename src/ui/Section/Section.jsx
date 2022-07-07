import PropTypes from 'prop-types';
import { Sections, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Sections>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
