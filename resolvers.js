const { students } = require('./data');

let nextId = 3;

const resolvers = {
  Query: {
    students: () => students,

    student: (_, { id }) => students.find(student => student.id === id),
  },
  Mutation: {
    addStudent: (_, { name, credits }) => {
      const newStudent = {
        id: String(nextId++),
        name,
        credits,
      };

      students.push(newStudent);

      return newStudent;
    },
  },
};

module.exports = resolvers;
