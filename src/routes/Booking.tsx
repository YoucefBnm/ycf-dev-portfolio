import { Suspense } from "react";
import { InlineWidget } from "react-calendly";
import RouteTransition from "../hoc/RouteTransition";

const Booking = () => {
  return (
    <Suspense>
      <main className=" py-16 m-auto">
        <InlineWidget url="https://calendly.com/ycf-bnm" />
      </main>
    </Suspense>
  );
};

const AsyncBooking = RouteTransition(Booking);
export default AsyncBooking;
