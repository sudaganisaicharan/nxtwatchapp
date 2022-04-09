import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  addSavedVideos: () => {},
  changeTheme: () => {},
  changeTab: () => {},
})

export default ThemeContext
