const API = function() {
  this.database = [
    {
      id: 1,
      name: "React.js",
      language: "JavaScript",
      description: "Front-end library powered by Facebook",
      initRelease: 2013,
    },
    {
      id: 2,
      name: "Angular",
      language: "JavaScript",
      description:
        "Angular is a platform for building mobile and desktop web applications.",
      initRelease: 2016,
    },
    {
      id: 3,
      name: "Node.js",
      language: "JavaScript",
      description:
        "Is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      initRelease: 2009,
    },
  ];

  this.getData = () => {
    return new Promise((resolve) => {
      resolve(this.database);
    });
  };

  this.addData = (data) => {
    return new Promise((resolve) => {
      this.database.push(data);
      resolve(true);
    });
  };

  this.deleteData = (data) => {
    return new Promise((resolve, reject) => {
      /* const index = this.database.findIndex((item) => {
        item.id === data 
      }); */

      var f;
      const found = this.database.some(function(item, index) { 
        f = index;
        return item.id === parseInt(data); 
      });

      if (found) {
        this.database.splice(f, 1);
        resolve(true);
      } else {
        reject(false);
      }
    });
  };
};

module.exports.API = API;
