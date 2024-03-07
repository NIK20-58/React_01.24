import { calcMinutes, calcSeconds } from '../components/Timer'

describe('Timer component utilities functions tests', () => {
  describe('calcMinutes', () => {
    it('should return 60 for a time value of 3600', () => {
      expect(calcMinutes(3600)).toBe('60')
    })
  })

  describe('calcSeconds', () => {
    it('should return 00 for a time value of 60', () => {
      expect(calcSeconds(60)).toBe('00')
    })
  })
})
