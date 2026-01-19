import { Funnel, LoaderCircle, SquarePen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import AddFAQsModal from "./AddFAQsModal";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL, formatOnlyDate } from "../../../utility/utility";
import Loading from "../../Loading";
import Error from "../../Error";
import useDelete from "../../../hooks/useDelete";
import UpdateFaq from "./UpdateFaq";
import { useGlobalConfirm } from "../../../context/ConfirmProvider";
import { toast } from "react-toastify";

export default function FAQsList() {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [text, setText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/support-agency/faq`,
    refresh,
  );
  const [faqs, setFaqs] = useState(data?.data || []);
  const { confirm } = useGlobalConfirm();
  const [isLoading, setIsLoading] = useState(null);
  //handle Filter
  const handleFilter = () => {
    const filteredFaq = faqs.filter((faq) => {
      return (
        faq.question.toLowerCase().includes(text.toLowerCase()) ||
        faq.category.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFaqs(filteredFaq);
  };

  //handleDelete
  const deleteUser = useDelete(`${BASE_URL}/support-agency/faq`);

  const handleDelete = async (id) => {
    const ok = await confirm("Are you sure to delete?");
    if (!ok) return;

    setIsLoading(id);
    const result = await deleteUser(id);
    if (!result) {
      toast.error("Failed to delete faq");
    } else {
      toast.success(result.message);
    }
    setIsLoading(null);
    setFaqs(faqs?.filter((faq) => faq._id !== id));
  };

  //handleEdit
  const handleEdit = (faq) => {
    setEdit(true);
    setSelectedFaq(faq);
  };

  useEffect(() => {
    if (text === "") {
      setFaqs(data?.data);
    }
  }, [text, data]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4">
        {/* Search Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by question or category"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={handleFilter}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <Funnel size={18} /> Filter
          </button>
          <button
            onClick={() => setOpen(true)}
            className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            + Add FAQ
          </button>
        </div>
      </div>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-5 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-6">FAQ ID</th>
              <th className="p-3">Question</th>
              <th className="p-3">Category</th>
              <th className="p-3">Evidence</th>
              <th className="p-3">Status</th>
              <th className="p-3">Last Updated</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {faqs?.length > 0 ? (
              faqs?.map((faq) => (
                <tr
                  key={faq._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 pl-6 font-medium">
                    TKT-{faq?.createdBy?.displayId}
                  </td>
                  <td className="p-3 ">{faq?.question}</td>
                  <td className="p-3">
                    <span className="px-3 py-1.5 text-sm bg-[#ACACAC] text-[#ffffff] rounded-full font-medium">
                      {faq?.category[0].toUpperCase() + faq?.category.slice(1)}
                    </span>
                  </td>
                  <td className="p-3">{faq?.createdBy?.name}</td>
                  <td className="p-3">
                    <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                      Published
                    </span>
                  </td>
                  <td className="p-3">{formatOnlyDate(faq?.updatedAt)}</td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-4 items-center">
                    <button onClick={() => handleEdit(faq)}>
                      <SquarePen size={17} />
                    </button>
                    <button onClick={() => handleDelete(faq?._id)}>
                      {isLoading === faq?._id ? (
                        <LoaderCircle size={17} />
                      ) : (
                        <Trash2 size={17} className="text-[#FF0037]" />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No FAQ Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {open && (
          <AddFAQsModal
            open={open}
            onClose={() => setOpen(false)}
            onSuccess={() => {
              setRefresh((prev) => !prev);
              setOpen(false);
            }}
          />
        )}

        <div>
          {edit && (
            <UpdateFaq
              edit={edit}
              onEdit={() => setEdit(false)}
              faq={selectedFaq}
              onSuccess={() => {
                setRefresh((prev) => !prev);
                setEdit(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
