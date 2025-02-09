export const initializeLocalStorage = () => {
  const data = localStorage.getItem("usersData");
  const parsedData = data ? JSON.parse(data) : {};

  // Check if parsed data is empty or has fewer than 10 users
  if (Object.keys(parsedData).length < 10) {
    const sampleData = {
      john_doe: {
        timezone: "UTC+05:30",
        availability: {
          "2024-02-20": ["09:00-11:00", "14:00-16:00"],
          "2024-02-21": ["10:00-12:00"],
        },
      },
      jane_smith: {
        timezone: "UTC-05:00",
        availability: {
          "2024-02-20": ["08:00-10:00"],
          "2024-02-22": ["13:00-15:00"],
        },
      },
      user3: {
        timezone: "UTC+01:00",
        availability: {
          "2024-02-20": ["10:00-12:00"],
        },
      },
      user4: {
        timezone: "UTC+02:00",
        availability: {
          "2024-02-21": ["11:00-13:00"],
        },
      },
      user5: {
        timezone: "UTC+03:00",
        availability: {
          "2024-02-22": ["09:00-11:00"],
        },
      },
      user6: {
        timezone: "UTC+04:00",
        availability: {
          "2024-02-23": ["14:00-16:00"],
        },
      },
      user7: {
        timezone: "UTC+05:00",
        availability: {
          "2024-02-24": ["08:00-10:00"],
        },
      },
      user8: {
        timezone: "UTC+06:00",
        availability: {
          "2024-02-25": ["15:00-17:00"],
        },
      },
      user9: {
        timezone: "UTC+07:00",
        availability: {
          "2024-02-26": ["12:00-14:00"],
        },
      },
      user10: {
        timezone: "UTC+08:00",
        availability: {
          "2024-02-27": ["10:00-12:00"],
        },
      },
    };
    localStorage.setItem("usersData", JSON.stringify(sampleData));
  }
};
