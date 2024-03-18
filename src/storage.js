const Storage = {};

Storage.get = function (name) {
  return localStorage.getItem(name);
};

Storage.set = function (name, val) {
  localStorage.setItem(name, val);
};

Storage.del = function (name) {
  localStorage.removeItem(name);
};

Storage.clear = function () {
  localStorage.clear();
};

export default Storage;
