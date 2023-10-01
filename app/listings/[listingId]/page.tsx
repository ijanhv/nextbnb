import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import LisitngClient from "./LisitngClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);

  const currentUser = await getCurrentUser();

  if (!listing) return <EmptyState />;

  return <LisitngClient currentUser={currentUser} listing={listing} reservations={reservations}/>;
};

export default ListingPage;
