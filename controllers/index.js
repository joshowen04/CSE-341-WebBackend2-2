displayCourses = (req, res) => {
    const data = [
        {id:1, name:'cse-341'},
        {id:2, name:'polsc-110'},
        {id:3, name:'rel-225c'},
        {id:4, name:'nutr-150'}
      ];
    res.status(200).send(data);
  };
  


displayName = (req, res) => {
    const data = 'Luisa Quispe';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayName,
    displayCourses
  };