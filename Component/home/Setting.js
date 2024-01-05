import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleToggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  // Chọn màu nền và màu chữ dựa trên trạng thái Dark Mode
  const containerStyle = darkModeEnabled
    ? styles.containerDark
    : styles.container;
  const titleStyle = darkModeEnabled ? styles.titleDark : styles.title;
  const optionStyle = darkModeEnabled ? styles.optionDark : styles.option;
  const optionTextStyle = darkModeEnabled
    ? styles.optionTextDark
    : styles.optionText;

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Settings</Text>

      <TouchableOpacity style={optionStyle}>
        <Text style={optionTextStyle}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={optionStyle}>
        <Text style={optionTextStyle}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={optionStyle}>
        <Text style={optionTextStyle}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleToggleNotifications}
        />
      </TouchableOpacity>

      <TouchableOpacity style={optionStyle}>
        <Text style={optionTextStyle}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={handleToggleDarkMode} />
      </TouchableOpacity>

      <TouchableOpacity style={optionStyle}>
        <Text style={optionTextStyle}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={optionStyle}>
        <Text style={optionTextStyle}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#202020',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleDark: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
    paddingVertical: 16,
  },
  optionDark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#404040',
    paddingVertical: 16,
  },
  optionText: {
    fontSize: 18,
  },
  optionTextDark: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default SettingsScreen;