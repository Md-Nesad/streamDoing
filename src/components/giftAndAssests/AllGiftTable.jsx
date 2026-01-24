import { Funnel, LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddGiftModal from "../../modals/AddGiftModal";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";
import Error from "../Error";
import useDelete from "../../hooks/useDelete";
import UpdateGiftModal from "../../modals/UpdateGiftModal";
import { useGlobalConfirm } from "../../context/ConfirmProvider";
import { toast } from "react-toastify";
import TopPerformanceLoading from "../TopPerformanceLoading";
import { useDebounce } from "../../hooks/useDebounce";
import FilterDropdown from "../../modals/FilterModal";
// import Loading from "../Loading";

function AllGiftTable({ data, loading, error, setRefresh }) {
  const [text, setText] = useState("");
  const [open, setIsOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const deleteUser = useDelete(`${BASE_URL}/gifts/delete`);
  const [allGifts, setAllGifts] = useState(data?.gifts);
  const [dloading, setDLoading] = useState(null);
  const [selectedGift, setSelectedGift] = useState(null);
  const { confirm } = useGlobalConfirm();

  const category = useFetch(`${BASE_URL}/gift-category/list?page=1&limit=20`);
  const subCategory = useFetch(`${BASE_URL}/gift-subcategory/list?limit=100`);

  const categories = category?.data?.categories;
  const subCategories = subCategory?.data?.subcategories;
  const debouncedText = useDebounce(text, 400);

  const filteredUsers = allGifts?.filter((item) => {
    const matchText = item.name
      .toLowerCase()
      .includes(debouncedText.toLowerCase());

    return matchText;
  });

  //handle gift delete
  const handleDelete = async (id) => {
    try {
      const ok = await confirm("Are you sure to delete?");
      if (!ok) return;
      setDLoading(id);
      const result = await deleteUser(id);

      if (!result) {
        toast.error("Failed to delete gift");
      } else {
        toast.success(result.message || "Gift deleted successfully");
      }

      setAllGifts(allGifts?.filter((gift) => gift._id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setDLoading(null);
    }
  };

  const handleUpdateModal = (gift) => {
    setSelectedGift(gift);
    setUpdate(true);
  };

  useEffect(() => {
    setAllGifts(
      data?.gifts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
    );
  }, [data]);

  useEffect(() => {
    if (text === "") {
      setAllGifts(data?.gifts);
    }
  }, [text, data]);

  if (loading || category?.loading || subCategory?.loading)
    return <TopPerformanceLoading length={5} />;
  if (error) return <Error error={error} />;

  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-full px-4 py-1.5 rounded-md"
          placeholder="Search by gift name"
        />
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="sm:px-6 py-1.5 max-sm:py-2 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            + Add Gift
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="pl-7 p-3">Gift Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Sub Category</th>
              <th className="p-3">Price (Coins)</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers?.length > 0 ? (
              filteredUsers?.map((gift) => {
                //get category name
                const categoryName = categories?.find(
                  (category) => category._id === gift.category,
                )?.name;
                //get subcategory name
                const subCategoryName = subCategories?.find(
                  (category) => category._id === gift.subCategory,
                )?.name;
                return (
                  <tr
                    key={gift._id}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 pl-7 mx-auto">
                      <img
                        src={gift?.imageUrl}
                        alt="Gift Image"
                        className="w-9 h-9 ml-4.5 object-cover rounded-full"
                        loading="lazy"
                      />
                    </td>
                    <td className="p-3 font-medium">{gift.name}</td>
                    <td className="p-3">{categoryName || "N/A"}</td>
                    <td className="p-3">{subCategoryName || "N/A"}</td>
                    <td className="p-3">{formatNumber(gift.cost)}</td>
                    <td className="p-3">
                      <span
                        className={`px-4 py-1 text-xs ${
                          gift.isActive === true
                            ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                            : "bg-[#FF929296] text-[#D21B20]"
                        } text-[#005D23] rounded-full font-semibold`}
                      >
                        {gift.isActive === true ? "active" : "Inactive"}
                      </span>
                    </td>
                    <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                      <button
                        title="Edit"
                        onClick={() => handleUpdateModal(gift)}
                        className="font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(gift._id)}
                        className="font-semibold bg-[#FFE9E9] text-[#CF0D13] py-1 px-3 rounded w-20"
                      >
                        {dloading === gift._id ? (
                          <LoaderCircle
                            className="animate-spin text-center mx-auto"
                            size={17}
                          />
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No gift found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {open && (
          <AddGiftModal
            open={open}
            onClose={() => setIsOpen(false)}
            onSuccess={() => {
              setRefresh((prev) => !prev);
              setIsOpen(false);
            }}
          />
        )}
        {update && (
          <UpdateGiftModal
            open={update}
            onClose={() => setUpdate(false)}
            gift={selectedGift}
            onSuccess={() => {
              setRefresh((prev) => !prev);
              setUpdate(false);
            }}
          />
        )}
      </div>
    </>
  );
}

export default React.memo(AllGiftTable);
