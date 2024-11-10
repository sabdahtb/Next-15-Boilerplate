import { Hono } from 'hono'
import { superJsonResponse } from '../utils'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const app = new Hono()
export const postRouter = app
  .get('', (c) => {
    const data = {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        random: Math.random(),
      },
      timestamp: new Date(),
    }

    return superJsonResponse(data, 201)
  })
  .post(
    'test',
    zValidator(
      'json',
      z.object({
        title: z.string(),
      })
    ),
    (c) => {
      const values = c.req.valid('json')

      console.log({ values })
      const data = {
        user: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        timestamp: new Date(),
      }

      return c.json(data, 200)
    }
  )
