"use client";
import "@radix-ui/themes/styles.css";
import {
  Button,
  RadioGroup,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faPhone,
  faUser,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import ImageUpload from "./ImageUpload";

export default function JobForm() {
  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);

  return (
    <Theme>
      <div className="container mx-auto max-w-4xl mt-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Post a New Job
        </h2>

        <form className="flex flex-col gap-6" method="POST">
          {/* Job Title */}
          <div>
            <TextField.Root
              name="title"
              placeholder="Job Title"
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Icon and Contact Person Section */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3>Job Icon</h3>
              <ImageUpload name="jobIcon" icon={faFile} />
            </div>
            <div>
              {" "}
              <h3>Contact Person</h3>
              <div className="flex flex-row gap-4">
                <div className="flex gap-4">
                  <ImageUpload name="personPhoto" icon={faUser} />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <TextField.Root
                    placeholder="Tony Stalker"
                    name="name"
                    className="w-full"
                  >
                    <TextField.Slot>
                      <FontAwesomeIcon icon={faUser} />
                    </TextField.Slot>
                  </TextField.Root>
                  <TextField.Root
                    placeholder="Phone"
                    name="phone"
                    className="w-full"
                    type="tel"
                  >
                    <TextField.Slot>
                      <FontAwesomeIcon icon={faPhone} />
                    </TextField.Slot>
                  </TextField.Root>
                  <TextField.Root
                    placeholder="TonyStalker@gmail.com"
                    className="w-full"
                    name="email"
                    type="email"
                  >
                    <TextField.Slot>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </TextField.Slot>
                  </TextField.Root>
                </div>
              </div>
            </div>
          </div>

          {/* Remote Options, Employment Type, and Salary */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-medium">Remote?</label>
              <RadioGroup.Root
                defaultValue="hybrid"
                name="remote"
                className="flex gap-4"
              >
                <RadioGroup.Item
                  value="onsite"
                  className="p-2 rounded-md hover:scale-105 hover:shadow-lg"
                >
                  <span className="p-2 rounded-md bg-white text-gray-600 hover:bg-blue-500 hover:text-white shadow-md">
                    On-site
                  </span>
                </RadioGroup.Item>

                <RadioGroup.Item
                  value="hybrid"
                  className="p-2 rounded-md hover:scale-105 hover:shadow-lg"
                >
                  <span className="p-2 rounded-md bg-white text-gray-600 hover:bg-blue-500 hover:text-white shadow-md">
                    Hybrid
                  </span>
                </RadioGroup.Item>

                <RadioGroup.Item
                  value="remote"
                  className="p-2 rounded-md hover:scale-105 hover:shadow-lg"
                >
                  <span className="p-2 rounded-md bg-white text-gray-600 hover:bg-blue-500 hover:text-white shadow-md">
                    Remote
                  </span>
                </RadioGroup.Item>
              </RadioGroup.Root>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-medium">
                Employment Type
              </label>
              <RadioGroup.Root
                defaultValue="full"
                name="type"
                className="flex gap-4"
              >
                <RadioGroup.Item
                  value="project"
                  className="p-2 rounded-md hover:scale-105 hover:shadow-lg"
                >
                  <span className="p-1 rounded-md bg-white text-gray-600 hover:bg-blue-500 hover:text-white shadow-md">
                    Project
                  </span>
                </RadioGroup.Item>

                <RadioGroup.Item
                  value="part"
                  className="p-2 rounded-md hover:scale-105 hover:shadow-lg"
                >
                  <span className="p-1 rounded-md bg-white text-gray-600 hover:bg-blue-500 hover:text-white shadow-md">
                    Part-time
                  </span>
                </RadioGroup.Item>

                <RadioGroup.Item
                  value="full"
                  className="p-2 rounded-md hover:scale-105 hover:shadow-lg"
                >
                  <span className="p-1 rounded-md bg-white text-gray-600 hover:bg-blue-500 hover:text-white shadow-md">
                    Full-time
                  </span>
                </RadioGroup.Item>
              </RadioGroup.Root>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-medium">Salary</label>
              <TextField.Root
                name="salary"
                placeholder="Amount"
                className="border border-gray-300 w-full py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-600">$k/year</span>
            </div>
          </div>

          {/* Location Section */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="text-gray-700 font-medium">Country</label>
              <CountrySelect
                onChange={(e: any) => setCountryId(e.id)}
                className="w-full"
                placeHolder="Select Country"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">State</label>
              <StateSelect
                countryid={countryId}
                onChange={(e: any) => setStateId(e.id)}
                className="w-full"
                placeHolder="Select State"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">City</label>
              <CitySelect
                stateid={stateId}
                countryid={countryId}
                onChange={(e: any) => setCityId(e.id)}
                className="w-full"
                placeHolder="Select City"
              />
            </div>
          </div>

          {/* Job Description */}
          <TextArea
            placeholder="Job Description"
            resize={"vertical"}
            name="description"
            className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Theme>
  );
}
