const sortString = (str) => {
  let charArray = str.split("");
  charArray.sort();
  return charArray.join("");
};

export const checkAnagram = (first, second) => {
  

  // Anagram have same length
  // This step can be skip
  // This step is still call to prevent/skip unnecessary processing when comparing two string.
  if (first.length !== second.length) return false;
  

  // Sort each string in accending order base on their characters
  // Compare those sorted string
  return sortString(first) === sortString(second);

};
