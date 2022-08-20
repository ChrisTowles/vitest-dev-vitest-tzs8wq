import { assert, expect, test } from 'vitest'

// Edit an assertion and save to see HMR in action

test("Anonymous function in stacktrace", async () => {
  expect(await run()).toEqual(1)
})

async function run() {
  throw new Error("<tag>")
}