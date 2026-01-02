export default function FreezTitle() {
  return (
    <>
      <div aria-label="rate transaction header" className="mb-5">
        <h2 className="text-xl font-semibold text-[#DB1A1A]">
          Coin will be Freez in 5 min after Transaction.
        </h2>
        <p className="text-md text-[#636363]">
          Freezed coin will be released in 15min
        </p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-2">
        {/* user ID */}
        <div className="flex flex-col gap-2 mb-3 col-span-2">
          <input
            type="number"
            placeholder="Transaction Id"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2 w-60">
          <button type="button" className="px-12 py-2 text-md btn_gradient">
            Transfer Coins
          </button>
        </div>
      </form>
    </>
  );
}
