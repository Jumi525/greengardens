import React from "react";

const Customer = () => {
  return <p>hello</p>;
};

export default Customer;

{
  /* <section className="">
      <section className="deGrid items-center rounded-lg mx-auto text-center mb-4 grid sm:grid-cols-[70px_1.5fr_1fr_1fr_150px] max-w-[945px] bg-[#052620]/50 h-11">
        <p>Id</p>
        <p>Name</p>
        <p className="block desecondG">Date</p>
        <p className="font-bold hidden sm:block">Payment</p>
        <p className="hidden sm:block">Status</p>
      </section>

      <section className="scrollparent mx-auto">
        {customerTable.map((val, index) => (
          <AlertDialog key={index}>
            <AlertDialogTrigger className=" w-full">
              <section
                key={index}
                className="deGrid scrollchild  items-center text-center grid sm:grid-cols-[70px_1.5fr_1fr_1fr_150px] max-w-[945px] h-11 hover:bg-[#EAD494]/80"
              >
                <p>{val.id}</p>
                <div className="flex items-center justify-center gap-2">
                  <Home />
                  <p>{val.name}</p>
                </div>
                <p className="block desecondG">{val.date}</p>
                <p className="font-bold hidden sm:block">${val.payment}</p>
                <span className="hidden sm:grid sm:place-content-center">
                  <p className="bg-red-500/40 hidden sm:block px-2 py-[2px] rounded-full">
                    {val.status}
                  </p>
                </span>
              </section>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[400px] sm:w-[500px]">
              <AlertDialogHeader className=" relative">
                <AlertDialogTitle>{val.name}</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="flex flex-col gap-2 text-left">
                    <p>{val.date}</p>
                    <p>{val.name}</p>
                    <p>${val.payment}</p>
                    <p className="bg-red-500/40 px-2 py-[2px] rounded-full max-w-max">
                      {val.status}
                    </p>
                    <div className="flex justify-start w-full items-center">
                      <Star className="hover:fill-yellow-400/90 hover:text-yellow-400/90 size-5" />
                      <Star className="hover:fill-yellow-400/90 hover:text-yellow-400/90" />
                      <Star className="hover:fill-yellow-400/90 hover:text-yellow-400/90" />
                      <Star className="hover:fill-yellow-400/90 hover:text-yellow-400/90" />
                      <Star className="hover:fill-yellow-400/90 hover:text-yellow-400/90" />
                    </div>
                    <input
                      type="text"
                      placeholder="Feedback"
                      className="pl-1 py-2"
                    />
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="absolute top-0 right-2 sm:top-2 hover:border-red-700 border-solid border-2 px-2">
                  <X />
                </AlertDialogCancel>
                <AlertDialogAction>Apply</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ))}
      </section>
    </section> */
}
