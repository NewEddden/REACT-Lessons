function SkillsList({ title, skills }) {
  const skillsStyle = {
    listStyle: 'number',
  };
  return (
    <>
      <h2>{title}</h2>

      <ul style={skillsStyle}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

export default SkillsList;
