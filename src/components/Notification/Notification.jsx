import { NotificationText } from './Notification.styled';
import propTypes from 'prop-types';

export const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
