import Link from "next/link";

const ActionButtons = ({ formDetails }) => {
  return (
    <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      <Link href="/payment" className="w-full">
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;
