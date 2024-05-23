function Hackathon() {
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
        <p className="text-neutral-300">Execute from outside 🟢</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Outstanding points</h2>
        <p className="text-neutral-300">Estimate gas fees 🟠</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Conclusion</h2>
        <p className="text-neutral-300">
          The AVNU gasless sdk is quite easy to integrate.
        </p>
        <p className="text-neutral-300">
          We might want to perform the transaction execution ourselves to have more control over the process. But it is hard to manage due to nonce management.
        </p>
        <p className="text-neutral-300">
          For production, we will need to provision a wallet to pay the transaction fees on behalf of the users.
        </p>
      </div>
    </div>
  )
}

export default Hackathon;