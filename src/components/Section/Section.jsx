import { Block, Heading } from './Section.styled';
import propTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Block>
    <Heading>{title}</Heading>
    {children}
  </Block>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
