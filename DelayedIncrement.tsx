import { useState } from "react"

export default function App() {
  const [count, setCount] = useState<number>(0)

  // Task: Fix the delayed increment
  // When the "Delayed increment" button is clicked multiple times, it currently increments by 1 after a delay.
  // Your task is to modify the code so that it increments by the number of times the button is clicked.
  // Example: If you click the "Delayed increment" button three times, the count should increase by 3 after the delay.

  const handleInstantInrement = () => {
    setCount(count + 1)
  }

  const handleDelayedInrement = () => {
    setTimeout(() => setCount(count + 1), 1000)
  }

  return (
    <main className="bg-green-200 py-6 h-screen">
      <section className="max-w-screen-xl mx-auto h-full">
        <h1 className="text-3xl font-bold mb-6">Counter: {count} </h1>
        <button
          onClick={handleInstantInrement}
          className="py-2 px-6 bg-green-500 text-2xl text-white rounded-xl mr-4"
        >
          Instant increment
        </button>
        <button
          onClick={handleDelayedInrement}
          className="py-2 px-6 bg-green-500 text-2xl text-white rounded-xl"
        >
          Delayed increment
        </button>
      </section>
    </main>
  )
}
