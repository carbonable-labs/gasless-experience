function Hackthon() {
  return (
    <div className="rounded-lg border border-neutral-600 bg-opacityLight-5 p-4">
      <div>
        <h2 className="text-xl font-bold">Goal</h2>
        <p className="text-neutral-300">Pay transaction fees on users behalf using AVNU gasless sdk</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Achievements</h2>
        <p className="text-neutral-300">Integrate AVNU gasless sdk 🟢</p>
        <p className="text-neutral-300">Check user&apos;s account compatibility 🟢</p>
        <p className="text-neutral-300">Retrieve available payment tokens 🟢</p>
        <p className="text-neutral-300">Get typed data 🟢</p>
        <p className="text-neutral-300">Sign typed data 🟢</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Remaining points</h2>
        <p className="text-neutral-300">Estimate gas fees 🟠</p>
        <p className="text-neutral-300">Execute from outside 🔴</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Conclusion</h2>
        <p className="text-neutral-300">
          The AVNU gasless sdk is quite easy to integrate but still needs some improvements to make it more user friendly.
        </p>
        <p className="text-neutral-300">
          It&apos;s a bit early to say if it can be used in production but it has a lot of potential.
        </p>
        <p className="text-neutral-300">
          We might want to perform the transaction execution ourselves to have more control over the process.
        </p>
        <p className="text-neutral-300">
          Currently the transaction fees payment to avnu is a manual process and an api key is needed.
        </p>
      </div>
    </div>
  )
}

export default Hackthon;