import clsx from "clsx";
import React, { useState } from "react";

const CommunityCard = () => {
  const [recommended] = useState([
    { title: "Ahmed", location: "lagos" },
    { title: "Thompson", location: "abuja" },
    { title: "Elon", location: "benin" },
    { title: "Success", location: "ekiti" },
    { title: "Gabiel", location: "akure" },
    { title: "Precious", location: "warri" },
  ]);
  return (
    <section className="w-full pt-8 h-full px-2">
      <p className="mt-0 mb-2 text-center">Farmers Community</p>
      <div
        className={clsx(
          "grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center px-2",
          {
            "grid grid-cols-1 place-content-center w-full h-full":
              recommended.length === 0,
          }
        )}
      >
        {recommended.length ? (
          recommended.map((value, index) => (
            <div
              key={index}
              className="bg-green-300 recommedgrid flex flex-col gap-2 text-left px-3 rounded-lg py-3 h-full"
            >
              <p>
                Fullname: <span>{value.title}</span>
              </p>
              <p>
                Location: <span>{value.location}</span>
              </p>

              <p>
                Title:{" "}
                <span className="px-2 py-1 border-2 border-black border-solid rounded-full">
                  {"farmer"}
                </span>
              </p>
              <p className="text-sm">
                Email: <span>{`${value.title}@gmail.com`}</span>
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full m-auto">No farmer in the community yet</p>
        )}
      </div>
    </section>
  );
};

export default CommunityCard;
