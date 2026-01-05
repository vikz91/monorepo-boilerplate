import { config as baseConfig } from './base.js'
import globals from 'globals'

/**
 * A custom ESLint configuration for libraries used by both frontend and backend.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
]
