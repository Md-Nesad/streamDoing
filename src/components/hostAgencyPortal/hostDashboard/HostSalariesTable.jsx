export default function HostSalariesTable() {
  const data = [
    {
      id: 1,
      name: "Sarah Johnson",
      userId: "198465",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Romana Hoq",
      userId: "248465",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Oishi Khanom",
      userId: "123465",
      image: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      name: "Rofiqa Hoq",
      userId: "368465",
      image: "https://i.pravatar.cc/40?img=4",
    },
    {
      id: 5,
      name: "Oishi Khanom",
      userId: "968465",
      image: "https://i.pravatar.cc/40?img=5",
    },
  ];

  return (
    <>
      <div className=" bg-white rounded-xl shadow">
        <table className="w-full border-collapse text-sm overflow-x-auto">
          {/* HEADER */}
          <thead>
            <tr>
              <th rowSpan="2" className="border-b border-r p-3">
                #
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Profile Picture
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Name
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                User ID
              </th>
              <th colSpan="2" className="border-b border-r p-3 text-center">
                Total Day
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Video Time
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Audio Time
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Diamond Share
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Basic Salary
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Total Salary
              </th>
              <th rowSpan="2" className="border-b p-3">
                Agency Share
              </th>
            </tr>

            <tr>
              <th className="border p-2">Video</th>
              <th className="border p-2">Audio</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-nowrap">
            {data.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="border-t border-r p-3">{index + 1}</td>

                <td className="border-t border-r p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>

                <td className="border-t border-r p-3">{item.name}</td>
                <td className="border-t border-r p-3">{item.userId}</td>
                <td className="border-t border-r p-3">13</td>
                <td className="border-t border-r p-3">13</td>
                <td className="border-t border-r p-3">24H 15m</td>
                <td className="border-t border-r p-3">17H 15m</td>
                <td className="border-t border-r p-3">10k</td>
                <td className="border-t border-r p-3">98$</td>
                <td className="border-t border-r p-3">98$</td>
                <td className="border-r-0 border-t p-3">98$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
