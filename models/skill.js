const skills = [
    {skill: 'HTML', have: true},
    {skill: 'CSS', have: true},
    {skill: 'Javascript', have: true}
];

module.exports = {
    getAll,
    getOne,
    create
};

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills
}