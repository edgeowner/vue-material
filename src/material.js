import MdReactive from 'core/MdReactive'
import MdTheme from 'core/MdTheme'

const material = new MdReactive({
  ripple: true,
  theming: {},
  locale: {
    startYear: 1900,
    endYear: 2099,
    dateFormat: 'YYYY-MM-DD',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D']
  }
})

Object.defineProperties(material.theming, {
  metaColors: {
    get: () => MdTheme.metaColors,
    set (metaColors) {
      MdTheme.metaColors = metaColors
    }
  },
  theme: {
    get: () => MdTheme.theme,
    set (theme) {
      MdTheme.theme = theme
    }
  },
  enabled: {
    get: () => MdTheme.enabled,
    set (enabled) {
      MdTheme.enabled = enabled
    }
  }
})

export default Vue => {
  if (!Vue.material) {
    Vue.material = material
    Vue.prototype.$material = material
  }
}