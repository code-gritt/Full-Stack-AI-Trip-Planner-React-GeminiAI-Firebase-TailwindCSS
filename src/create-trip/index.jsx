import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  return (
    <>
      <div className="sm:px-10 h-screen md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
        <h1 className="bold-52 lg:bold-88">Tell us your travel preference</h1>
        <p className="mt-6 text-gray-500 text-2xl xl:max-w-[520px]">
          Just provide us some more details
        </p>

        <div>
          <div>
            <h2 className="text-4xl font-bold mt-20">
              What is your choice of destination?
            </h2>
            <GooglePlacesAutocomplete apiKey="****" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTrip;
