const subin = {
    name: "subin",
    age: 18,
    gender: "male"
};
const resolvers = {
    Query: {
        person: () => subin
    }
};

export default resolvers;