import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: '.',
  webServer: {
    /**
     * Note: You can speed up local testing by switching `prod` out for `start`
     * to skip the build, but be aware that then talkback and the Nuxt server
     * will be racing to warm up and the tests could start before talkback is
     * ready to start serving API responses. Playwright only lets you specify
     * one port to wait for a ready response from so there's no way around it.
     * Normally the build introduces more than enough time for talkback to
     * be ready by the time the Nuxt server is actually started.
     *
     * This doesn't mean _don't_ use `start`, it just means that once you've
     * debugged everything else, make sure to inspect the trace output for any
     * ConsoleMessage strings that refer to incorrect responses. Once you've
     * verified that there is indeed a tape saved for the response in question,
     * switch this back to `prod` and see if your tests pass.
     */
    command: './node_modules/.bin/npm-run-all -p -r talkback prod',
    timeout: 120000,
    port: 8443,
    reuseExistingServer: !process.env.CI || process.env.PWDEBUG === '1',
    env: {
      API_URL: 'http://localhost:49152/',
      UPDATE_TAPES: process.env.UPDATE_TAPES || '',
    },
  },
  use: {
    baseURL: 'http://localhost:8443',
    trace: 'retain-on-failure',
  },
  timeout: 60 * 1e3,
}

export default config
