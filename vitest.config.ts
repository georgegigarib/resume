import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      update: true,
      outputFile: {
        markdown: './test-report.md',
        json: './test-report/test-report.json'
      },
      coverage: {
        all: true,
        reporter: ['text', 'text-summary', 'json-summary', 'json'],
        reportOnFailure: true,
        reportsDirectory: './coverage',
        thresholds: {
          lines: 25,
          statements: 25,
          functions: 10,
          branches: 10
        }
      }
    }
  })
)
