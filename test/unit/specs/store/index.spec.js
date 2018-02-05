import { modules } from '@/store'
import { moduleA } from '@/store/modules/moduleA'
import { moduleAuth } from '@/store/modules/moduleAuth'

describe('store', () => {
  test('should have modules defined', () => {
    expect(modules).toEqual({
      a: moduleA,
      auth: moduleAuth
    })
  })
})
