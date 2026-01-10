export default function GiftCategories({ data }) {
  const category = data?.categorizedGifts;

  return (
    <>
      {category ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 sm:gap-10 sm:pr-2">
          <div className="bg-[#36A8FF52] py-5 px-8 rounded-md shadow-sm text-center">
            <p className="text-sm text-[#6F6E6E] font-medium mb-3">
              {category[1]?.name}
            </p>
            <h3 className="text-xl font-bold text-[#0C00E6]">
              {category[1]?.giftCount}
            </h3>
          </div>

          <div className="bg-[#FFDEFE52] py-5 px-8 rounded-md shadow-sm text-center">
            <p className="text-sm text-[#6F6E6E] font-medium mb-3">
              {category[0]?.name}
            </p>
            <h3 className="text-xl font-bold text-[#DE06ED]">
              {category[0]?.giftCount}
            </h3>
          </div>

          <div className="bg-[#86ADFF52] py-5 px-8 rounded-md shadow-sm text-center">
            <p className="text-sm text-[#6F6E6E] font-medium mb-3">
              {category[2]?.name}
            </p>
            <h3 className="text-xl font-bold text-[#170EBA]">
              {category[2]?.giftCount}
            </h3>
          </div>

          <div className="bg-[#94FFFA52] py-5 px-8 rounded-md shadow-sm text-center">
            <p className="text-sm text-[#6F6E6E] font-medium mb-3">
              {category[4]?.name}
            </p>
            <h3 className="text-xl font-bold text-[#00D7E6]">
              {category[4]?.giftCount}
            </h3>
          </div>

          <div className="bg-[#95F7E852] py-5 px-8 rounded-md shadow-sm text-center">
            <p className="text-sm text-[#6F6E6E] font-medium mb-3">
              {category[3]?.name}
            </p>
            <h3 className="text-xl font-bold text-[#00D7E6]">
              {category[3]?.giftCount}
            </h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
