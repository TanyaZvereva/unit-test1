import {
  getHealthState
} from "../game"
test("should return healthy", () => {
  for (let i = 50; i < 100; i++) {
    const result = getHealthState({
      name: "Mag",
      health: i
    })
    expect(result).toBe("healthy")
  }
})
test("should return wounded", () => {
  for (let i = 15; i < 50; i++) {
    const result = getHealthState({
      name: "Mag",
      health: i
    })
    expect(result).toBe("wounded")
  }
})

test("should return critical", () => {
  for (let i = 1; i < 15; i++) {
    const result = getHealthState({
      name: "Mag",
      health: i
    })
    expect(result).toBe("critical")
  }
})
