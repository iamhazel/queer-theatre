import Typography from "typography"
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

const typography = new Typography(usWebDesignStandardsTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography