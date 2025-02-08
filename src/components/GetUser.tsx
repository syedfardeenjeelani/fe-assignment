import { useState, useEffect } from "react";
import { addUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store/store";
import { initializeLocalStorage } from "../utils/initLocalStorage";

const GetUser = () => {
  const [username, setUsername] = useState("");
  const [detectedTimezone, setDetectedTimezone] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const timezoneOffsets = [
    { value: "UTC-08:00", label: "Pacific Time (PST) - UTC-08:00" },
    { value: "UTC-07:00", label: "Mountain Time (MST) - UTC-07:00" },
    { value: "UTC-06:00", label: "Central Time (CST) - UTC-06:00" },
    { value: "UTC-05:00", label: "Eastern Time (EST) - UTC-05:00" },
    { value: "UTC-04:00", label: "Atlantic Time (AST) - UTC-04:00" },
    { value: "UTC-03:00", label: "Argentina Time (ART) - UTC-03:00" },
    { value: "UTC-01:00", label: "Cape Verde Time (CVT) - UTC-01:00" },
    { value: "UTC+00:00", label: "Greenwich Mean Time (GMT) - UTC+00:00" },
    { value: "UTC+01:00", label: "Central European Time (CET) - UTC+01:00" },
    { value: "UTC+02:00", label: "Eastern European Time (EET) - UTC+02:00" },
    { value: "UTC+03:00", label: "Moscow Standard Time (MSK) - UTC+03:00" },
    { value: "UTC+03:30", label: "Iran Standard Time (IRST) - UTC+03:30" },
    { value: "UTC+04:00", label: "Gulf Standard Time (GST) - UTC+04:00" },
    { value: "UTC+05:00", label: "Pakistan Standard Time (PKT) - UTC+05:00" },
    { value: "UTC+05:30", label: "Indian Standard Time (IST) - UTC+05:30" },
    { value: "UTC+06:00", label: "Bangladesh Time (BST) - UTC+06:00" },
    { value: "UTC+07:00", label: "Indochina Time (ICT) - UTC+07:00" },
    { value: "UTC+08:00", label: "China Standard Time (CST) - UTC+08:00" },
    { value: "UTC+09:00", label: "Japan Standard Time (JST) - UTC+09:00" },
    { value: "UTC+09:30", label: "Australian Central Time (ACST) - UTC+09:30" },
    { value: "UTC+10:00", label: "Australian Eastern Time (AEST) - UTC+10:00" },
    { value: "UTC+12:00", label: "New Zealand Time (NZST) - UTC+12:00" },
  ];
  useEffect(() => {
     initializeLocalStorage();
    const detectedTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setDetectedTimezone(detectedTz);
    const date = new Date();
    const options: any = { timeZoneName: "short" };
    const locale = "en-US";
    const computedOffset : any = date
      .toLocaleString(locale, options)
      .split(" ")
      .pop();
    setTimezoneOffset(computedOffset);
  }, []);
 
  useEffect(() => {
    if (currentUser) {
      navigate(`/dashboard/${currentUser}`);
    } else {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleSubmit = () => {
    if (!username.trim()) {
      alert("Please enter your name");
      return;
    }
    dispatch(addUser({ username, timezone: timezoneOffset }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          User Timezone
        </h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />

        <p className="mt-4 text-gray-600 text-sm">
          Your detected timezone:{" "}
          <span className="font-semibold text-gray-900">
            {detectedTimezone} (Default Offset: {timezoneOffset})
          </span>
        </p>

        <div className="mt-6">
          <label
            htmlFor="timezoneOffset"
            className="block text-sm font-medium text-gray-700"
          >
            Or select your timezone offset manually:
          </label>
          <select
            id="timezoneOffset"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={timezoneOffset}
            onChange={(e) => setTimezoneOffset(e.target.value)}
          >
            <option value="">Select UTC Offset</option>
            {timezoneOffsets.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetUser;
