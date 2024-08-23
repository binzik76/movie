// utils/logout.js
import { Alert } from 'react-native';

export const confirmLogout = (visible, onClose, onConfirm) => {
  Alert.alert(
    'Confirm Logout',
    'Are you sure you want to log out?',
    [
      { text: 'Cancel', style: 'cancel', onPress: onClose },
      { text: 'OK', onPress: onConfirm },
    ],
    { cancelable: false }
  );
};
