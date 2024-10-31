const profileData = {
  firstName: "Elhadj",
  lastName: "Diallo",
  cityOfBirth: "Dalaba",
  age: 26,
};

const twinData = profileData;
console.log(profileData);
console.log(twinData);

twinData.firstName = "Abdoul";
twinData.city = "London";
console.log(profileData);
console.log(twinData === profileData);
console.log(profileData.city);
