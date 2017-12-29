import { modules } from '@/store'
import { moduleA } from '@/store/modules/moduleA'

describe('store', () => {
  test('should have modules defined', () => {
    expect(modules).toEqual({
      a: moduleA
    })
  })
})
