const skills = [
    {id: 125223, skill: 'HyperText Markup Language HTML', done: true},
    {id: 127904, skill: 'Cascading Style Sheets CSS', done: false},
    {id: 139608, skill: 'JavaScript', done: false}
];
	
module.exports = {
    getAll,
    getOne,
    create
};

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);

}

function getAll() {
    return skills;
}