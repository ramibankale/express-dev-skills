const skills = [
    {id: 125223, skill: 'HyperText Markup Language HTML', done: true},
    {id: 127904, skill: 'Cascading Style Sheets CSS', done: false},
    {id: 139608, skill: 'JavaScript', done: false}
];
	
module.exports = {
    getAll
};
	
function getAll() {
    return skills;
}