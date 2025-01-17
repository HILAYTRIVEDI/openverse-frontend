import Vuei18n from 'vue-i18n'

import { getFullLicenseName } from '~/utils/license'
import type { License, LicenseVersion } from '~/constants/license'
import enMessages from '~/locales/en.json'

const i18n = new Vuei18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en: enMessages },
})

describe('getFullLicenseName', () => {
  it.each`
    license           | licenseVersion | sendI18n | fullName
    ${'by'}           | ${''}          | ${false} | ${'CC BY'}
    ${'by-nc-nd'}     | ${'4.0'}       | ${false} | ${'CC BY-NC-ND 4.0'}
    ${'cc0'}          | ${''}          | ${false} | ${'CC0'}
    ${'sampling+'}    | ${''}          | ${false} | ${'CC Sampling+'}
    ${'nc-sampling+'} | ${''}          | ${false} | ${'CC NC-Sampling+'}
    ${'pdm'}          | ${''}          | ${false} | ${'PDM'}
    ${'pdm'}          | ${''}          | ${true}  | ${'Public Domain Mark'}
  `(
    'returns license name for license $license and version $licenseVersion',
    ({
      license,
      licenseVersion,
      sendI18n,
      fullName,
    }: {
      license: License
      licenseVersion: LicenseVersion
      sendI18n: boolean
      fullName: string
    }) => {
      expect(
        getFullLicenseName(license, licenseVersion, sendI18n ? i18n : null)
      ).toBe(fullName)
    }
  )
})
