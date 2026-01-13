export default function UserDetails({ user, onClose }) {
  return (
    <div className="p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-xl opacity-80">User Details</h3>
        <button className="lg:hidden" onClick={onClose}>
          ✕
        </button>
      </div>
      <Detail label="Category" value="Host" />
      <Detail label="User ID" value={`UID-${user?.id}`} />
      <Detail label="Username" value={user?.username} />
      <Detail label="Gender" value={user?.gender} />
      <Detail label="Level" value={user?.level} />
      <Detail label="Location" value={user?.location} />
      <Detail label="Email" value={user?.email} />
      <Detail label="Issue Type" value={user?.issue} red />
    </div>
  );
}

function Detail({ label, value, red }) {
  return (
    <div className="mb-3">
      <p className="text-xs font-semibold text-[#585858] mb-0.5">{label}</p>
      <p
        className={`text-sm font-semibold opacity-80 ${red && "text-red-500"}`}
      >
        {value}
      </p>
    </div>
  );
}
