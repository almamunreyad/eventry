"use client";

import Link from "next/link";
import { addInterestedEvent } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useState, useTransition } from "react";
import { useRouter } from "next/router";

const ActionButtons = ({ eventId, interestedUserIds, formDetails }) => {
  const { auth } = useAuth();

  const router = useRouter();

  const isInterested = interestedUserIds.find(
    (id) => id.toString() === auth?.id?.toString(),
  );

  const [interested, setInterested] = useState(isInterested);

  const [isPending, startTransition] = useTransition();

  async function toggleInterest() {
    if (auth) {
      await addInterestedEvent(eventId, auth?.id);
      setInterested(!interested);
    } else {
      router.push("/login");
      console.log("Please login to add interest");
    }
  }

  return (
    <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
        className={`w-full ${interested && "bg-indigo-600 hover:bg-indigo-800"}`}
      >
        {isPending ? "Adding..." : "Interested"}
      </button>
    </div>
  );
};
