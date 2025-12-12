import React, { useState } from "react";
import AddNewBannerModal from "../../modals/assests/AddNewBanner";
import AddNewBadgeModal from "../../modals/assests/AddNewBadge";
import AddNewTemplateModal from "../../modals/assests/AddNewTemplate";
import AddNewFrameModal from "../../modals/assests/AddNewFrame";
import AddVip from "../../modals/assests/AddVip";
import AddNewCrown from "../../modals/assests/AddNewCrown";

export default function AssestsDropdown() {
  const [openBanner, setOpenBanner] = useState(false);
  const [openBadge, setOpenBadge] = useState(false);
  const [openTemplate, setOpenTemplate] = useState(false);
  const [openFrame, setOpenFrame] = useState(false);
  const [openVip, setOpenVip] = useState(false);
  const [openCrown, setOpenCrown] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  return (
    <>
      <div className="bg-linear-to-t from-[#6DA5FF] to-[#F576D6] text-white w-45 rounded flex flex-col animatefadeIn">
        <button
          onClick={() => setOpenBanner(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 pt-3 hover:transition-all hover:duration-300 block"
        >
          Add New Banner{" "}
        </button>
        <button
          onClick={() => setOpenBadge(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 hover:transition-colors hover:duration-500 block"
        >
          Add New Badge
        </button>
        <button
          onClick={() => setOpenTemplate(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 hover:transition-colors hover:duration-500"
        >
          Add New Template
        </button>
        <button
          onClick={() => setOpenFrame(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 transition-colors duration-300"
        >
          Add New Frame
        </button>
        <button
          onClick={() => setOpenVip(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 transition-colors duration-300"
        >
          Add New VIP
        </button>
        <button
          onClick={() => setOpenCrown(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 transition-colors duration-300"
        >
          Add New Crown
        </button>
        <button
          onClick={() => setOpenEntry(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 transition-colors duration-300"
        >
          Add New Entry
        </button>
        <button
          onClick={() => setOpenEvent(true)}
          className="hover:bg-linear-to-t from-[#76a8f77c] to-[#fe9ae592] p-2 transition-colors duration-300"
        >
          Add New Event
        </button>
      </div>
      {openBanner && (
        <AddNewBannerModal
          open={openBanner}
          onClose={() => setOpenBanner(false)}
        />
      )}
      {/* badge*/}
      {openBadge && (
        <AddNewBadgeModal
          open={openBadge}
          onClose={() => setOpenBadge(false)}
        />
      )}
      {/* template */}
      {openTemplate && (
        <AddNewTemplateModal
          open={openTemplate}
          onClose={() => setOpenTemplate(false)}
        />
      )}
      {/* frame */}
      {openFrame && (
        <AddNewFrameModal
          open={openFrame}
          onClose={() => setOpenFrame(false)}
        />
      )}
      {/* vip */}
      {openVip && <AddVip open={openVip} onClose={() => setOpenVip(false)} />}
      {/* crown   */}
      {openCrown && (
        <AddNewCrown open={openCrown} onClose={() => setOpenCrown(false)} />
      )}
    </>
  );
}
